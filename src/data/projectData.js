import abcCinemaImg from '../Assets/Projects/abc-cinema.png';
import greenieImg from '../Assets/Projects/greenie.jpg';
import walkWiseImg from '../Assets/Projects/walkwise.png';
import clearskyImg from '../Assets/Projects/clearsky.png';


const projectData = [
  {
    id: "1", // Changed to string to match URL params
    title: "ABC Cinema Movie Ticket Booking System",
    description: "A comprehensive Java-based web application for booking movie tickets",
    image: abcCinemaImg, // Use imported local image
    technologies: ["React", "Java", "MySQL", "Spring Boot"],
    category: "Web",
    screenshots: [
      abcCinemaImg, // Use the same image for screenshots or add more later
      "https://via.placeholder.com/800x600/262624/ffffff?text=ABC+Cinema+Dashboard",
      "https://via.placeholder.com/800x600/262624/ffffff?text=Seat+Selection"
    ],
    details: "This comprehensive movie ticket booking system allows users to browse movies, select seats, and make secure payments. Built with Java Spring Boot backend and React frontend, it features real-time seat availability, multiple payment options, and admin dashboard for movie management."
  },
  {
    id: "2",
    title: "Greenie Social Platform",
    description: "Greenie is a gamified platform that encourages environmental consciousness through challenges, rewards, and social engagement.",
    image: greenieImg,
    technologies: ["Next.js", "Node.js", "MongoDB", "Socket.io"],
    category: "Web",
    screenshots: [
      "https://via.placeholder.com/800x600/262624/ffffff?text=Greenie+Home",
      "https://via.placeholder.com/800x600/262624/ffffff?text=Challenges+Page",
      "https://via.placeholder.com/800x600/262624/ffffff?text=Leaderboard"
    ],
    details: "Greenie is a social platform that gamifies environmental consciousness. Users can participate in eco-friendly challenges, earn points and badges, share their progress, and connect with like-minded individuals. Features real-time updates and social interaction."
  },
  {
    id: "3",
    title: "WalkWise – Community Location Discovery App",
    description: "Flutter app for discovering, sharing, and reviewing places in Sri Lanka.",
    image: walkWiseImg, // Will use placeholder
    technologies: ["Flutter", "Firebase", "Dart"],
    category: "Mobile",
    screenshots: [
      "https://via.placeholder.com/400x800/262624/ffffff?text=WalkWise+Home",
      "https://via.placeholder.com/400x800/262624/ffffff?text=Location+Details",
      "https://via.placeholder.com/400x800/262624/ffffff?text=Reviews+Page"
    ],
    details: "A comprehensive task management mobile app built with Flutter. Features include task creation and assignment, calendar integration, team collaboration, progress tracking, and real-time synchronization across devices."
  },
  {
    id: "4",
    title: "Real-Time Weather Dashboard",
    description: "Flutter app for discovering, sharing, and reviewing places in Sri Lanka.",
    image: clearskyImg, // Will use placeholder
    technologies: ["Laravel", "React", "Tailwind CSS"],
    category: "Web",
    screenshots: [
      "https://via.placeholder.com/800x600/262624/ffffff?text=Movie+Booking+UI+Home",
      "https://via.placeholder.com/800x600/262624/ffffff?text=Movie+Selection+UI",
      "https://via.placeholder.com/800x600/262624/ffffff?text=Seat+Booking+UI"
    ],
    details: "A comprehensive task management mobile app built with Flutter. Features include task creation and assignment, calendar integration, team collaboration, progress tracking, and real-time synchronization across devices."
  },
  {
    id: "4",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, inventory management, user authentication, and order tracking.",
    image: null, // Will use placeholder
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    category: "Web",
    screenshots: [
      "https://via.placeholder.com/800x600/262624/ffffff?text=E-Commerce+Home",
      "https://via.placeholder.com/800x600/262624/ffffff?text=Product+Details",
      "https://via.placeholder.com/800x600/262624/ffffff?text=Shopping+Cart"
    ],
    details: "A modern e-commerce platform featuring user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and admin dashboard. Built with Next.js for optimal performance and SEO."
  },
  {
    id: "5",
    title: "Awurudu Nekath Details & Countdowner App",
    description: "A secure mobile banking application with biometric authentication, transaction history, and real-time notifications.",
    image: null, // Will use placeholder
    technologies: ["React Native", "Firebase", "Node.js"],
    category: "Mobile",
    screenshots: [
      "https://via.placeholder.com/400x800/262624/ffffff?text=Awurudu+Home",
      "https://via.placeholder.com/400x800/262624/ffffff?text=Countdown+Timer",
      "https://via.placeholder.com/400x800/262624/ffffff?text=Nekath+Details"
    ],
    details: "A secure mobile banking application featuring biometric authentication, real-time balance updates, transaction history, bill payments, and push notifications. Built with React Native for cross-platform compatibility and Firebase for backend services."
  },
  {
    id: "6",
    title: "Portfolio Website Design",
    description: "A modern, responsive portfolio website design with smooth animations and interactive elements.",
    image: null, // Will use placeholder
    technologies: ["Figma", "Adobe XD", "Principle"],
    category: "UI Designs",
    screenshots: [
      "https://via.placeholder.com/800x600/262624/ffffff?text=Portfolio+Home+Design",
      "https://via.placeholder.com/800x600/262624/ffffff?text=Projects+Page+Design",
      "https://via.placeholder.com/800x600/262624/ffffff?text=Contact+Page+Design"
    ],
    details: "A complete UI/UX design for a modern portfolio website featuring smooth animations, interactive elements, and responsive design. Created using Figma with prototyping in Principle to demonstrate user interactions and micro-animations."
  },
  {
    id: "7",
    title: "Movie Ticket Booking System UI",
    description: "Flutter app for discovering, sharing, and reviewing places in Sri Lanka.",
    image: null, // Will use placeholder
    technologies: ["Flutter", "Firebase", "Dart"],
    category: "UI Designs",
    screenshots: [
      "https://via.placeholder.com/800x600/262624/ffffff?text=Movie+Booking+UI+Home",
      "https://via.placeholder.com/800x600/262624/ffffff?text=Movie+Selection+UI",
      "https://via.placeholder.com/800x600/262624/ffffff?text=Seat+Booking+UI"
    ],
    details: "A comprehensive task management mobile app built with Flutter. Features include task creation and assignment, calendar integration, team collaboration, progress tracking, and real-time synchronization across devices."
  },
  {
    id: "8",
    title: "Mobile Banking App Design for Color Blind Users",
    description: "Flutter app for discovering, sharing, and reviewing places in Sri Lanka.",
    image: null, // Will use placeholder
    technologies: ["Flutter", "Firebase", "Dart"],
    category: "UI Designs",
    screenshots: [
      "https://via.placeholder.com/400x800/262624/ffffff?text=Banking+App+Login+UI",
      "https://via.placeholder.com/400x800/262624/ffffff?text=Dashboard+UI",
      "https://via.placeholder.com/400x800/262624/ffffff?text=Transaction+UI"
    ],
    details: "A comprehensive task management mobile app built with Flutter. Features include task creation and assignment, calendar integration, team collaboration, progress tracking, and real-time synchronization across devices."
  }
];

export default projectData;