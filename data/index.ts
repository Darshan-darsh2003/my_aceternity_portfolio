export const navItems = [
  { name: "About", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "Skills", link: "/skills" },
  { name: "Resume", link: "/resume" },
  { name: "Contact", link: "/contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

const LOGO = {
  html: "./assets/html.svg",
  css: "./assets/css.svg",
  javascript: "./assets/javascript.svg",
  typescript: "./assets/typescript.svg",
  dart: "./assets/dart.svg",
  python: "./assets/python.svg",
  java: "./assets/java.svg",
  react: "./assets/react.svg",
  flutter: "./assets/flutter.svg",
  node: "./assets/node-js.svg",
  flask: "./assets/flask.svg",
  django: "./assets/django.svg",
  git: "./assets/git.svg",
  gitlab: "./assets/gitlab.svg",
  github: "./assets/github.svg",
  mySql: "./assets/mysql.svg",
  sqlLite: "./assets/sqlite.svg",
  mongodb: "./assets/mongodb.svg",
  postgreSql: "./assets/postgreSql.svg",
  bootstrap: "./assets/bootstrap.svg",
  tailwind: "./assets/tailwind.svg",
  materialUI: "./assets/materialUI.svg",
  mantineUI: "./assets/mantineUI.svg",
  shadcnUI: "./assets/shadcnUI.svg",
  kafka: "./assets/kafka.svg",
  gitlabCICD: "./assets/gitlab.svg",
  docker: "./assets/docker.svg",
  jenkins: "./assets/jenkins.svg",
};

export const skills = {
  languages: [
    {
      logo: LOGO.html,
      name: "Html",
      description: "Used for structuring web pages.",
    },
    {
      logo: LOGO.css,
      name: "Css",
      description: "Used for styling web pages.",
    },
    {
      logo: LOGO.javascript,
      name: "JavaScript",
      description: "Used for creating interactive web applications.",
    },
    {
      logo: LOGO.typescript,
      name: "TypeScript",
      description: "A superset of JavaScript that adds static types.",
    },
    {
      logo: LOGO.dart,
      name: "Dart",
      description: "Used for building web, server, and mobile applications.",
    },
    {
      logo: LOGO.python,
      name: "Python",
      description:
        "A versatile programming language used for web development, data science, automation, and more.",
    },
    {
      logo: LOGO.java,
      name: "Java",
      description:
        "A widely-used programming language for building server-side applications, Android apps, and more.",
    },
  ],
  frameworks: {
    webDevelopment: [
      {
        logo: LOGO.react,
        name: "React JS",
        description: "A JavaScript library for building user interfaces.",
      },
      {
        logo: LOGO.node,

        name: "Node JS",
        description:
          "A JavaScript runtime built on Chrome's V8 JavaScript engine, used for building scalable network applications.",
      },
      {
        logo: LOGO.flask,
        name: "Flask",
        description: "A lightweight WSGI web application framework in Python.",
      },
      {
        logo: LOGO.django,

        name: "Django",
        description:
          "A high-level Python web framework that encourages rapid development and clean, pragmatic design.",
      },
    ],
    android: [
      {
        logo: LOGO.flutter,

        name: "Flutter",
        description:
          "A UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
      },
    ],
    // backend: [
    //   {
    //     logo: LOGO.node,

    //     name: "Node JS",
    //     description:
    //       "A JavaScript runtime built on Chrome's V8 JavaScript engine, used for building scalable network applications.",
    //   },
    //   {
    //     logo: LOGO.flask,
    //     name: "Flask",
    //     description: "A lightweight WSGI web application framework in Python.",
    //   },
    //   {
    //     logo: LOGO.django,

    //     name: "Django",
    //     description:
    //       "A high-level Python web framework that encourages rapid development and clean, pragmatic design.",
    //   },
    // ],
  },
  sourceControl: [
    {
      logo: LOGO.git,
      name: "Git",
      description:
        "A distributed version control system for tracking changes in source code during software development.",
    },
    {
      logo: LOGO.gitlab,
      name: "GitLab",
      description:
        "A web-based DevOps lifecycle tool that provides a Git repository manager providing wiki, issue-tracking, and CI/CD pipeline features.",
    },
    {
      logo: LOGO.github,
      name: "GitHub",
      description:
        "A platform for version control and collaboration, allowing multiple people to work on projects at the same time.",
    },
  ],
  // architecture: [
  //   {
  //     logo: LOGO.html,
  //     name: "Bloc pattern",
  //     description:
  //       "A design pattern for managing state in a Flutter application.",
  //   },
  //   {
  //     logo: LOGO.html,
  //     name: "MVVM",
  //     description:
  //       "Model-View-ViewModel is a software architectural pattern that facilitates the separation of the development of the graphical user interface.",
  //   },
  // ],
  databases: [
    {
      logo: LOGO.mySql,
      name: "MySQL",
      description: "An open-source relational database management system.",
    },
    {
      logo: LOGO.sqlLite,
      name: "SQLite",
      description:
        "A C-language library that provides a lightweight, disk-based database.",
    },
    {
      logo: LOGO.postgreSql,
      name: "PostgreSQL",
      description: "A powerful, open-source object-relational database system.",
    },
    {
      logo: LOGO.mongodb,
      name: "MongoDB",
      description:
        "A document-oriented NoSQL database used for high volume data storage.",
    },
  ],
  uiLibraries: [
    {
      logo: LOGO.bootstrap,
      name: "Bootstrap",
      description:
        "A free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
    },
    {
      logo: LOGO.tailwind,
      name: "Tailwind CSS",
      description:
        "A utility-first CSS framework for rapidly building custom user interfaces.",
    },
    {
      logo: LOGO.materialUI,
      name: "Material UI",
      description:
        "A popular React UI framework that implements Google's Material Design.",
    },
    {
      logo: LOGO.mantineUI,
      name: "Mantine UI",
      description:
        "A fully-featured React components library for building fast and accessible web applications.",
    },
    // {
    //   logo: LOGO.shadcnUI,
    //   name: "Shadcn UI",
    //   description:
    //     "A UI component library for building accessible, responsive web interfaces.",
    // },
  ],
  otherTools: [
    {
      logo: LOGO.kafka,
      name: "Kafka",
      description:
        "A distributed streaming platform used for building real-time data pipelines and streaming applications.",
    },
    {
      logo: LOGO.gitlabCICD,
      name: "GitLab CI/CD",
      description:
        "A continuous integration and continuous delivery (CI/CD) solution integrated with GitLab.",
    },
    {
      logo: LOGO.docker,
      name: "Docker",
      description:
        "A platform for developing, shipping, and running applications inside containers.",
    },
    {
      logo: LOGO.jenkins,
      name: "Jenkins",
      description:
        "An open-source automation server which enables developers to build, test, and deploy their software.",
    },
  ],
};

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
