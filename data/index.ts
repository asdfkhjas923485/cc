import { link } from "fs";

export const navItems = [
  { name: "Home", link: "https://www.maarifalawi.site/" },
  { name: "Certificate ", link: "#alawi" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: " I am someone who loves learning new things",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/alawi.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I am very open to collaboration, wherever you are",
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
    title: "Data science enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building data science library with Python",
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
    title: "IBM",
    des: "Applied Data Science Capstone",
    img: "/pro1.png",
    iconLists: [],
    link: "",
  },
  {
    id: 2,
    title: "IBM",
    des: "Data Science Professional ",
    img: "/pro2.png",
    iconLists: [],
    link: "",
  },
  {
    id: 3,
    title: "Kaggle",
    des: "Data Cleaning.",
    img: "/cer3.png",
    iconLists: [],
    link: "",
  },
  {
    id: 4,
    title: "Kaggle",
    des: "Pandas",
    img: "/cer4.png",
    iconLists: [],
    link: "",
  },
  {
    id: 5,
    title: "HubSpot",
    des: "Social Media Marketing",
    img: "/cer5.png",
    iconLists: [],
    link: "",
  },
  {
    id: 6,
    title: "Gunadarma",
    des: "Magang Tax Center Gunadarma",
    img: "/cer6.png",
    iconLists: [],
    link: "",
  },

{
    id: 7,
    title: "HackerRank",
    des: "Python (Basic)",
    img: "/cer7.png",
    iconLists: [],
    link: "",
  },
  {
    id: 8,
    title: "freeCodeCamp",
    des: "JavaScript",
    img: "/cer8.png",
    iconLists: [],
    link: "",
  },
  {
    id: 9,
    title: "Sekolah Relawan",
    des: "Volunteer",
    img: "/cer9.png",
    iconLists: [],
    link: "",
  },
   {
    id: 10,
    title: "Kaggle",
    des: "Python",
    img: "/cer10.png",
    iconLists: [],
    link: "",
  },
   {
    id: 11,
    title: "DQLab Data Scientist",
    des: "Total 28 Certificates",
    img: "/cer11.png",
    iconLists: [],
    link: "",
  },
  {
    id: 12,
    title: "Simplilearn Scientist",
    des: "Total 27 Certificates",
    img: "/cer12.png",
    iconLists: [],
    link: "",
  },
  {
    id: 13,
    title: "Dibimbing.id",
    des: "Digital Skill Fair 10.0 - Data Science",
    img: "/cer13.png",
    iconLists: [],
    link: "",
  },
   {
    id: 14,
    title: "Dicoding",
    des: "Prinsip Pemrograman SOLID",
    img: "/cer14.png",
    iconLists: [],
    link: "",
  },
 {
    id: 15,
    title: "Google",
    des: "Google Analytics",
    img: "/cer15.png",
    iconLists: [],
    link: "",
  },
];
export const projectss = [
  {
    id: 1,
    title: "Speaker at Abouthify",
    des: "Speakers at Abouthify for a mental health themed webinar.",
    img: "/ig.svg",
    iconLists: ["/abo.svg", "/igeh.svg", "/zoom.svg"],
    link: "Instagram",
  },
  {
    id: 2,
    title: "Speaker at Ruanghijrah",
    des: "Speakers at Ruanghijrah for a real life themed webinar.",
    img: "/rh.svg",
    iconLists: ["/tiktoklogo.svg", "/igeh.svg", "/zoom.svg"],
    link: "Tiktok",
  },
  {
    id: 3,
    title: "Podcast ft GagasMedia",
    des: "Exclusive invitation from Gagasmedia for a podcast with other book authors.",
    img: "/podcast.svg",
    iconLists: ["/gagas.svg", "/agro.svg", "/book.svg"],
    link: "Depok",
  },
  {
    id: 4,
    title: "Indonesian Meta",
    des: "The exclusive invitation to Meta Indonesia is intended for content creators, writers, and media professionals in Indonesia.",
    img: "/meta.svg",
    iconLists: ["/threads.svg", "/metaa.svg", "/igeh.svg"],
    link: "Jakarta",
  },
];

export const testimonials = [
  {
    quote:
      "Alawi is amazing! He really knows website code, and the result made our website look great. Awesome.",
    name: "Sherly Agustin",
    title: "Student",
  },
  {
    quote:
      "Alawi graphic design makes my eyes happy. So creative! If you need design work, just go to him.",
    name: "Audya Tsaani",
    title: "Content Creator",
  },
  {
    quote:
      "Alawi is a pro at optimizing websites. After he helped, my website’s traffic skyrocketed. Thanks a bunch, bro!",
    name: "Andika Pratama",
    title: "Writer",
  },
  {
    quote:
      "Collaborating with Alawi is always cool. He responds quickly, comes up with creative solutions, and isn’t complicated. Top-notch!",
    name: "Muhammad Afrizal",
    title: "Writer",
  },
  {
    quote:
      "Recommend Alawi for web development? Absolutely! He doesn’t just code; he understands our business. The website turned out impressive and user-friendly!",
    name: "Rafif Zaidan",
    title: "BEM",
  },
];

export const companies = [
  {
    id: 1,
    img: "/jnt.svg",
  },
  {
    id: 2,
    img: "/flowhite.svg",
  },
  {
    id: 3,
    img: "/jne.svg",
  },
  {
    id: 4,
    img: "/rel.svg",
  },
  {
    id: 5,
    img: "/kredivo.svg",
  },
  {
    id: 6,
    img: "/ricis.svg",
  },
  {
    id: 7,
    img: "/paragon.svg",
  },
  {
    id: 8,
    img: "/sman3.svg",
  },
  {
    id: 9,
    img: "/enlish.svg",
  },
  {
    id: 10,
    img: "/fmo.svg",
  },
  {
    id: 11,
    img: "/az.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "CEO Fokusind",
    desc: "As the CEO of Fokusind, I lead and oversee the strategic direction of the company. My responsibilities include setting goals, managing resources, fostering growth, and ensuring that Fokusind continues to inspire and empower individuals in their self-development and career journeys.",
    kerja: "Full Time | 2021 - Present",
    className: "md:col-span-2",
    thumbnail: "/work7.svg",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    kerja: "Pansus Studio | 4 Months",
    desc: "As a full-stack developer, i handle both the front-end (user interface) and back-end (server-side logic) of web applications. I'm responsible for creating seamless user experiences, designing responsive interfaces, and implementing robust functionality.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/work8.svg",
  },
  {
    id: 3,
    title: "Programmer",
    kerja: "Eduwork | 4 Months",
    desc: "As a programmer, I write code to create software applications, solve problems, and automate tasks. My work involves designing algorithms, debugging code, and collaborating with other team members to build functional and efficient solutions.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/work9.svg",
  },
  {
    id: 4,
    title: "Social Media Specialist",
    kerja: "Freelance | 2021 - Present",
    desc: "As a social media specialist, I manage and optimize social media accounts for businesses or individuals. My responsibilities include creating engaging content, analyzing performance metrics, running ad campaigns, and fostering online.",
    className: "md:col-span-2",
    thumbnail: "/work6.svg",
  },
  {
    id: 5,
    title: "Front End Developer",
    kerja: "Freelance Fiverr | 2021 - Present",
    desc: "As a front-end developer, I role involves creating the visual elements of websites and web applications. I'm work with HTML, CSS, and JavaScript to build user interfaces that are interactive.",
    className: "md:col-span-2",
    thumbnail: "/work10.svg",
  },
  {
    id: 6,
    title: "Content Creator",
    kerja: "Instagram & TikTok | 2021 - Present",
    desc: "As a content creator, I role involves crafting engaging and relevant content for your audience. Whether I'm focus on writing articles, creating videos, managing a blog, or designing captivating graphics.",
    className: "md:col-span-2",
    thumbnail: "/work11.svg",
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
    link: "https://www.linkedin.com/in/maarifalawi/"
  },
];
