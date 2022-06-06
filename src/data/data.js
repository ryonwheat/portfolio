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
      // icon: '<FiGithub />',
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
      // icon: '<FiLinkedin />'
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
      // icon: '<FiCodepen />'
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
      // icon: '<FiInstagram />'
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
      // icon: '<FiFacebook />'
    },
  ],
  // socialLinks: {
  //     twitter: ``,
  // },
  siteContact: {
    email: "hello@ryonwheat.com",
    phone: "720.777.7777",
  },
  githubApiQuery: `query ($number_of_repos: Int!) {
        viewer {
          name
          avatarUrl
          isHireable
          resourcePath
          repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
            nodes {
              name
              description
              homepageUrl
              forkCount
              createdAt
              updatedAt
              resourcePath
              languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
                edges {
                  node {
                    name
                    color
                  }
                }
              }
              licenseInfo {
                name
              }
              stargazers {
                totalCount
              }
            }
          }
        }
    }`,
  githubApiVariables: {
    number_of_repos: 12,
  },
  skills: [
    {
      name: "HTML5",
      rating: 5,
      type: "frontend",
      url: "https://www.w3.org/TR/2011/WD-html5-20110405/",
      icon: {
        prefix: "fab",
        name: "html5",
        color: "rgb(228 78 38)",
        size: iconSize.x4,
        type: iconType.fontAwesome,
      },
    },
    {
      name: "CSS3",
      rating: 5,
      type: "frontend",
      url: "",
      icon: {
        prefix: "fab",
        name: "css3",
        color: "rgb(0 112 185)",
        size: iconSize.x4,
        type: iconType.fontAwesome,
      },
    },
    {
      name: "Sass",
      rating: 3,
      type: "frontend",
      url: "",
      icon: {
        prefix: "fab",
        name: "sass",
        color: "#da8eb6",
        size: iconSize.x4,
        type: iconType.fontAwesome,
      },
    },
    {
      name: "JS",
      rating: 5,
      type: "frontend",
      url: "",
      icon: {
        prefix: "fab",
        name: "js",
        color: "rgb(99 168 19)",
        size: iconSize.x4,
        type: iconType.fontAwesome,
      },
    },
    {
      name: "Bootstrap",
      rating: 4,
      type: "frontend",
      url: "",
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
      url: "",
      icon: {
        prefix: "fab",
        name: "react",
        color: "#61dafb",
        size: iconSize.x4,
        type: iconType.fontAwesome,
      },
    },
    {
      name: "Gatsby",
      rating: 3,
      type: "frontend",
      url: "",
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
      url: "",
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
      url: "",
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
        url: "",
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
      url: "",
      icon: {
        prefix: "fab",
        name: "angular",
        color: "#c3032f",
        size: iconSize.x4,
        type: iconType.fontAwesome,
      },
    },
    {
      name: "Express",
      rating: 5,
      type: "backend",
      url: "",
      icon: {
        prefix: "si",
        name: "SiExpress",
        color: "#ffffff",
        size: iconSize["3rem"],
        type: "",
      },
    },
    {
      name: "NodeJs",
      rating: 5,
      type: "backend",
      url: "",
      icon: {
        prefix: "fab",
        name: "node-js",
        color: "#43853d",
        size: iconSize.x4,
        type: iconType.fontAwesome,
      },
    },
    {
      name: "Java",
      rating: 5,
      type: "backend",
      url: "",
      icon: {
        prefix: "fab",
        name: "java",
        color: "",
        size: iconSize.x4,
        type: iconType.fontAwesome,
      },
    },
    {
      name: "php",
      rating: 5,
      type: "backend",
      url: "",
      icon: {
        prefix: "fab",
        name: "php",
        color: "#8892bf",
        size: iconSize.x3,
        type: iconType.fontAwesome,
      },
    },
    {
      name: "AWS",
      rating: 5,
      type: "devops",
      url: "",
      icon: {
        prefix: "fab",
        name: "aws",
        color: "#ec912d",
        size: iconSize.x3,
        type: iconType.fontAwesome,
      },
    },
    {
      name: "Google Cloud",
      rating: 5,
      type: "devops",
      url: "",
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
      url: "",
      icon: {
        prefix: "fab",
        name: "github",
        color: "",
        size: iconSize.x4,
        type: iconType.fontAwesome,
      },
    },
    {
      name: "Gitlab",
      rating: 5,
      type: "devops",
      url: "",
      icon: {
        prefix: "fab",
        name: "gitlab",
        color: "",
        size: iconSize.x4,
        type: iconType.fontAwesome,
      },
    },
    {
      name: "Codepen",
      rating: 5,
      type: "devops",
      url: "",
      icon: {
        prefix: "fab",
        name: "codepen",
        color: "",
        size: iconSize.x4,
        type: iconType.fontAwesome,
      },
    },
    {
      name: "Spring",
      rating: 2,
      type: "framework",
      url: "",
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
      url: "",
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
      url: "",
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
      url: "cms",
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
      url: "cms",
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
      url: "",
      icon: {
        prefix: "fab",
        name: "linux",
        color: "",
        size: iconSize.x4,
      },
    },
    {
      name: "Ubuntu",
      rating: 5,
      type: "OS",
      url: "",
      icon: {
        prefix: "fab",
        name: "ubuntu",
        color: "#d8391f",
        size: iconSize.x4,
        type: iconType.fontAwesome,
      },
    },
    {
      name: "Suse",
      rating: 5,
      type: "OS",
      url: "",
      icon: {
        prefix: "fab",
        name: "suse",
        color: "#70b425",
        size: iconSize.x4,
        type: iconType.fontAwesome,
      },
    },
    {
      name: "Centos",
      rating: 5,
      type: "OS",
      url: "",
      icon: {
        prefix: "fab",
        name: "centos",
        color: "#a14f8c",
        size: iconSize.x4,
        type: iconType.fontAwesome,
      },
    },
    {
      name: "Fedora",
      rating: 5,
      type: "OS",
      url: "",
      icon: {
        prefix: "fab",
        name: "fedora",
        color: "#52a2da",
        size: iconSize.x4,
        type: iconType.fontAwesome,
      },
    },
    {
      name: "Mac",
      rating: 5,
      type: "OS",
      url: "",
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
      url: "",
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
      url: "",
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
      url: "",
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
      url: "",
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
      url: "",
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
      url: "",
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
      url: "",
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
      url: "",
      icon: {
        prefix: "si",
        name: "SiGraphql",
        color: "#e10098",
        size: iconSize["3rem"],
        type: iconType.reactIcons,
      },
    },
  ],
  books: [],
  shows: [],
  music: [],
  podcasts: [],
}
