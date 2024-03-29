import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const constants = {
  dark: {
    backgroundColor: "#0b2c59",
    color: "",
    linkColor: "#38bdf8",
    linkHoverColor: "#ffffc1",
  },
  light: {
    backgroundColor: "#f8f8f9", // #f2f2f2",
    color: "",
    linkColor: "#0ea5e9", //"#157bd1",
    linkHoverColor: "green", //"#0e75c9", //"#63ffda",
  },
}

export const theme = {
  font: {
    sans: "Roboto, Inter, Cambay, sans-serif",
    serif: "Arvo, sans",
    monospace: '"Ubuntu Mono", monospace',
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
  },
  fontWeight: {
    hairline: "100",
    thin: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },
  lineHeight: {
    normal: "1.5",
    tall: "2.2",
  },
  letterSpacing: {
    normal: "normal",
    wide: "3px",
  },
  color: {
    white: "#ffffff",
    black: "#000000",
    gray: {
      900: "#999999",
    },
    red: "#ff0000",
    limegreen: "#D0FF94",
  },
  // link: {
  //     color: '#459bf1',
  //     textDecoration: 'none',
  // },
  // linkHover: {
  //     color: '#63ffda',
  //     textDecoration: 'underline',
  // },
  darkMode: {
    backgroundColor: constants.dark.backgroundColor, //"#0b2c59", //"rgb(22 32 51)", // '#0a192f'
    primaryColor: "hsla(0, 0%, 100%, 0.8)",
    secondaryColor: "#ffffb1",
    link: {
      color: constants.dark.linkColor, // "#38bdf8", //"#459bf1",
      secondaryColor: "#0049ad",
      textDecoration: "none",
    },
    linkHover: {
      color: constants.dark.linkHoverColor,
      textDecoration: "underline",
    },
    headerBackgroundColor: "rgba(11, 44, 89, 0.5)", //rgba(81,83,147,0.5), // constants.dark.backgroundColor, // "#0b2c59", //"#1b3c69",
    pageTitle: constants.dark.linkColor, //"#459bf1",
  },
  lightMode: {
    backgroundColor: constants.light.backgroundColor,
    primaryColor: "hsla(0, 0%, 0%, 0.8)",
    secondaryColor: "#1966b2", // '#79B6F2'
    link: {
      color: constants.light.linkColor,
      textDecoration: "none",
    },
    linkHover: {
      color: constants.light.linkHoverColor,
      textDecoration: "underline",
    },
    headerBackgroundColor: constants.light.backgroundColor, //"rgba(11, 44, 89, 1)",
    pageTitle: constants.light.linkColor, //"#459bf1",
  },
}

export const GlobalStyle = createGlobalStyle`

//  ${reset}

    *, *:before, *:after {
        box-sizing: inherit;
    }

    * {
        margin: 0;
        padding: 0;
        border: 0;
    }

    html {
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-family: ${({ theme }) => theme.font.sans};
        // font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: ${({ theme }) => theme.fontSize.base};
        font-weight: ${({ theme }) => theme.fontWeight.normal};
        margin: 0;
        padding: 0;
    }

    body {
        // background-color: ${({ theme }) => theme.color.gray[900]};
        color: ${({ theme }) => theme.color.red};
        line-height: ${({ theme }) => theme.lineHeight.normal};
        letter-spacing: ${({ theme }) => theme.letterSpacing.normal};
        margin: 0;
        padding: 0;
        // height: 100vh;
        overflow-x: hidden;
    }

    body::-webkit-scrollbar {
        width: 12px;               /* width of the entire scrollbar */
    }
      
    body::-webkit-scrollbar-track {
        background: ${({ theme }) =>
          theme.darkMode
            .backgroundColor};        /* color of the tracking area */
        border-left: 1px solid #4f4f4f;
    }
      
    body::-webkit-scrollbar-thumb {
        background-color: #0D356D;    /* color of the scroll thumb */
        border-radius: 0px;       /* roundness of the scroll thumb */
        border: 1px solid #3f6f9f;  /* creates padding around scroll thumb */
    }

    @media screen and (prefers-color-scheme: dark) {
        body {
          background-color: ${({ theme }) => theme.darkMode.backgroundColor};
          color: ${({ theme }) => theme.darkMode.primaryColor};;
        }
    }

    a {
        color: ${({ theme }) => theme.lightMode.link.color};
        text-decoration: ${({ theme }) => theme.lightMode.link.textDecoration};
    }

    a:hover {
        color: ${({ theme }) => theme.lightMode.linkHover.color};
        text-decoration: ${({ theme }) =>
          theme.lightMode.linkHover.textDecoration};
    }

    h1 {
        margin-bottom: 2rem;
    }

    h5 {
        font-size: 1rem;
    }

    // header {
    //     position: sticky;
    //     top: 0;
    //     z-index: 100;
    // }

    p {
        margin-bottom: 1.45rem;
    }

    .wrapper {
        margin: 0 auto;
        padding: 0;
        // height: 100vh;
        // border: 2px solid orange;
    }

    .page-container {
        margin: 0 auto;
        padding: 0;
    }

    // .canvas .container {
    //     position: absolute;
    //     animation: stars linear infinite;
    //     z-index: 1;
    //     opacity: .5;
    // }

    // .canvas .container .star {
    //     border-radius: 100%;
    // }

    // .canvas .container:nth-child(n) {
    //     width: 3px;
    //     height: 3px;
    //     left: 30vw;
    //     animation-delay: -993.8s;
    //     animation-duration: 10s;
    // }

    // .canvas .container:nth-child(n) .star {
    //     width: inherit;
    //     height: inherit;
    //     background: #efefef;
    //     // animation-delay: 93.8s;
    //     // animation-duration: 15s;
    // }

    // @keyframes stars {
    //     0% {
    //         transform: translateY(110vh) translateZ(0);
    //     }
    //     100% {
    //         transform: translateY(-10vh) translateZ(0) scale(2);
    //     }
    // }

    .dark {
        background-color: ${({ theme }) => theme.darkMode.backgroundColor};
        color: ${({ theme }) => theme.darkMode.primaryColor};
        // opacity: .85;
        transition: all 0.6s ease;
    }
      
    .light {
        background-color: ${({ theme }) => theme.lightMode.backgroundColor};
        color: ${({ theme }) => theme.lightMode.primaryColor};
        transition: all 0.6s ease;
    }

    .gradient {
        background: linear-gradient(to right, #516af3, #e050a0); // #3ec7e0, #e050a0
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    
    .gradient-button {
        background-color: #0ea5e9;
        // background: linear-gradient(to right, #516af3, #38bdf8);
        border-radius: 8px;
        color: #fff;
        font-size: 1rem;
        font-weight: 500;
        padding: 14px 28px;
        transition: all 0.4s;
    }

    .gradient-button:hover {
        background-color: #e050a0;
        // background: linear-gradient(to left, #516af3, #e050a0);
        transition: all 0.4s;
    }

    input, textarea {
      outline: none;
      border-image-source: linear-gradient(rgba(0, 51, 102, 0.5), rgba(0, 0, 51, 0.5));
      border-width: 5pt;
      border-image-slice: 1;
    }

    .form-group {
        margin-bottom: 2.2rem;
    }

    .form-label {
        color: #cecece;
    }

    .light .form-label {
        color: #27272a;
    }

    .form-input {
        // border-image-source: linear-gradient(to right, red, yellow) 1;
        border-radius: 2px;
        // border-width: 2px;
        background-color: rgba(23,27,30,0.5);
        // background: #15417e;
        border: 2px solid #4d5261;
        // border-bottom: 1px solid #13aff0;
        color: #cecece;
        padding: 10px 6px;
    }

    .form-input:focus {
        border-color: #0ea5e9; // #47F4CF;
        background-color: #0ea5e92e; // rgba(71,244,207,0.18);
        color: #ffffff; // #0ea5e9;
    }

    .light .form-input {
        background: #fff;
        color: #414144;
    }

    .form-control {
        display: block;
        width: 100%;
        // height: calc(1.5rem + 0.75rem + 2px);
        // padding: 0.75rem 0.75rem;
        font-size: .85rem;
        font-weight: 300;
        line-height: 1.5;
    }

    textarea.form-control {
        font-family: inherit;
        height: 8rem;
    }

    .error-text {
        // height: 20px;
    }

    .line {
        height: 2px;
    }

    .line:hover {
        border-top: 1px solid #0ea5e9;
    }

    .center {
        text-align: center;
    }

    .upper {
        text-transform: uppercase;
    }

    .row {
        display: flex;
        flex-direction: row;
        flex-wrap: none;
        align-items: center;
        justify-content: space-around;
    }

    .flex-align-start {
      align-items: flex-start;
    }

    .flex-item {
        flex: 1;
        // margin: auto;
        // border: 1px solid red;
    }

    .col, .col1, .col2, .col3, .col4, .col5, .col6, .col7, .col8, .col9, .col10, .col11, .col12 {
      padding: 0 15px;
      width: 100%;
      max-width: 100%;
    }

    .col {
        flex-basis: 0;
        flex-grow: 1;
    }

    .col1 {
        flex: 0 0 8.3333%;
    }
      
    .col2 {
        flex: 0 0 16.67%;
    }
      
    .col3 {
        flex: 0 0 25%;
    }
      
    .col4 {
        flex: 0 0 33.33%;
    }
      
    .col5 {
        flex: 0 0 41.66%;
    }
      
    .col6 {
        flex: 0 0 50%;
    }
      
    .col7 {
        flex: 0 0 58.33%;
    }
      
    .col8 {
        flex: 0 0 66.67%;
    }
      
    .col9 {
        flex: 0 0 75%;
    }
      
    .col10 {
        flex: 0 0 83.33%;
    }
      
    .col11 {
        flex: 0 0 91.67%;
    }
      
    .col12 {
        flex-basis: 0 0 100%;
    }

    .space {
        padding: 0 6px;
    }


    // Animations
    @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
    }
  
`
