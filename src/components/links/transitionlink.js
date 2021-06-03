import TransitionLink from 'gatsby-plugin-transition-link'

export default (props) => {
    return(
    <TransitionLink
        to={props.to}
        exit={{
            trigger: ({exit, node}) => this.interestingExitAnimation(exit, node),
            length: 1
        }}
        entry={{
            delay: 0.6
        }}
    >
        {props.text}
    </TransitionLink>
    )
}