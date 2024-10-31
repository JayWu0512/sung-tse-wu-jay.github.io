// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/my_profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Sung-Tse(Jay), Wu",
  tagline: "Passionate about discovering new insights in data.",
  img: profile,
  about: `My name is Jay Wu, a curious, empathetic communicator who aspires to be 'someone with a story to tell.' During my time at PwC, I observed the diverse people I encountered over the past two years and found myself asking, 'Is accounting the only path in life?' In search of new directions, I began identifying talent gaps within each company I worked with and dedicated my spare time to learning across various fields and exploring my interests. This journey has fostered a strong passion for the fields of data and AI, and I am committed to applying my coding skills and current knowledge to help companies tackle a variety of challenges. My goal is to leverage my expertise in accounting, finance, and data to enhance company efficiency while building a solid reputation.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/sung-tse-wu/",
  github: "https://github.com/JayWu0512",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "QA Engineer",
    Company: `IHH 桓竑智聯`,
    Location: "Taipei, Taipei City, Taiwan",
    Type: "Full Time",
    Duration: "Nov 2024 - Present",
  },
  {
    Position: "Senior Associate Auditor",
    Company: `PwC`,
    Location: "Taipei, Taipei City, Taiwan",
    Type: "Full Time",
    Duration: "Oct 2021 - Oct 2023",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor in Accounting",
    Company: `National Taipei University`,
    Location: "Taipei, Taiwan",
    Duration: "Sep 2016 - Jun 2020",
    EducationDetails : [
      {
        img:projectImage1,
        Position: "123",
        Duration: "Sep2016 - Jun 2020",
        JobContent: "123",
      },
      {
        img:projectImage1,
        Position: "123",
        Duration: "Sep2016 - Jun 2020",
        JobContent: "123",
      },
    ]
  },
];

// Enter your Certifications here
export const certificationDetails = [
  {
    Name: "Data Associate",
    Issued_institution: `DataCamp`,
    Issued_time: "Sep 2024",
    Credential_ID: "DEXXXXXXX",
  },
  {
    Name: "Data Associate",
    Issued_institution: `DataCamp`,
    Issued_time: "Sep 2024",
    Credential_ID: "DEXXXXXXX",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Project title 1",
    image: projectImage1,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 2",
    image: projectImage2,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 3",
    image: projectImage3,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 4",
    image: projectImage4,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 5",
    image: projectImage5,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 6",
    image: projectImage6,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "hi@example.com",
  phone: "+91 12345 67890",
};
