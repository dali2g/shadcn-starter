import localFont from "next/font/local";

const cardAttributes = [
  {
    id:1,
    title: "threads-app",
    description:
      "Explore the world of fullstack web development with this exciting Social Media Web App project.",
  },
  {
    id:2,
    title: "dash-back-linked",
    description:
      "Explore a dynamic Dashboard, offering CRUD functionality for users and employers.",
  },
  {
    id:3,
    title: "EcommerceFrontend",
    description:
      "MeilleurChoix is a comprehensive online platform that allows users to compare products, prices across e-commerce websites",
  },

]
const fieldsAttributes = [
  {
    id: 1,
    title: 'Frontend Development',
    description: 'Building modern and intuitive UIs with clean code.',
    tag1: 'React.Js', 
    dsc1:"React is the library for web and native user interfaces.",
    tag2: 'Next.Js',
    dsc2:"The React Framework for the Web.",
    tag3: 'TailwindCSS',
    dsc3:"Tailwind CSS is a utility-first CSS framework.",
  },
  {
    id: 2,
    title: 'Backend Development',
    description: 'Fast, secure and reliable backend development.',
    dsc1:"The React Framework for the Web.",
    tag1: 'Next.Js', 
    dsc2:"Express is a minimal and flexible Node.js web application framework",
    tag2: 'Express.Js',
    dsc3:"MongoDB is a document-oriented database management system",
    tag3: 'MongoDB'
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Keeping the UI clean with a modern touch without compromising UX.',
    dsc1:"Figma is a vector graphics editor and prototyping tool.",
    tag1: 'Figma',
    tag2:"Webflow",
    dsc2:"Design and build your site with a flexible CMS and top-tier hosting.", 
    tag3:"Framer",
    dsc3:"Framer is like @Figma but for designing and publishing real responsive websites.", 

  }
];

const myFont = localFont({
  src: "../public/assets/fonts/PlusJakartaSans-ExtraBold.ttf",
});
const fontRegular = localFont({
  src: "../public/assets/fonts/PlusJakartaSans-Regular.ttf",
});

const textAttributes = [
  {
  id:1,
  title:"Clean & Intuitivly Designed",
  subtitle:"Modern & Minimalist Design.",
  paragraph:"I create intuitive, functional, and aesthetically pleasing user interfaces."
},
  {
    id:2,
  title:"Detailed & Refined",
  subtitle:"Keen Eye for Spotting Small Details.",
  paragraph:"I obsessively refine user interfaces, ensuring seamlessness and accessibility."
},
  {
    id:3,
  title:"Pretty & Optimized",
  subtitle:"Comprehensible and Optimized Code.",
  paragraph:"I craft clean, comprehensible and performant code for flawless user experiences."
},
]



export { cardAttributes,fieldsAttributes,myFont,fontRegular,textAttributes}