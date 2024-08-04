import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaComments,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

export const navItems = [
  { name: "Home", link: "/", icon: FaHome },
  { name: "About", link: "#about", icon: FaUser },
  { name: "Projects", link: "#projects", icon: FaProjectDiagram },
  { name: "Testimonials", link: "#testimonials", icon: FaComments },
  { name: "Contact", link: "#contact", icon: FaEnvelope },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication.",
    description:
      "Building strong partnerships through clear and consistent communication.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end text-left",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Adaptable to any time zone for seamless communication.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech Enthusiast with a Passion for Development",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently Building a JS State Management Library",
    description: "Get the Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to Start a Project Together?",
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
    title: "Interactive 3D Solar System Explorer",
    des: "Dive into an immersive 3D journey across the solar system, built with advanced Three.js techniques.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/kayode-victor",
  },
  {
    id: 2,
    title: "Seamless Video Conferencing App",
    des: "Revolutionize remote communication with a next-gen video conferencing app designed for clarity and ease.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/kayode-victor",
  },
  {
    id: 3,
    title: "AI-Powered Image Editing Platform",
    des: "Experience the future of graphic design with an AI-driven SaaS platform that streamlines creative workflows.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/kayode-victor",
  },
  {
    id: 4,
    title: "3D Animated Apple iPhone Showcase",
    des: "Crafted a visually stunning 3D website for the Apple iPhone 15 Pro, integrating cutting-edge animations and effects.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/kayode-victor",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Kayode was an incredible experience. He transformed my vision into a stunning photography portfolio website that exceeded my expectations. His keen eye for detail and dedication to quality truly set him apart. If you need a top-notch website, Kayode is the person to trust.",
    name: "Fisial Gidado",
    title: "Photographer/CEO of Dash Media",
    initial: "f g",
  },
  {
    quote:
      "Kayode developed a robust e-commerce platform for Mojoy Computers that has significantly boosted our online presence. His expertise and commitment to delivering a user-friendly and efficient website were impressive. Kayode's professionalism and skill make him an excellent choice for any web development project.",
    name: "David Taye-Onih",
    title: "Social Media Manager of Mojoy Computers",
    initial: "d t",
  },
  {
    quote:
      "Kayode created an exceptional website for the Africa Meta and NFT Conference, showcasing our events, speakers, and ticket sales seamlessly. His ability to understand our needs and deliver a high-quality product was remarkable. I highly recommend Kayode for his outstanding web development services.",
    name: "Precious",
    title: "CEO of AMNC (Africa Meta and NFT Conference)",
    initial: "p",
  },
];

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
    title: "Frontend Developer",
    desc: "Contributed to the development of interactive web platforms, enhancing UI/UX using React.js.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Developer",
    desc: "Designed and developed cross-platform mobile applications for iOS and Android using React Native.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web and App Developer",
    desc: "Led full-stack development projects, from concept to deployment, for web and mobile applications.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features with a focus on responsive design and performance optimization.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    link: "https://github.com/kayode-victor",
    icon: FaGithub,
  },
  {
    id: 2,
    link: "https://www.instagram.com/vk4biz/",
    icon: FaInstagram,
  },
  {
    id: 3,
    link: "https://www.linkedin.com/in/kayode-victor/",
    icon: FaLinkedin,
  },
  {
    id: 4,
    link: "https://wa.me/2349130912078",
    icon: FaWhatsapp,
  },
];
