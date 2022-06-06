import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const constants = {
  dark: {
    backgroundColor: "#0b2c59",
    color: "",
    linkColor: "#38bdf8",
    linkHoverColor: "#ffffc1",
  },
  light: {
    backgroundColor: "#f9f9f9", // #f2f2f2",
    color: "",
    linkColor: "#0ea5e9", //"#157bd1",
    linkHoverColor: "green", //"#0e75c9", //"#63ffda",
  },
};

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
    headerBackgroundColor: "rgba(11, 44, 89, 1)",
    pageTitle: constants.light.linkColor, //"#459bf1",
  },
};

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
        background: linear-gradient(to right, #516af3, #38bdf8);
        border-radius: 8px;
        color: #fff;
        font-size: 1.5rem;
        font-weight: 700;
        padding: 14px;
    }

    .gradient-button:hover {
        background: linear-gradient(to left, #516af3, #e050a0);
    }

    input, textarea {
      outline: none;
    }

    .form-group {
        margin-bottom: 2rem;
    }

    .form-input {
        background: #0d356d;
        border: none;
        border-bottom: 1px solid #13aff0;
        border-radius: 0;
        color: #ffffff;
    }

    .form-control {
        display: block;
        width: 100%;
        height: calc(1.5rem + 0.75rem + 2px);
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
    }

    textarea.form-control {
      height: auto;
    }

    .center {
        text-align: center;
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


    // .angular {
    //   color: #c3032f;
    // }
    
    // .aws {
    //   color: #ec912d;
    // }
    
    // .html5 {
    //   color: rgb(228 78 38);
    // }
    
    // .css3 {
    //   color: rgb(0 112 185);
    // }
    
    // .sass {
    //   color: #da8eb6;
    // }
    
    // .fedora {
    //   color: #52a2da;
    // }
    
    // .js {
    //   color: rgb(99 168 19);
    // }
    
    // .node-js {
    //   color: #43853d;
    // }
    
    // .php {
    //   color: #8892bf;
    // }
    
    // .react {
    //   color: #61dafb;
    // }
    
    // .suse {
    //   color: #70b425;
    // }
    
    // .ubuntu {
    //   color: #d8391f;
    // }
    
    // .centos {
    //   color: #a14f8c;
    // }
    
      
`;
