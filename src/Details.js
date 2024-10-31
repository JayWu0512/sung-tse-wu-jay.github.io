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

// Club Activity
import north_taiwan_dance_competition from "./assets/north_taiwan_dance_competition.jpg"
import volunteer from "./assets/volunteer.jpg"

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
  about: `My name is Jay Wu, a curious, empathetic communicator who aspires to be <strong>"someone with a story to tell."</strong> During my time at PwC, I observed the diverse people I encountered over the past two years and found myself asking, <strong>Is accounting the only path in life?</strong> \nIn search of new directions, I began identifying talent gaps within each company I worked with and dedicated my spare time to learning across various fields and exploring my interests. This journey has fostered a strong passion for the fields of data and AI, and I am committed to applying my coding skills and current knowledge to help companies tackle a variety of challenges. My goal is to leverage my expertise in accounting, finance, and data to enhance company efficiency while building a solid reputation.`,
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
        img:north_taiwan_dance_competition,
        Position: "North Taiwan Dance Competition - Chief Coordinator",
        Duration: "July 2018 - Dec 2018",
        JobContent: "During my university years, I participated in various activities and clubs, but serving as the Chief Coordinator for the North Taiwan Dance Competition was the experience that changed my life the most, which is why I included it on my personal website as a representative of my university activities. \n \nIn this role, the most valuable lesson I learned was “empathy.” Empathy greatly improved my internal and external communication skills. Internally, it allowed me to better understand the diverse needs of team members, and during conflicts, I could act as an effective communicator, helping the team operate smoothly. Externally, empathy enabled me to grasp the objectives of government agencies, judges, and sponsors, allowing me to persuade them to collaborate with us and create win-win opportunities. \n \nIn summary, I believe that the empathy I developed through this experience will be crucial in future teamwork, cross-departmental collaboration, and client interactions. Whether collaborating with colleagues, advancing cross-departmental projects, or negotiating with clients, I am confident that empathy will help me consider others' perspectives, make decisions that meet mutual needs, and foster more efficient and harmonious partnerships.",
      },
      {
        img:volunteer,
        Position: "Summer Universiade Taipei 2017 - \nVolunteer Foreign Language Interpreter Leader - Chinese Taipei Team",
        Duration: "July 2017 - Aug 2017",
        JobContent: "Another experience that deeply impacted me was serving as the Volunteer Foreign Language Interpreter Leader for the Chinese Taipei Team at the Summer Universiade Taipei 2017. This experience marked the beginning of my journey to recognize my own shortcomings and strive for improvement, which is why I also included it on my personal website as another significant representation of my development.\n\nThis was the first international event I participated in after entering university, with athletes from over 100 countries coming to Taiwan. I was fortunate to pass a rigorous selection process to become a foreign language interpreter for our country. However, I faced many challenges. As a new university student, I was not yet comfortable with making small talk, so in the presence of both foreign and Taiwanese participants, I often hesitated to speak, which resulted in me struggling to make friends. Additionally, I lacked experience in coordinating and managing a small team, making task assignments challenging and communication within the group difficult, leading to some tough lessons. \n\nBecause of this experience, I spent the rest of my university years learning how to build meaningful connections, practicing my social skills, and correcting the areas where I previously fell short. Whenever I had opportunities to manage a team in various activities, I focused on avoiding past mistakes, making an effort to understand each person's perspective. It was through all these efforts and reflections that I grew into the person I was by the end of my university years.",
      },
    ]
  },
];

// Enter your Certifications here
export const certificationDetails = [
  {
    Name: "Certified Public Accountant (CPA), Taiwan",
    Issued_institution: `Examination Yuan of ROC`,
    Issued_time: "Mar 2024",
    Credential_ID: "8842",
    Classification: "Accounting",
  },
  {
    Name: "Data Engineer Associate",
    Issued_institution: `DataCamp`,
    Issued_time: "Sep 2024",
    Credential_ID: "DEA0010832728986",
    Classification: "Data",
  },
  {
    Name: "Data Scientist Associate",
    Issued_institution: `DataCamp`,
    Issued_time: "Sep 2024",
    Credential_ID: "DSA0016970617486",
    Classification: "Data",
  },
  {
    Name: "Data Analyst Associate",
    Issued_institution: `DataCamp`,
    Issued_time: "Aug 2024",
    Credential_ID: "DAA0014480466504",
    Classification: "Data",
  },
  {
    Name: "Python Data Associate",
    Issued_institution: `DataCamp`,
    Issued_time: "Oct 2024",
    Credential_ID: "PDA0016153384002",
    Classification: "Python",
  },
  {
    Name: "SQL Associate",
    Issued_institution: `DataCamp`,
    Issued_time: "Oct 2024",
    Credential_ID: "SQA0016242335437",
    Classification: "SQL",
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
