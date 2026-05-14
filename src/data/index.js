export const skills = [
  { name: 'Python', level: 95 },
  { name: 'Java', level: 85 },
  { name: 'C++', level: 80 },
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 75 },
  { name: 'JavaScript', level: 70 },
  { name: 'React', level: 50 },
  { name: 'AWS', level: 30 },
];

export const projects = [
  {
    name: 'Wordle',
    image: '/wordle.png',
    link: 'https://jungp22-wordle.netlify.app/',
    description: 'Recreation of the famous online game.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'FarmLink',
    image: '/farmlink.png',
    link: 'https://github.com/Lmah0/FarmLink',
    description: 'Mock e-commerce website built with a team of 6.',
    tags: ['React', 'PostgreSQL', 'Flask'],
  },
  {
    name: 'DoorDash ETA Model',
    image: '/mlproject.png',
    link: 'https://github.com/jp9124/doordash-eta-prediction-model/tree/main',
    description: 'Regression model to predict delivery ETAs.',
    tags: ['Python', 'scikit-learn', 'ML'],
  },
];

export const experience = [
  {
    role: 'Library Volunteer',
    org: 'Bowness Public Library',
    duration: '2020',
    location: 'Calgary, AB',
  },
];

export const education = [
  {
    role: 'B.Sc. in Software Engineering',
    org: 'University of Calgary',
    duration: '2021 – 2026',
    location: 'Calgary, Canada',
  },
  {
    role: 'High School Diploma',
    org: 'Western Canada High School',
    duration: '2018 – 2021',
    location: 'Calgary, Canada',
  },
];

export const interests = [
  { icon: '🎵', label: 'Listening to music' },
  { icon: '🎬', label: 'Watching movies' },
  { icon: '💻', label: 'Programming' },
  { icon: '🎮', label: 'Playing video games' },
  {
    icon: '📊',
    label: 'LeetCode',
    link: 'https://leetcode.com/u/junghwan_park/',
    linkText: 'my progress',
  },
];

export const about = [
  'Born in Seoul, South Korea',
  'Moved to Canada when I was 7',
  'First programming language: JavaScript',
  'Best (and favorite) language: Python',
];

export const blogEntries = [
  {
    title: 'First Entry',
    date: 'May 14, 2026',
    readTime: '3 min read',
    summary:
      'Introduction to the blog and some thoughts after finishing university.',
    tags: ['Portfolio', 'Reflection', 'Software Engineering'],
    content: [
      'Hi, welcome to my first entry! I thought this would be useful to track my progress and development of my career. Right now I have just finished university, and I believe I will do so with honours (with a 3.6+ GPA over the last 60 units) and with the Jason Lang scholarship as well.',
      'Unfortunately, I did that without really any internship or professional experience of any kind, so that will be something I will need to get soon.'
    ],
  },
];
