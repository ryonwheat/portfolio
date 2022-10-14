import { wrapRootElement as wrap } from "./root-wrapper"

export const onRouteUpdate = ({ location, prevLocation }) => {
    console.log("new pathname", location.pathname)
    console.log("old pathname", prevLocation ? prevLocation.pathname : null)
}

export const wrapRootElement = wrap