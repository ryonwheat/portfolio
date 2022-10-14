import React, { Component } from "react"
import PageTransition from "gatsby-plugin-page-transitions"
import { Transition } from "react-transition-group"

const transitionTime = 350

const pageTransitionEvent = "gatsby-plugin-page-transition::exit"
const defaultStyles = {
  transition: `opacity ${transitionTime}ms ease-in`,
  opacity: "1",

  //   transition: "left 500ms cubic-bezier(0.47, 0, 0.75, 0.72)",
  //   left: "100%",
  //   position: "absolute",
  //   width: "100%",
}
const transitionStyles = {
  entering: { opacity: "0" },
  entered: { opacity: "1" },
  exiting: { opacity: "0" },
  exited: { opacity: "0" },
  //   entering: { left: "0%", opacity: "0.5" },
  //   entered: { left: "0%", opacity: "1" },
  //   exiting: { left: "100%", opacity: "0" },
}

const fadeDefault = {
  transition: `opacity ${transitionTime}ms ease-in`,
  opacity: "1",
}
const fadeTransition = {
  entering: { opacity: "0" },
  entered: { opacity: "1" },
  exiting: { opacity: "0" },
  exited: { opacity: "0" },
}

// const timeout = 500
// const getTransitionStyles = {
//   entering: {
//     position: `absolute`,
//     opacity: 0,
//   },
//   entered: {
//     transition: `opacity ${timeout}ms ease-in-out`,
//     opacity: 1,
//   },
//   exiting: {
//     transition: `opacity ${timeout}ms ease-in-out`,
//     opacity: 0,
//   },
// }

class TransitionHandler extends Component<any, { in: boolean }> {
  constructor(props: any) {
    super(props)
    console.log("TransitionHandler props: ", props)
    this.listenHandler = this.listenHandler.bind(this)
    this.locationPathname =
      props.location == null ? "" : props.location.pathname
    this.state = {
      in: false,
    }
  }

  componentDidMount() {
    global.window.addEventListener(pageTransitionEvent, this.listenHandler)
    this.setState({ in: true })
  }

  listenHandler() {
    this.setState({ in: false })
  }

  componentWillUnmount() {
    global.window.removeEventListener(pageTransitionEvent, this.listenHandler)
  }

  shouldComponentUpdate() {
    return this.props.location != null
      ? this.props.location.pathname === window.location.pathname
      : false
  }

  render() {
    return (
      <PageTransition transitionTime={transitionTime}>
        <Transition
          in={this.state.in}
          key={this.locationPathname}
          timeout={transitionTime}
          // timeout={{
          //   enter: transitionTime,
          //   exit: transitionTime,
          // }}
        >
          {(status) => (
            <div
              style={{
                ...defaultStyles,
                ...transitionStyles[status],
                // ...fadeDefault,
                // ...fadeTransition[status],
              }}
            >
              {this.props.children}
            </div>
          )}
        </Transition>
      </PageTransition>
    )
  }
}
export default TransitionHandler
