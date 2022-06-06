// import * as React from "react"
import { wrapRootElement as wrap } from "./root-wrapper"
// import { wrapPageElement as pageWrap } from "./root-wrapper"
// import { ThemeProvider as ThemeContext } from "./src/components/themeContext"
// import { ThemeProvider } from "styled-components"

// import { ThemeProvider } from "./src/components/themeContext"
// import { GlobalStyle, theme } from "./src/theme/global-style"
// import Layout from "./src/components/layout"
// import type { GatsbyBrowser } from "gatsby"

export const onRouteUpdate = ({ location, prevLocation }) => {
    console.log("new pathname", location.pathname)
    console.log("old pathname", prevLocation ? prevLocation.pathname : null)
}

export const wrapRootElement = wrap



// export const wrapPageElement = pageWrap
// export const wrapRootElement = ({ element, location }) => (
//     <ThemeProvider theme={theme}>
//         <ThemeContext>
//             <GlobalStyle />
//             <Layout location={location}>
//                 {element}
//             </Layout>
//         </ThemeContext>
//     </ThemeProvider>
//     // <>
//     //     <GlobalStyle />
//     //     <Layout location={location}>
//     //         {element}
//     //     </Layout>
//     // </>    
// )

// export const wrapPageElement = ({ element, location }) => (
//     <>
//         <GlobalStyle />
//         <Layout location={location}>
//             {element}
//         </Layout>
//     </>    
// )

// exports.wrapPageElement = ({ element, props }) => {
//     return <Layout {...props}>{element}</Layout>
// }