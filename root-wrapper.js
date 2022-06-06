import * as React from "react"
import { ThemeProvider as ThemeContext } from "./src/components/themeContext"
import { ThemeProvider } from "styled-components"
// import Layout from "./src/components/layout"
import { GlobalStyle, theme } from "./src/theme/global-style"
// import theme from "./src/styles/theme"

export const wrapRootElement = ({ element, location }) => (
    <ThemeContext>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {/* <Layout location={location}> */}
            <div className="wrapper">
                {element}
            </div>
            {/* </Layout> */}
        </ThemeProvider>
    </ThemeContext>
)

// export const wrapPageElement = ({ element, location }) => (
//     <>
//         <GlobalStyle />
//         <Layout location={location}>
//             {element}
//         </Layout>
//     </>
// )
