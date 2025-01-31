/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Nathaniel's Portfolio",
  description:
    "I'm Nathaniel Simmons, a Financial Analyst and Software Engineer. I combine data analysis and coding to solve complex problems and drive business success. Welcome to my portfolio!",
  og: {
    title: "Nathaniel Portfolio Portfolio",
    type: "website",
    url: "###",
  },
};

//Home Page
const greeting = {
  title: "Nathaniel Simmons",
  logo_name: "NathanielSimmons",
  nickname: "Nate",
  subTitle:
    "I'm Nathaniel Simmons, a Financial Analyst and Software Engineer. I combine data analysis and coding to solve complex problems and drive business success. Welcome to my portfolio!",
  resumeLink:
    "https://natestoragebucket.s3.us-east-2.amazonaws.com/Nathaniel+Simmons+Resume+'25.docx",
  githubProfile: "https://github.com/NathanielSimmons",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/NathanielSimmons",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nathaniel-simmons",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:nathaniel.cj.simmons@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Built responsive and user-friendly UIs using React.js, JavaScript, HTML, and CSS.",
        "⚡ Developed RESTful APIs using Node.js, Express.js and Django (Python).",
        "⚡ Proficient with MongoDB (NoSQL) and PostgreSQL (SQL) for data management."
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#092E20",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        }
      ],
    },
    {
      title: "Version Control & Collaboration",
      fileName: "VersionControlImg",
      skills: [
        "⚡ Managing source code and collaborating on projects using version control systems",
        "⚡ Experience working with Git for source code management and version tracking",
        "⚡ Using GitHub for collaboration, code review, and managing repositories",
      ],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "logos-git",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "fa-github",
          style: {
            backgroundColor: "transparent",
          },
        }
      ],
    },
    {
      title: "Project Management & Productivity Tools",
      fileName: "ProjectManagementImg",
      skills: [
        "⚡ Managed project timelines and tasks using Trello.",
        "⚡ Documented and tracked project progress effectively.",
        "⚡ Proficient in Microsoft Excel for data analysis, Word for documentation, and PowerPoint for presentations.",
      ],
      softwareSkills: [
        {
          skillName: "Trello",
          fontAwesomeClassname: "simple-icons:trello",
          style: {
            color: "#0052CC",
          },
        },
        {
          skillName: "Microsoft Office",
          fontAwesomeClassname: "simple-icons:microsoftoffice",
          style: {
            color: "#D83B01",
          },
        },
        {
          skillName: "Microsoft Word",
          fontAwesomeClassname: "simple-icons:microsoftword",
          style: {
            color: "#2B579A",
          },
        },
        {
          skillName: "Microsoft Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: {
            color: "#217346",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "New York University, Stern School of Business",
      subtitle: "Major in Finance",
      logo_path: "nyu_logo.png",
      alt_name: "NYU Stern",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ Focused on financial analysis, investment strategies, and risk management to drive informed decision-making.",
        "⚡ Gained expertise in financial modeling, valuation techniques, and corporate finance through hands-on projects.",
        "⚡ Developed a strong foundation in business principles, with an emphasis on leadership, ethics, and global financial markets.",
      ],
      website_link: "https://www.stern.nyu.edu/",
    },
    {
      title: "General Assembly, New York",
      subtitle: "Software Engineering Bootcamp",
      logo_path: "general_assembly_logo.png",
      alt_name: "general assembly",
      duration: "2023 - 2024",
      descriptions: [
        "⚡ Gained hands-on experience in web development with HTML, CSS, and JavaScript to build dynamic, responsive applications.",
        "⚡ Mastered back-end technologies such as Express, MongoDB, Python, and Django for creating scalable, full-stack solutions.",
        "⚡ Developed proficiency in front-end frameworks like React and honed database skills using SQL, optimizing user experience and performance.",
      ],
      website_link: "https://generalassemb.ly/",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have a proven track record in financial analysis, driving growth and optimizing budgets at organizations like General Assembly and Fidelity Investments. By developing forecasts, building financial models, and collaborating with cross-functional teams, I’ve delivered actionable insights that support strategic decision-making and improve financial performance.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Financial Analyst",
          company: "General Assembly",
          company_url: "https://www.generalassemb.ly",
          logo_path: "general_assembly_logo.png",
          duration: "Jun 2022 - Nov 2023",
          location: "New York, NY, USA",
          description: "Developed financial forecasts and projections that drove a 10% improvement in budget accuracy by leveraging historical data and market trends. Spearheaded the creation of long-term financial strategies, enabling the coding bootcamp to achieve a 15% year-over-year revenue growth while maintaining financial sustainability. Partnered with cross-functional teams, including program managers and instructors, to allocate budgets exceeding $5M, ensuring alignment with organizational goals. Designed and maintained advanced financial models to analyze variables such as student enrollment, program costs, and revenue streams, resulting in more accurate strategic planning. Produced monthly variance analysis and KPI reports, which improved executive decision-making by identifying and addressing performance gaps. ",
          color: "#FF5733"
        },
        {
          title: "Financial Analyst",
          company: "Fidelity Investments",
          company_url: "https://www.fidelity.com/",
          logo_path: "fidelity_logo.png",
          duration: "Jul 2019 - Jun 2020",
          location: "Boston, MA, USA",
          description: "Delivered high-quality financial reports detailing headcount and budget trends, directly contributing to the optimization of a $10M departmental budget. Built financial models to evaluate the unit economics of startup ventures, influencing executive team decisions on multi-million-dollar investments. Managed the progress of strategic projects, including negotiating cost-effective vendor contracts, reducing operational expenses by 7% annually. Presented burn rate analyses and forecast reports to managing directors monthly, identifying potential cost overruns and achieving a 5% reduction in burn rate across incubators. ",
          color: "#004F92"
        }
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Here are a few software development projects that highlight my skills in full-stack development using technologies like MERN, Node.js, and MongoDB. These projects focus on building responsive, user-friendly applications with seamless functionality and real-time data integration.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile.png",
    description:
      "I am available across various platforms and always eager to connect. Feel free to reach out, and I'll respond within 24 hours. I specialize in Financial Analysis, Software Engineering, Data Analysis, Full-stack Development, and Machine Learning. I'm happy to help with project advice, coding challenges, or business strategy!",
  },
  addressSection: {
    title: "Address",
    subtitle: "Queens, NY | 347.443.7472",
    "locality": "Queens",
    "country": "USA",
    "region": "New York",
    "postalCode": "11368",
    "streetAddress": "Queens, NY",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/BKHxzWEUo2BdhUgy7",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  experience,
  projectsHeader,
  contactPageData,
};
