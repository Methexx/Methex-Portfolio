import abcCinemaImg from '../Assets/Projects/abc-cinema.png';
import greenieImg from '../Assets/Projects/greenie.jpg';
import walkWiseImg from '../Assets/Projects/walkwise.png';
import clearskyImg from '../Assets/Projects/clearsky.png';

const projectData = [
  {
    id: "1",
    title: "ABC Cinema Movie Ticket Booking System",
    description: "ABC Cinema is a full-featured web application built to simplify online movie ticket booking. Created as part of a second-year university project, it includes dedicated interfaces for both regular users and administrators to perform their respective tasks smoothly.",
    image: abcCinemaImg,
    technologies: ["JSP", "Java", "Servlets", "HTML", " CSS", "JavaScript", "MySQL", "MariaDB"],
    category: "Web",
    screenshots: [
      abcCinemaImg,
      "https://i.pinimg.com/736x/62/3d/06/623d0614666d6343b160caee46ba37c0.jpg",
      "https://i.pinimg.com/736x/62/3d/06/623d0614666d6343b160caee46ba37c0.jpg",
      "https://i.pinimg.com/736x/62/3d/06/623d0614666d6343b160caee46ba37c0.jpg",
      "https://i.pinimg.com/736x/62/3d/06/623d0614666d6343b160caee46ba37c0.jpg"
    ],
    details: "ABC Cinema is an online movie ticket reservation system built using Java Servlets and JSP. It offers a user-friendly interface for customers to view available movies and book tickets, while providing administrators with a dedicated dashboard to oversee movie listings, user management, and booking records.",
    
    // My Contribution Section
    contributions: {
      title: "🚀 My Role & Contributions",
      description: "As the developer on this project, I was responsible for the complete ui design and frontend development from concept to deployment..",
      responsibilities: [
        "Designed and implemented the complete system architecture using Java Spring Boot and React",
        "Developed real-time seat booking functionality with conflict resolution",
        "Created secure payment integration with multiple payment gateways",
        "Built comprehensive admin dashboard for movie and user management",
        "Implemented user authentication and authorization system",
        "Designed responsive UI/UX for both user and admin interfaces",
        "Set up MySQL database with optimized queries for better performance",
        "Conducted thorough testing and deployed the application"
      ]
    },
    
    // Enhanced detailed sections
    detailedSections: {
      userPlatform: {
        title: "👤 User Platform",
        features: [
          "Authentication: Users can register and log in securely.",
          "Movie Browsing: Browse through a list of available movies with details.",
          "Booking: Select showtimes and book tickets.",
          "Profile Management: Users can view and manage their bookings."
        ]
      },
      adminDashboard: {
        title: "🛠️ Admin Dashboard",
        features: [
          "Movie Management: Add, update, or delete movie listings.",
          "User Management: View and manage registered users.",
          "Ticket Management: Monitor and manage bookings.",
          "Reviews Management: Oversee user reviews and feedback."
        ]
      },
      technologiesUsed: {
        title: "📊 Technologies Used",
        items: [
          "Backend: Java Servlets & JSP",
          "Frontend: HTML, CSS, JavaScript",
          "Database: MariaDB/MySQL",
          "Development Environment: IntelliJ IDEA"
        ]
      },
      folderStructure: {
        title: "📁 Folder Structure Overview",
        structure: [
          "src/main: Contains the main source code for both user and admin functionalities.",
          "static/assets/images: Stores static assets like images.",
          "dbconfig.properties: Configuration file for database and email settings."
        ]
      }
    }
  },
  {
    id: "2",
    title: "Greenie Social Platform",
    description: "Greenie is a gamified platform that encourages environmental consciousness through challenges, rewards, and social engagement.",
    image: greenieImg,
    technologies: ["Next.js", "Node.js", "MongoDB", "Socket.io"],
    category: "Web",
    screenshots: [
      greenieImg,
      "https://drive.google.com/file/d/1GJQeAA01yW90zgyT_YvvTP5oqZRm_b1U/view?usp=drive_link",
      "https://via.placeholder.com/800x600/262624/ffffff?text=Challenges+Page",
      "https://via.placeholder.com/800x600/262624/ffffff?text=Leaderboard",
      "https://via.placeholder.com/800x600/262624/ffffff?text=User+Profile"
    ],
    details: "Greenie is a social platform that gamifies environmental consciousness. Users can participate in eco-friendly challenges, earn points and badges, share their progress, and connect with like-minded individuals. Features real-time updates and social interaction.",
    
    // My Contribution - Team Project Example
    contributions: {
      title: "👥 My Contribution (Team Project)",
      description: "I worked as a frontend developer in a team of 4, focusing on user interface and real-time features.",
      responsibilities: [
        "Developed the complete frontend using Next.js and React",
        "Implemented real-time features using Socket.io for live updates",
        "Created responsive design for mobile and desktop platforms",
        "Built the gamification system with points, badges, and leaderboards",
        "Integrated with backend APIs for user authentication and data management",
        "Optimized performance and implemented lazy loading for better UX",
        "Collaborated with backend developers for API integration"
      ]
    },
    
    detailedSections: {
      userPlatform: {
        title: "🌱 User Features",
        features: [
          "Challenge Participation: Join eco-friendly challenges and track progress.",
          "Social Sharing: Share achievements and progress with friends.",
          "Rewards System: Earn points, badges, and eco-rewards.",
          "Community Interaction: Connect with environmentally conscious users."
        ]
      },
      adminDashboard: {
        title: "🎯 Admin Features",
        features: [
          "Challenge Management: Create and manage environmental challenges.",
          "User Analytics: Track user engagement and participation.",
          "Content Moderation: Monitor and moderate user-generated content.",
          "Reward Distribution: Manage rewards and badge systems."
        ]
      },
      technologiesUsed: {
        title: "⚡ Tech Stack",
        items: [
          "Frontend: Next.js with React",
          "Backend: Node.js with Express",
          "Database: MongoDB",
          "Real-time: Socket.io for live updates"
        ]
      },
      keyFeatures: {
        title: "🔑 Key Features",
        structure: [
          "Real-time leaderboards and progress tracking",
          "Gamification elements with points and badges",
          "Social features for community building",
          "Mobile-responsive design for all devices"
        ]
      }
    }
  },




  {
    id: "3",
    title: "WalkWise – Community Location Discovery App",
    description: "WalkWise is a location-based mobile application developed using Flutter, designed to help users discover and share places within Sri Lanka. Centered around a community-driven experience, it features an interactive map, real-time location tracking, user-contributed reviews, and tools for managing personal place lists.",
    image: walkWiseImg,
    technologies: ["Flutter", "Firebase", "Dart"],
    category: "Mobile",
    screenshots: [
      walkWiseImg,
      "https://via.placeholder.com/400x800/262624/ffffff?text=WalkWise+Home",
      "https://via.placeholder.com/400x800/262624/ffffff?text=Location+Details",
      "https://via.placeholder.com/400x800/262624/ffffff?text=Reviews+Page",
      "https://via.placeholder.com/400x800/262624/ffffff?text=Map+View"
    ],
    details: "WalkWise is a mobile-centric location discovery app developed using Flutter, aimed at helping users find, review, and share nearby spots. Specially designed for Sri Lanka, it delivers a smooth user experience through interactive maps, intuitive navigation, and a clean, modern interface.",
    
    // No contribution section for this project (will be hidden)
    contributions: null,
    
    detailedSections: {
      userPlatform: {
        title: "📱 Mobile Features",
        features: [
          "Location Discovery: Find and explore places across Sri Lanka.",
          "Reviews & Ratings: Share experiences and rate locations.",
          "Photo Sharing: Upload and view photos of places.",
          "Offline Access: Access saved locations without internet."
        ]
      },
      communityFeatures: {
        title: "👥 Community Features",
        features: [
          "User Profiles: Create and customize personal profiles.",
          "Follow System: Follow other users and see their discoveries.",
          "Local Insights: Get recommendations from locals.",
          "Event Sharing: Share and discover local events."
        ]
      },
      technologiesUsed: {
        title: "🛠️ Development Stack ",
        items: [
          "Framework: Flutter for cross-platform development",
          "Backend: Supabse for authentication and database",
          "Maps: OpenStreetMap (Map tiles)",
          "flutter_map, Provider, http"
        ]
      },
      architecture: {
        title: "🏗️ App Architecture",
        structure: [
          "lib/screens: UI screens and navigation",
          "lib/services: Firebase and API services",
          "lib/models: Data models and structures",
          "lib/widgets: Reusable UI components"
        ]
      }
    }
  },
  {
    id: "4",
    title: "Real-Time Weather Dashboard",
    description: "A modern weather dashboard with real-time updates and forecasting capabilities.",
    image: clearskyImg,
    technologies: ["Laravel", "React", "Tailwind CSS"],
    category: "Web",
    screenshots: [
      clearskyImg,
      "https://via.placeholder.com/800x600/262624/ffffff?text=Weather+Dashboard+Home",
      "https://via.placeholder.com/800x600/262624/ffffff?text=Forecast+Details",
      "https://via.placeholder.com/800x600/262624/ffffff?text=Weather+Maps",
      "https://via.placeholder.com/800x600/262624/ffffff?text=Settings+Panel"
    ],
    details: "A comprehensive weather dashboard that provides real-time weather data, forecasts, and interactive weather maps with a beautiful, responsive interface.",
    
    // Personal Project Example
    contributions: {
      title: "💼 Personal Project",
      description: "This was a personal project where I challenged myself to build a complete weather application from scratch.",
      responsibilities: [
        "Designed and developed the entire application architecture",
        "Built RESTful APIs using Laravel for weather data processing",
        "Created responsive React frontend with Tailwind CSS",
        "Integrated multiple weather APIs for comprehensive data",
        "Implemented real-time updates using WebSocket connections",
        "Added data visualization with interactive charts and maps",
        "Deployed and maintained the application on cloud infrastructure"
      ]
    },
    
    detailedSections: {
      userPlatform: {
        title: "🌤️ Weather Features",
        features: [
          "Real-time Weather: Current conditions and live updates.",
          "7-Day Forecast: Detailed weather predictions.",
          "Location Search: Find weather for any location worldwide.",
          "Weather Alerts: Notifications for severe weather conditions."
        ]
      },
      dashboard: {
        title: "📊 Dashboard Features",
        features: [
          "Interactive Maps: Visualize weather patterns and radar.",
          "Historical Data: Access past weather information.",
          "Customizable Widgets: Personalize your weather view.",
          "Export Data: Download weather reports and data."
        ]
      },
      technologiesUsed: {
        title: "🔧 Technical Stack",
        items: [
          "Backend: Laravel PHP framework",
          "Frontend: React with Tailwind CSS",
          "API: OpenWeatherMap API integration",
          "Charts: Chart.js for data visualization"
        ]
      },
      apiIntegration: {
        title: "🔌 API & Services",
        structure: [
          "Weather API: OpenWeatherMap for current and forecast data",
          "Geocoding: Location-based weather services",
          "Real-time Updates: WebSocket connections for live data",
          "Caching: Redis for improved performance"
        ]
      }
    }
  }
];

export default projectData;