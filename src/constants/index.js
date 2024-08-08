import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

import florai from "../assets/projects/florai.jpg";
import onTrack from "../assets/projects/onTrack.jpg";
import valorantRanks from "../assets/projects/valorantRanks.jpg";

export const HERO_CONTENT = `I am a passionate student with experience in developing full scale applications. I also have a strong interest in AI, most notably reinforcement learning! I hope ot sharpen my skills and keep learning!`;

export const ABOUT_TEXT = `I was born and raised in St. Louis with a Bangladeshi heritage. 
                  I attend the Missouri University of Science and Technology majoring in computer science. 
                  I am always passionate about learning new things and broadening my skills.
                  While I do my best to stay on the daily grind, I do enjoy many other things. 
                  Some of my passions include music, fashion, and traveling!".`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "FlorAI",
    image: florai,
    description:
      "An app that lets you discover new flowers in the wild.",
    technologies: ["Swift", "Firebase", "Python", "Tensorflow"],
  },
  {
    title: "OnTrack",
    image: onTrack,
    description:
      "A secure safety app that notifies loved ones when a lonely night walk goes wrong",
    technologies: ["Angular", "Python", "TensorFlow", "Firebase", "Twilio"],
  },
  {
    title: "Valorant Rank Predictor",
    image: valorantRanks,
    description:
      "A machine learning model that is able to predict your Valorant rank based on how you played in your most recent game.",
    technologies: ["Python", "Pytorch"],
  },
];

export const CONTACT = {
  address: "16640 Wycliffe Place Drive, Wildwood, MO 63005 ",
  phoneNo: "+314 835 8595 ",
  email: "ayman2002rahman@gmail.com",
};