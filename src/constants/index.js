import florai from "../assets/projects/florai.jpg";
import onTrack from "../assets/projects/onTrack.jpg";
import valorantRanks from "../assets/projects/valorantRanks.jpg";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const HERO_CONTENT = `I am a passionate student with experience in developing full scale applications. I also have a strong interest in AI, most notably reinforcement learning! I hope to sharpen my skills and keep learning!`;

export const ABOUT_TEXT = `I was born and raised in St. Louis. I attend the Missouri University of Science and Technology majoring in computer science. I am always passionate about learning new things and broadening my skills. While I do my best to stay on the daily grind, I do enjoy many other things. Some of my passions include music, fashion, and traveling!`;

export const ABOUT_MORE = '';

export const TECHNOLOGIES = [
  "React", "Python", "SQL", "Pandas", "PyTorch", "C++",
  "JavaScript", "TypeScript", "Node.js", "Swift", "TensorFlow",
  "Firebase", "AWS", "Figma", "Angular", "Git",
];

export const EXPERIENCES = [
  {
    year: "May 2024 - August 2024",
    role: "Software Engineer Intern",
    company: "Tyson Foods",
    description: [
      'Assisted in developing an internal design system using Figma and React',
      'Created web components and implemented bug fixes for a React library utilized by front end developers, significantly decreasing future development time',
      'Developed and deployed a Python bot that automatically queried freight shipping costs, saving the company $75 thousand a year in manual labor',
      'Abstracted and augmented photos of chickens to train a key point detection model',
      'Researched and established diffusion policy networks to support precise robotic task training'
    ],
    technologies: ["React", "Figma", "Node.js", "Storybook", "Gitlab"],
  },
  {
    year: "August 2023 - May 2024",
    role: "Full Stack Developer",
    company: "Arul Capital",
    description: [
      'Worked with a team of developers to build different applications for the client\'s needs',
      'Cleaned up crypto coin data using Pandas to train a Tensorflow recurrent neural network model that can forecast future crypto prices with 90% accuracy'
    ],
    technologies: ["AWS", "Python", "Pandas", "HTML", "CSS", "Javascript"],
  },
  {
    year: "May 2023 - August 2023",
    role: "Data Science Intern",
    company: "Tasacom Inc.",
    description: [
      'Collaborated with data scientists to analyze and extract insights from large databases utilizing SQL and Python, contributing to the development of data-driven solutions',
      'Implemented a predictive model using machine learning algorithms to predict customer churn, resulting in a 15% reduction in customer attrition rate'
    ],
    technologies: ["Python", "Pandas", "SQL"],
  },
  {
    year: "January 2024 - Present",
    role: "ACM AI President",
    company: "ACM",
    description: [
      'Lead the school AI club by teaching and facilitating student interest in the field of AI.',
      'Hosted workshops to teach PyTorch and machine learning.'
    ],
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

export const MOCK_SPOTIFY = {
  isPlaying: true,
  track: "Blinding Lights",
  artist: "The Weeknd",
  album: "After Hours",
  progress: 65,
  currentTime: "2:09",
  duration: "3:20",
  albumGradient: ["#e84545", "#2d1f67"],
  recentTracks: [
    { track: "Starboy", artist: "The Weeknd", albumGradient: ["#f5af19", "#f12711"] },
    { track: "Nights", artist: "Frank Ocean", albumGradient: ["#0f2027", "#2c5364"] },
    { track: "Pink + White", artist: "Frank Ocean", albumGradient: ["#ee9ca7", "#ffdde1"] },
  ],
};

export const CONTACT = {
  location: "Wildwood, MO 63005",
  phoneNo: "+1 (314) 835 8595",
  email: "ayman2002rahman@gmail.com",
};
