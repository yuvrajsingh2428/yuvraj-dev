import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";
import project8 from "../assets/projects/project-8.jpg";
import project9 from "../assets/projects/project-9.png";

export const HERO_CONTENT = `I am a dedicated software developer with a passion for building efficient and scalable 
web applications. With experience in backend development using Node.js and Express, as well as front-end technologies 
like React, I strive to create robust solutions that enhance user experiences. My expertise extends to databases 
such as PostgreSQL and MongoDB, allowing me to develop RESTful APIs and implement secure authentication systems. 
I am eager to leverage my skills and creativity to design innovative solutions that drive business growth and 
deliver exceptional results.

`;

export const ABOUT_TEXT = `I am a dedicated and versatile software developer with a passion for creating efficient 
and user-friendly web applications. With hands-on experience in technologies like React, Node.js, and Express, 
as well as databases such as PostgreSQL and MongoDB, I focus on delivering robust and scalable solutions. 
My journey in software development began with a deep curiosity for technology and has evolved into a career where 
I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving 
complex problems to deliver high-quality solutions. Outside of coding, I am passionate about exploring new technologies
and contributing to projects that make a difference.`;

export const EXPERIENCES = [

    {
      year: "08/2023 - 11/2023",
      role: "Machine Learning Intern",
      company: "Feynn Labs",
      description: `Led a team to develop an EV Data Analysis Report, optimizing pricing and powertrain dynamics. 
    Improved EV search efficiency by 15% using predictive modeling and enhanced business models with machine learning, 
    driving a 30% revenue increase.`,
  technologies: ["Python", "Pandas", "Scikit-Learn", "Machine Learning"],
    },
    {
      year: "2024",
      role: "Backend Developer",
      company: "Personal Projects",
      description: `Developed a RESTful API for an e-commerce backend system, including user management, product catalog, 
    and order processing. Implemented JWT for authentication and SSL/TLS for data encryption. Containerized 
    applications using Docker and deployed on AWS, achieving 99.9% uptime.`,
      technologies: ["Node.js", "Express", "PostgreSQL", "Docker", "AWS"],
    },
    {
      year: "2023",
      role: "Backend Developer",
      company: "Personal Project",
      description: `Created a scalable news management platform using Express.js, Prisma, and PostgreSQL. 
      Integrated Redis for API caching and BullMQ for background job processing. Enhanced security with 
      HTTP headers, CORS, and implemented email notifications via Nodemailer.`,
      technologies: ["JavaScript", "Express.js", "PostgreSQL", "Redis", "Prisma"],
    },
    

  ];
  



export const PROJECTS = [
  {
    title: "E-Commerce Backend System",
    image: project1, // Add your project image here
    description:
      "Developed RESTful API for user management, product catalog, and order processing. Integrated payment gateways and shipping APIs. Implemented JWT for authentication and SSL/TLS for data encryption, reducing security vulnerabilities by 40%.",
    technologies: ["Node.js", "Express", "MongoDB", "Docker", "AWS"],
  },
  {
    title: "NewsFlow - News Management Platform",
    image: project2, // Add your project image here
    description:
      "Developed a scalable news management platform using Express.js, Prisma, and PostgreSQL. Integrated Redis for API caching and BullMQ for background job processing. Enhanced security with HTTP headers, CORS, and implemented email notifications via Nodemailer.",
    technologies: ["Express.js", "Prisma", "PostgreSQL", "Redis"],
  },
  {
    title: "Blogging API - Backend Development",
    image: project3, // Add your project image here
    description:
      "Developed a blogging API using Node.js, Express, and MongoDB, with secure session handling via JWT and bcrypt. Optimized database performance by 30%, managing over 1,000 entries on MongoDB Atlas.",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    title: "Google Authentication in MERN Stack",
    image: project4, // Add your project image here
    description:
      "Developed a seamless Google login feature for a MERN stack application, integrating MongoDB, Express, React, and Node.js. This implementation enhances user experience by allowing easy authentication through Google accounts, leveraging OAuth 2.0 for secure user identity verification.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "OAuth 2.0"],
  },
  {
    title: "Full Stack Email OTP Authentication System",
    image: project5, // Add your project image here
    description:
      "Created a robust email OTP authentication system using the MERN stack, ensuring user identity and enhancing security through one-time password (OTP) verification via NodeMailer.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "NodeMailer"],
  },
  {
    title: "Role-Based Authentication in MERN Stack",
    image: project6, // Add your project image here
    description:
      "Built a comprehensive role-based authentication system using the MERN stack, enabling secure access control by assigning user roles and managing permissions effectively.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "Quote Generator App",
    image: project7, // Add your project image here
    description:
      "A web application that generates random quotes using HTML, CSS, and JavaScript. Features a responsive design and user-friendly interface with options to change and tweet quotes.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Review Carousel Using JavaScript",
    image: project8, // Add your project image here
    description:
      "A responsive review carousel showcasing user reviews with images, names, and comments, allowing users to navigate through reviews.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Form Validation Page",
    image: project9, // Add your project image here
    description:
      "A user-friendly web application that implements form validation for login and signup processes, ensuring correctly formatted user input with real-time feedback.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "150A/16 Chak Meera Patti, Prayagraj, UttarPradesh, India, 211011",
  phoneNo: "+91 8400817642 ",
  email: "yuvrajsingh.connect@gmail.com",
};
