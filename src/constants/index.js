import florai from "../assets/projects/florai.jpg";
import onTrack from "../assets/projects/onTrack.jpg";
import valorantRanks from "../assets/projects/valorantRanks.jpg";

export const HERO_CONTENT = `I am a passionate student with experience in developing full scale applications. I also have a strong interest in AI, most notably reinforcement learning! I hope ot sharpen my skills and keep learning!`;

export const ABOUT_TEXT = `I was born and raised in St. Louis. 
                  I attend the Missouri University of Science and Technology majoring in computer science. 
                  I am always passionate about learning new things and broadening my skills.
                  While I do my best to stay on the daily grind, I do enjoy many other things. 
                  Some of my passions include music, fashion, and traveling!`;

export const ABOUT_MORE = '';

export const EXPERIENCES = [
  {
    year: "May 2024 - August 2024",
    role: "Software Engineer Intern",
    company: "Tyson Foods",
    description:`• Assisted in developing an internal design system using Figma and React.
                • Created web components and implemented bug fixes for a React library utilized by front end developers,
                significantly decreasing future development time.
                • Developed and deployed a Python bot that automatically queried freight shipping costs, reducing the amount of
                manual time spent by 99%.
                • Abstracted and augmented photos of chickens to train a key point detection model.
                • Researched and established diffusion policy networks to support precise robotic task training.`,
    technologies: ["React", "Figma", "Node.js", "Storybook", "Gitlab"],
  },
  {
    year: "August 2023 - May 2024",
    role: "Full Stack Developer",
    company: "Arul Capital",
    description: `Colaborated on a team of 3 to create severl projects related to client specific needs. Utelized webscraping to gather meme coin price data to train a model to forecast crpyto prices.`,
    technologies: ["AWS", "Python", "Pandas", "HTML", "CSS", "Javascript"],
  },
  {
    year: "May 2023 - August 2023",
    role: "Data Science Intern",
    company: "Tasacom Inc.",
    description: `Developed and tested stastisical machine learning models over several buisness needs.`,
    technologies: ["Python", "Pandas", "SQL"],
  },
  {
    year: "January 2024 - Present",
    role: "ACM AI President",
    company: "ACM",
    description: `Lead the school AI club by teaching and facilitating student interest in the field of AI. Hosted workshops to teach PyTorch and machine learning.`,
    technologies: ["Python", "PyTorch", "Excel"],
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
  location: "Wildwood, MO 63005 ",
  phoneNo: "+1 (314) 835 8595 ",
  email: "ayman2002rahman@gmail.com",
};