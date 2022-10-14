const iconSize = {
  xs: "xs",
  lg: "lg",
  "1rem": "1.2rem",
  "3rem": "3.5rem",
  "4rem": "4rem",
  x3: "3x",
  x4: "4x",
}

const iconType = {
  fontAwesome: "fontAwesome",
  reactIcons: "reactIcons",
}

module.exports = {
  siteTitle: `Web Portfolio`,
  siteAuthor: `Ryan Heath`,
  siteUrl: `https://ryonwheat.com`,
  siteMenuLinks: [
    {
      name: "home",
      link: "/",
      render: false,
    },
    {
      name: "about",
      link: "/about",
      render: true,
    },
    {
      name: "projects",
      link: "/projects",
      render: true,
    },
    {
      name: "skills",
      link: "/skills",
      render: true,
    },
    {
      name: "blog",
      link: "/blog",
      render: true,
    },
    {
      name: "portfolio",
      link: "/portfolio",
      render: false,
    },
    {
      name: "contact",
      link: "/contact",
      render: true,
    },
  ],
  siteSocialMedia: [
    {
      name: "Github",
      url: "https://github.com/ryonwheat",
      icon: {
        prefix: "fi",
        name: "FiGithub",
        color: "",
        size: iconSize["1rem"],
      },
    },
    {
      name: "Linkedin",
      url: "https://linkedin.com/in/ryancheath/",
      icon: {
        prefix: "fi",
        name: "FiLinkedin",
        color: "",
        size: iconSize["1rem"],
      },
    },
    {
      name: "Codepen",
      url: "https://codepen.com/ryonwheat",
      icon: {
        prefix: "fi",
        name: "FiCodepen",
        color: "",
        size: iconSize["1rem"],
      },
    },
    {
      name: "Instagram",
      url: "https://instagram.com/ryonwheat",
      icon: {
        prefix: "fi",
        name: "FiInstagram",
        color: "",
        size: iconSize["1rem"],
      },
    },
    {
      name: "Facebook",
      url: "https://facebook.com/ryonwheat",
      icon: {
        prefix: "fi",
        name: "FiFacebook",
        color: "",
        size: iconSize["1rem"],
      },
    },
  ],
  siteContact: {
    email: "hello@ryonwheat.com",
    phone: "720.777.7777",
  },
  //   githubApiQuery: `query ($number_of_repos: Int!) {
  //         viewer {
  //           name
  //           avatarUrl
  //           isHireable
  //           resourcePath
  //           repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
  //             nodes {
  //               name
  //               description
  //               homepageUrl
  //               forkCount
  //               createdAt
  //               updatedAt
  //               resourcePath
  //               languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
  //                 edges {
  //                   node {
  //                     name
  //                     color
  //                   }
  //                 }
  //               }
  //               licenseInfo {
  //                 name
  //               }
  //               stargazers {
  //                 totalCount
  //               }
  //             }
  //           }
  //         }
  //     }`,
  githubApiVariables: {
    number_of_repos: 20,
    //   github_login: process.env.GITHUB_LOGIN,
    //   q: "author:ryonwheat state:closed type:pr sort:comments",
    //   author: "ryonwheat"
  },
  taglines: [
    "Husband",
    "Daddy",
    "Superhero (according to my kids)",
    "Real estate investor",
    "Full stack web developer",
  ],
  skills: [
    {
      name: "HTML5",
      rating: 5,
      type: "frontend",
      url: "https://www.w3.org/TR/2011/WD-html5-20110405/",
      icon: {
        prefix: "si",
        name: "SiHtml5",
        color: "rgb(228 78 38)",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "CSS3",
      rating: 5,
      type: "frontend",
      url: "https://www.w3.org/TR/2001/WD-css3-roadmap-20010523/",
      icon: {
        prefix: "si",
        name: "SiCss3",
        color: "rgb(0 112 185)",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Sass",
      rating: 3,
      type: "frontend",
      url: "https://sass-lang.com/",
      icon: {
        prefix: "si",
        name: "SiSass",
        color: "#da8eb6",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "JS",
      rating: 5,
      type: "frontend",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: {
        prefix: "si",
        name: "SiJavascript",
        color: "rgb(99 168 19)",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Bootstrap",
      rating: 4,
      type: "frontend",
      url: "https://getbootstrap.com/",
      icon: {
        prefix: "si",
        name: "SiBootstrap",
        color: "#712cf9",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "React",
      rating: 3,
      type: "frontend",
      url: "https://reactjs.org/",
      icon: {
        prefix: "si",
        name: "SiReact",
        color: "#61dafb",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Gatsby",
      rating: 3,
      type: "frontend",
      url: "https://www.gatsbyjs.com/",
      icon: {
        prefix: "si",
        name: "SiGatsby",
        color: "#7026B9",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Typescript",
      rating: 3,
      type: "frontend",
      url: "https://www.typescriptlang.org/",
      icon: {
        prefix: "si",
        name: "SiTypescript",
        color: "#ffffff",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Redux",
      rating: 3,
      type: "frontend",
      url: "https://redux.js.org/",
      icon: {
        prefix: "si",
        name: "SiRedux",
        color: "#764abc",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Json",
      rating: 5,
      type: "",
      url: "https://www.json.org/json-en.html",
      icon: {
        prefix: "si",
        name: "SiJson",
        color: "#ffffff",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Angular",
      rating: 5,
      type: "frontend",
      url: "https://angular.io/",
      icon: {
        prefix: "si",
        name: "SiAngular",
        color: "#c3032f",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Express",
      rating: 5,
      type: "backend",
      url: "https://expressjs.com/",
      icon: {
        prefix: "si",
        name: "SiExpress",
        color: "#ffffff",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "NodeJs",
      rating: 5,
      type: "backend",
      url: "https://nodejs.org/en/",
      icon: {
        prefix: "si",
        name: "SiNodedotjs",
        color: "#43853d",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Java",
      rating: 5,
      type: "backend",
      url: "https://www.java.com/en/",
      icon: {
        prefix: "si",
        name: "SiJava",
        color: "",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "php",
      rating: 5,
      type: "backend",
      url: "https://www.php.net/",
      icon: {
        prefix: "si",
        name: "SiPhp",
        color: "#8892bf",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Python",
      rating: 5,
      type: "backend",
      url: "https://www.python.org/",
      icon: {
        prefix: "si",
        name: "SiPython",
        color: "",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "AWS",
      rating: 5,
      type: "devops",
      url: "https://aws.amazon.com/",
      icon: {
        prefix: "si",
        name: "SiAmazonaws",
        color: "#ec912d",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Google Cloud",
      rating: 5,
      type: "devops",
      url: "https://cloud.google.com/",
      icon: {
        prefix: "si",
        name: "SiGooglecloud",
        color: "",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Github",
      rating: 5,
      type: "devops",
      url: "https://github.com/",
      icon: {
        prefix: "si",
        name: "SiGithub",
        color: "",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Gitlab",
      rating: 5,
      type: "devops",
      url: "https://about.gitlab.com/",
      icon: {
        prefix: "si",
        name: "SiGitlab",
        color: "",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Codepen",
      rating: 5,
      type: "devops",
      url: "https://codepen.io/",
      icon: {
        prefix: "si",
        name: "SiCodepen",
        color: "",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Netlify",
      rating: 5,
      type: "devops",
      url: "https://www.netlify.com/",
      icon: {
        prefix: "si",
        name: "SiNetlify",
        color: "",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "npm",
      rating: 5,
      type: "devops",
      url: "https://www.npmjs.com/",
      icon: {
        prefix: "si",
        name: "SiNpm",
        color: "",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Spring",
      rating: 2,
      type: "framework",
      url: "https://spring.io/",
      icon: {
        prefix: "si",
        name: "SiSpring",
        color: "#6db33e",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Springboot",
      rating: 2,
      type: "framework",
      url: "https://spring.io/projects/spring-boot/",
      icon: {
        prefix: "si",
        name: "SiSpringboot",
        color: "#6db33e",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },

    {
      name: "Visual Studio",
      rating: 2,
      type: "framework",
      url: "https://visualstudio.microsoft.com/",
      icon: {
        prefix: "si",
        name: "SiVisualstudio",
        color: "#c994f7",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Jamstack",
      rating: 2,
      type: "stack",
      url: "https://jamstack.org/",
      icon: {
        prefix: "si",
        name: "SiJamstack",
        color: "#d1036f",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Salesforce",
      rating: 5,
      type: "cms",
      url: "https://www.salesforce.com/",
      icon: {
        prefix: "si",
        name: "SiSalesforce",
        color: "#00a2df",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Wordpress",
      rating: 3,
      type: "cms",
      url: "https://wordpress.org/",
      icon: {
        prefix: "si",
        name: "SiWordpress",
        color: "#ffffff",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Linux",
      rating: 5,
      type: "OS",
      url: "https://www.linux.org/",
      icon: {
        prefix: "si",
        name: "SiLinux",
        color: "",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Ubuntu",
      rating: 5,
      type: "OS",
      url: "https://ubuntu.com/",
      icon: {
        prefix: "si",
        name: "SiUbuntu",
        color: "#d8391f",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Suse",
      rating: 5,
      type: "OS",
      url: "https://www.suse.com/",
      icon: {
        prefix: "si",
        name: "SiSuse",
        color: "#70b425",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Centos",
      rating: 5,
      type: "OS",
      url: "https://www.centos.org/",
      icon: {
        prefix: "si",
        name: "SiCentos",
        color: "#a14f8c",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Fedora",
      rating: 5,
      type: "OS",
      url: "https://getfedora.org/",
      icon: {
        prefix: "si",
        name: "SiFedora",
        color: "#52a2da",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Mac",
      rating: 5,
      type: "OS",
      url: "https://www.apple.com/macos/",
      icon: {
        prefix: "si",
        name: "SiMacos",
        color: "",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Windows",
      rating: 5,
      type: "OS",
      url: "https://www.microsoft.com/en-us/windows?r=1",
      icon: {
        prefix: "si",
        name: "SiWindows",
        color: "",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Bash",
      rating: 3,
      type: "",
      url: "https://www.gnu.org/software/bash/",
      icon: {
        prefix: "si",
        name: "SiGnubash",
        color: "#ffffff",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Perl",
      rating: 2,
      type: "",
      url: "https://www.perl.org/",
      icon: {
        prefix: "si",
        name: "SiPerl",
        color: "#ffffff",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Openssl",
      rating: 3,
      type: "",
      url: "https://www.openssl.org/",
      icon: {
        prefix: "si",
        name: "SiOpenssl",
        color: "#ffffff",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Tomcat",
      rating: 4,
      type: "servers",
      url: "https://tomcat.apache.org/",
      icon: {
        prefix: "si",
        name: "SiApachetomcat",
        color: "",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Apache",
      rating: 4,
      type: "servers",
      url: "https://www.apache.org/",
      icon: {
        prefix: "si",
        name: "SiApache",
        color: "",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Mysql",
      rating: 4,
      type: "databases",
      url: "https://www.mysql.com/",
      icon: {
        prefix: "si",
        name: "SiMysql",
        color: "",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Graphql",
      rating: 4,
      type: "databases",
      url: "https://graphql.org/",
      icon: {
        prefix: "si",
        name: "SiGraphql",
        color: "#e10098",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Zapier",
      rating: 4,
      type: "api",
      url: "https://zapier.com/",
      icon: {
        prefix: "si",
        name: "SiZapier",
        color: "",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Peloton",
      rating: 4,
      type: "api",
      url: "https://app.swaggerhub.com/apis/DovOps/peloton-unofficial-api/0.3.0/",
      icon: {
        prefix: "si",
        name: "SiPeloton",
        color: "",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Spotify API",
      rating: 4,
      type: "api",
      url: "https://developer.spotify.com/",
      icon: {
        prefix: "si",
        name: "SiSpotify",
        color: "",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Twilio",
      rating: 4,
      type: "api",
      url: "https://www.twilio.com/",
      icon: {
        prefix: "si",
        name: "SiTwilio",
        color: "",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Twitter API",
      rating: 4,
      type: "api",
      url: "https://developer.twitter.com/en/docs/twitter-api/",
      icon: {
        prefix: "si",
        name: "SiTwitter",
        color: "",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Zillow",
      rating: 4,
      type: "api",
      url: "https://www.zillow.com/howto/api/GetSearchResults.htm/",
      icon: {
        prefix: "si",
        name: "SiZillow",
        color: "",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "GoogleMaps",
      rating: 4,
      type: "api",
      url: "https://developers.google.com/maps/",
      icon: {
        prefix: "si",
        name: "SiGooglemaps",
        color: "",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "Filezilla",
      rating: 4,
      type: "application",
      url: "https://filezilla-project.org/",
      icon: {
        prefix: "si",
        name: "SiFilezilla",
        color: "",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "MS Word",
      rating: 4,
      type: "application",
      url: "",
      icon: {
        prefix: "si",
        name: "SiMicrosoftword",
        color: "",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
    {
      name: "MS Excel",
      rating: 4,
      type: "application",
      url: "",
      icon: {
        prefix: "si",
        name: "SiMicrosoftexcel",
        color: "",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
  ],
  gsap: [
    {
      name: "rotatingBox",
      title: "Animation Sequence",
      render: true,
    },
    {
      name: "orbit",
      title: "Electrons",
      render: true,
    },
    {
      name: "orbit2",
      title: "Planets",
      render: true,
    },
  ],
  books: [],
  shows: [],
  music: [],
  podcasts: [],
}
