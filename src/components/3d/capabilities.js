import React from "react";
import * as THREE from "three";
// import { OBJLoader2 } from "three/examples/jsm/loaders/OBJLoader2";
// import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
// import { MtlObjBridge } from "three/examples/jsm/loaders/obj2/bridge/MtlObjBridge";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { gsap } from "gsap";
import { RoughnessMipmapper } from "three/examples/jsm/utils/RoughnessMipmapper";
import { black } from "tailwindcss/colors";

export default class Capabilities3D extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.threeD);
    let container = this.threeD;
    let camera, scene, renderer, controls, action, mixer, car, animationFrame;
    let mouseX = 0;
    let mouseY = 0;

    let raycaster, INTERSECTED;
    const mouse = new THREE.Vector2();
    const tempV = new THREE.Vector3();

    container.parentNode.parentNode.addEventListener(
      "mousemove",
      function onDocumentMouseMove(event) {
        mouseX = (event.clientX - container.offsetWidth / 2) / 100;
        mouseY = (event.clientY - container.offsetHeight / 2) / 100;
      }
    );

    init();
    render();

    const clock = new THREE.Clock();

    function init() {
      raycaster = new THREE.Raycaster();
      camera = new THREE.PerspectiveCamera(
        35,
        container.offsetWidth / container.offsetHeight,
        0.25,
        1000
      );
      camera.position.set(1, 1, 8);
      // camera = new THREE.OrthographicCamera(-4.84,7.5,7.36,-2.58,0,2000);
      // camera.position.set(0.66,9.780,100.020);
      // camera.rotation.set(-6.40,-0.60,0);
      // camera.zoom.set(1);

      scene = new THREE.Scene({ alpha: true });

      new RGBELoader()
        .setDataType(THREE.UnsignedByteType)
        .setPath("https://sbmpresentation.s3.us-west-1.amazonaws.com/ford/3d/car/")
        .load("royal_esplanade_1k.hdr", function (texture) {
          const envMap = pmremGenerator.fromEquirectangular(texture).texture;

          //   scene.background = envMap;
          scene.environment = envMap;

          texture.dispose();
          pmremGenerator.dispose();

          render();

          // model

          // use of RoughnessMipmapper is optional
          const roughnessMipmapper = new RoughnessMipmapper(renderer);

          const loader = new GLTFLoader().setPath(
            "https://sbmpresentation.s3.us-west-1.amazonaws.com/ford/3d/car/"
            // "./assets/car/"
          );
          loader.setDRACOLoader(
            new DRACOLoader().setDecoderPath("https://sbmpresentation.s3.us-west-1.amazonaws.com/ford/3d/car/")
          );
          loader.load("scene.gltf", function (gltf) {
            gltf.scene.traverse(function (child) {
              if (child.isMesh) {
                // TOFIX RoughnessMipmapper seems to be broken with WebGL 2.0
                roughnessMipmapper.generateMipmaps(child.material);
                child.castShadow = true;
                child.receiveShadow = true;
              }
            });

            renderer.shadowMapEnabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

            console.log(gltf);
            car = gltf.scene;
            mixer = new THREE.AnimationMixer(gltf.scene);
            action = mixer.clipAction(gltf.animations[0]);
            action.play();

            const color = 0xffffff;
            const intensity = 1;
            const light = new THREE.DirectionalLight(color, intensity);
            light.castShadow = false;
            light.position.set(1.644, 8, 35.824);
            light.target.position.set(0, 0, 0);
            scene.add(light);
            // scene.add(light.target);
            light.shadow.camera.right = 20;
            light.shadow.camera.top = 20;
            light.shadow.radius = 3;
            // light.shadow.bias = .8;

            //Fix Sizing?

            // var mroot = gltf.scene;
            // var bbox = new THREE.Box3().setFromObject(mroot);
            // var cent = bbox.getCenter(new THREE.Vector3());
            // var size = bbox.getSize(new THREE.Vector3());

            // //Rescale the object to normalized space
            // var maxAxis = Math.max(size.x, size.y, size.z);
            // mroot.scale.multiplyScalar((15.0 / maxAxis));
            // bbox.setFromObject(mroot);
            // bbox.getCenter(cent);
            // bbox.getSize(size);
            // //Reposition to 0,halfY,0
            // mroot.position.copy(cent).multiplyScalar(-1);

            scene.add(gltf.scene);
            roughnessMipmapper.dispose();
            animate();
          });
        });

    //   function update() {
    //     //   mixer.update(deltaSeconds);
    //   }
      //   const clip = THREE.AnimationClip.findByName(clips)

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(container.offsetWidth, container.offsetHeight);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1;
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);

      const pmremGenerator = new THREE.PMREMGenerator(renderer);
      pmremGenerator.compileEquirectangularShader();

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = false;
      controls.mouseButtons = {
        LEFT: null,
        MIDDLE: null,
        RIGHT: null,
      };
      controls.addEventListener("change", render); // use if there is no animation loop
      controls.minDistance = 2;
      controls.maxDistance = 10;
      controls.target.set(0, 0, -0.2);
      controls.update();

      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

      window.addEventListener("resize", onWindowResize, false);
    }

    function onWindowResize() {
      camera.aspect =  container.offsetWidth / container.offsetHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(container.offsetWidth, container.offsetHeight);
    }

    function animate() {
      animationFrame = requestAnimationFrame(animate);

      const delta = clock.getDelta();

      mixer.update(delta);

      controls.update();

      renderer.render(scene, camera);
    }

    function render() {
      renderer.render(scene, camera);
    }

    // function nextSection() {
    // 	console.log('click!')
    // 	// action.play();
    // 	gsap.to( camera.position, {
    // 		duration: 2,
    // 		x: 9,
    // 		z: 0,
    // 		y: 5.5,
    // 		onUpdate: function () {
    // 			camera.updateProjectionMatrix();
    // 			// controls.update();
    // 			// console.log(action);
    // 			// action.play();
    // 		}
    // 	} );

    // 	gsap.to( controls, {
    // 		duration: 2,
    // 		onUpdate: function () {
    // 			controls.update();
    // 		}
    // });
    // }

    this.next.addEventListener('click', function() {
    	console.log('next');
    	console.log(car);
    	gsap.to(car.rotation, {
    		// x: '+=1',
    		// y: 0,
    		y: '+=1.570795',
    		duration: 1,
    	})
    	action.reset()
    	action.timeScale = 1;
    	action.setLoop(THREE.LoopOnce);
    	action.play();
    });

    this.prev.addEventListener("click", function () {
      console.log("prev");
      gsap.to(car.rotation, {
        // x: '+=1',
        // y: 0,
        y: "-=1.570795",
        duration: 1,
      });
      action.timeScale = -1;
      action.setLoop(THREE.LoopOnce);
      action.play();
    });

    container.parentNode.parentNode.addEventListener(
      "mousemove",
      function onDocumentMouseMove(event) {
        mouseX = (event.clientX - container.offsetWidth / 2) / 100;
        mouseY = (event.clientY - container.offsetHeight / 2) / 100;
        // console.log(mouseX, mouseY);
        camera.position.x = 0.0 + (mouseX - camera.position.x) * 0.02;
        camera.position.y = 1.0 + (mouseY - camera.position.y) * 0.02;
      }
    );

  }

  render() {
    return (
        <div className="w-full  h-screen-75 relative" style={{
            backgroundColor: 'black',
            backgroundImage: 'radial-gradient(at center, white 50%, #04000000 71%)',
            backgroundPosition: '50% -500px',
            backgroundSize: '150% 10000px',
            backgroundRepeat: 'no-repeat',
        }}>

            <div className="pt-24 mx-auto max-w-screen-lg flex flex-row w-full items-center justify-center">
                <button className="button m-8 text-white" ref={el => (this.prev = el)}>Prev</button>
                <button className="button m-8 text-white" ref={el => (this.next = el)}>Next</button>
            </div>
      <div
        className="w-full h-full"
        ref={el => (this.threeD = el)}>
        </div>
        </div>
    );
  }
}
