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
  },
  {
    id: "5",
    title: "AstroLift Gym Management Platform",
    description: "AstroLift is a full-stack gym management and workout tracking web app that supports admin, trainer, and member roles with real-time updates across memberships, workouts, payments, and attendance.",
    image: "https://via.placeholder.com/1200x700/111827/f8fafc?text=AstroLift",
    technologies: ["Next.js", "Node.js", "Express", "Docker", "Docker Compose", "ESLint", "Prettier", "Husky", "Jest"],
    category: "Web",
    screenshots: [
      "https://via.placeholder.com/1200x700/111827/f8fafc?text=AstroLift"
    ],
    details: "AstroLift is a production-ready gym management platform built to centralize everyday gym operations in one system. It provides structured access for admins, trainers, and members while supporting workout tracking, membership management, payment workflows, attendance logging, and real-time updates. The application is fully Dockerized, making setup and team collaboration smoother across development environments.",

    contributions: {
      title: "Team Contribution & My Role",
      description: "I made a major hands-on contribution to this team project across both product behavior and implementation, helping shape key workflows, integrate core modules, and support a reliable full-stack delivery.",
      responsibilities: [
        "Contributed heavily to the full-stack implementation across frontend and backend features.",
        "Helped build role-based experiences for admin, trainer, and member workflows.",
        "Worked on core modules such as memberships, workout tracking, attendance, and payment-related flows.",
        "Supported API integration and data flow between the Next.js frontend and Express backend.",
        "Contributed to improving the project structure and Docker-based development setup.",
        "Collaborated on testing, code quality, and workflow consistency using shared tooling and team practices.",
        "Helped refine the user experience so daily gym operations could be handled more efficiently."
      ]
    },

    detailedSections: {
      platformRoles: {
        title: "User Roles & Platform Access",
        features: [
          "Admin Panel: Manage memberships, payments, attendance records, and overall gym operations.",
          "Trainer Workspace: Create workout programs, track member progress, and monitor assigned activities.",
          "Member Portal: View workouts, follow assigned programs, and stay updated with gym activity.",
          "Role-Based Access: Structured permissions help keep each workflow focused and secure."
        ]
      },
      gymOperations: {
        title: "Core Gym Operations",
        features: [
          "Membership Management: Organize member records and subscription-related workflows.",
          "Workout Tracking: Create and follow workout plans with progress visibility.",
          "Payments & Billing: Support billing-related processes and payment tracking.",
          "Attendance Logging: Track attendance with real-time operational updates."
        ]
      },
      technologiesUsed: {
        title: "Tech Stack",
        items: [
          "Frontend: Next.js",
          "Backend: Node.js with Express",
          "Containerization: Docker and Docker Compose",
          "Tooling & Quality: ESLint, Prettier, Husky, and Jest"
        ]
      },
      deploymentSetup: {
        title: "Project Setup & Delivery",
        structure: [
          "Dockerized Architecture: Frontend and backend services run together through Docker Compose.",
          "Environment Setup: Backend configuration is managed through environment variables.",
          "Development Workflow: Separate development compose setup supports hot reloading.",
          "Production-Ready Outcome: The app was delivered as a scalable, team-friendly full-stack solution."
        ]
      }
    }
  },
  {
    id: "6",
    title: "UniVerse School Management Platform",
    description: "UniVerse is a full-stack school management platform that connects admins, teachers, security staff, and parents through a unified backend, web dashboard, and mobile app.",
    image: "https://via.placeholder.com/1200x700/0f172a/f8fafc?text=UniVerse",
    technologies: ["Fastify", "Next.js", "React", "Flutter", "TypeScript", "Prisma", "PostgreSQL", "Redis", "Docker", "Firebase", "Gemini"],
    category: ["Web", "Mobile"],
    screenshots: [
      "https://via.placeholder.com/1200x700/0f172a/f8fafc?text=UniVerse"
    ],
    details: "UniVerse is a large-scale school management system built as a final year project to unify school operations across multiple user groups. The platform combines a Fastify backend, a Next.js web dashboard, and a Flutter mobile app to support admins, teachers, security staff, and parents in one connected ecosystem. It includes attendance management, QR-based gate tracking, results publishing, messaging, announcements, complaints handling, lost and found reporting, push notifications, and an AI-powered RAG chatbot for policy-aware assistance.",

    contributions: {
      title: "My Role & Implementation",
      description: "This was my final year project, where I designed and built a large-scale multi-platform school management system covering backend services, web workflows, mobile access, and operational features.",
      responsibilities: [
        "Designed and implemented the full system structure across backend, web, and mobile application layers.",
        "Built role-based access flows for admins, teachers, security staff, parents, and pending users.",
        "Developed core modules including attendance, gate logs, announcements, messaging, complaints, and results management.",
        "Integrated the Fastify API with the Next.js dashboard, Flutter parent app, and Firebase notification workflows.",
        "Set up the monorepo structure, Docker-based development flow, environment configuration, and supporting tooling.",
        "Implemented AI-assisted school support through RAG-based backend workflows and retrieval logic.",
        "Maintained project quality through testing support, documentation, and structured development practices."
      ]
    },

    detailedSections: {
      platformAccess: {
        title: "Platform Roles & Access",
        features: [
          "Admin Role: Manage overall school operations, users, notices, complaints, attendance, and reporting flows.",
          "Teacher Role: Handle classes, attendance, results, messages, and class-scoped notices.",
          "Security Role: Manage gate logs, QR scanning, and entry-exit monitoring.",
          "Parent Access: Use the mobile app to track attendance, notifications, results, notices, support, and student status."
        ]
      },
      coreFeatures: {
        title: "Core Features",
        features: [
          "Gate System: QR-based IN/OUT scanning with auto-checkout logic and parent alerts.",
          "Attendance & Results: Daily attendance sessions, batch submission, calendar views, and publishable term results.",
          "Communication Tools: Messaging threads, announcements, and AI-assisted draft suggestions.",
          "Support Modules: Complaints triage, lost and found reporting, push notifications, and email-based approval flows."
        ]
      },
      technologiesUsed: {
        title: "Tech Stack",
        items: [
          "Backend: Fastify, Prisma, PostgreSQL, Redis, Firebase integration, Gemini-powered RAG services",
          "Web: Next.js, React, TypeScript, Tailwind CSS",
          "Mobile: Flutter with structured feature modules for parent-facing workflows",
          "DevOps & Tooling: Docker, npm workspaces, Husky, CI workflows, commitlint, and Vercel configuration"
        ]
      },
      architecture: {
        title: "Architecture & Delivery",
        structure: [
          "Monorepo Setup: Shared npm workspace containing backend, frontend, and Flutter applications.",
          "Docker Development: Hot-reload development stack with backend, frontend, and Redis services.",
          "Production Delivery: Separate production compose setup and deployment-ready configuration.",
          "Final Year Scope: Designed as a comprehensive multi-platform system with documentation, testing, and CI support."
        ]
      }
    }
  },
  {
    id: "7",
    title: "Avurudu Nekath Countdown App",
    description: "A festive Flutter mobile app that counts down to the Sri Lankan Sinhala and Tamil New Year while displaying traditional Nekath times in a beautiful cultural interface.",
    image: "https://via.placeholder.com/800x1200/7c2d12/fef3c7?text=Avurudu+Nekath+App",
    technologies: ["Flutter", "Dart"],
    category: "Mobile",
    screenshots: [
      "https://via.placeholder.com/800x1200/7c2d12/fef3c7?text=Avurudu+Nekath+App"
    ],
    details: "Avurudu Nekath Countdown App is a Flutter mobile application built to celebrate the Sri Lankan Sinhala and Tamil New Year through a culturally themed digital experience. The app provides a real-time countdown to Avurudu, displays important Nekath times such as bathing, lighting the hearth, and anointing oil, and presents the information through a festive user interface inspired by traditional colors and seasonal celebration vibes.",

    contributions: {
      title: "My Role & Implementation",
      description: "I designed and developed this mobile application as a focused cultural utility app, combining countdown functionality, traditional event timing, and a polished festive user experience.",
      responsibilities: [
        "Built the mobile application using Flutter and Dart.",
        "Implemented the real-time countdown logic for the Avurudu celebration date.",
        "Designed screens and reusable widgets for displaying Nekath times clearly.",
        "Structured the app into screens, widgets, models, and utility helpers for maintainability.",
        "Created a festive interface style to match the cultural theme of the Sinhala and Tamil New Year.",
        "Prepared the project for Android release and APK distribution."
      ]
    },

    detailedSections: {
      mobileFeatures: {
        title: "Mobile Features",
        features: [
          "Real-Time Countdown: Live countdown to the Sinhala and Tamil New Year.",
          "Nekath Times: View auspicious times for important Avurudu rituals and events.",
          "Year Selection: Support for checking Avurudu celebrations for different years.",
          "Festival-Themed Design: A colorful and festive interface inspired by Avurudu traditions."
        ]
      },
      userExperience: {
        title: "User Experience",
        features: [
          "Simple Navigation: Easy access between countdown and Nekath-related screens.",
          "Clear Time Presentation: Traditional times are presented in a readable card-based layout.",
          "Cultural Focus: The app is designed to feel relevant and familiar to Sri Lankan users.",
          "Reminder Potential: Structured to support optional notifications for important Nekath moments."
        ]
      },
      technologiesUsed: {
        title: "Tech Stack",
        items: [
          "Framework: Flutter",
          "Language: Dart",
          "Architecture: Screen, widget, model, and utility-based structure",
          "Distribution: Android APK release workflow"
        ]
      },
      projectStructure: {
        title: "Project Structure",
        structure: [
          "lib/screens: Home and Nekath-related screens",
          "lib/widgets: Countdown timer and reusable Nekath cards",
          "lib/models: Data model for Nekath information",
          "lib/utils: Date helper utilities and supporting logic"
        ]
      }
    }
  },
  {
    id: "8",
    title: "Screeenc USB-Only Screen Sharing",
    description: "Screeenc is a USB-only screen sharing solution that streams a Windows desktop screen to an Android device with low latency, without Wi-Fi, internet, or web-based technologies.",
    image: "https://via.placeholder.com/1200x700/111111/f8fafc?text=Screeenc",
    technologies: ["Flutter", "Kotlin", "MediaCodec", "TCP Sockets", "ADB", "C++", "C#", "DXGI", "Windows Media Foundation"],
    category: "Mobile",
    screenshots: [
      "https://via.placeholder.com/1200x700/111111/f8fafc?text=Screeenc"
    ],
    details: "Screeenc is a screen sharing system designed to stream a live Windows desktop screen to an Android device using only a USB cable. The project avoids Wi-Fi, internet-based transport, and browser technologies, instead relying on officially supported APIs and USB tunneling through ADB port forwarding. The Android receiver is fully implemented with hardware-accelerated H.264 decoding, foreground service support, USB connection detection, and a Flutter-based status interface, while the Windows sender is planned to handle screen capture and encoding through native Windows APIs.",

    contributions: {
      title: "My Role & Implementation",
      description: "I designed and built this project as a low-latency USB-only screen sharing solution, focusing on practical architecture, native media handling, and a clean mobile receiver experience.",
      responsibilities: [
        "Designed the full end-to-end architecture for streaming Windows screen content to Android over USB.",
        "Built the Android receiver application using Flutter and Kotlin with platform channel integration.",
        "Implemented TCP-based H.264 video receiving and hardware-accelerated decoding using MediaCodec.",
        "Added foreground service behavior, notification handling, and automatic USB connection state detection.",
        "Structured the project around supported APIs and user-mode only techniques without security bypasses.",
        "Prepared the system for native Windows sender development using DXGI Desktop Duplication and Media Foundation."
      ]
    },

    detailedSections: {
      mobileReceiver: {
        title: "Android Receiver",
        features: [
          "Hardware H.264 Decoding: Uses MediaCodec for efficient video decoding on Android devices.",
          "USB Tunnel Streaming: Receives TCP video data forwarded through ADB over a USB cable.",
          "Foreground Service: Keeps the receiver active with notification-based background behavior.",
          "Flutter UI: Displays real-time connection and receiver state through a clean mobile interface."
        ]
      },
      systemArchitecture: {
        title: "System Architecture",
        features: [
          "Windows Capture Pipeline: Planned screen capture through DXGI Desktop Duplication API.",
          "Video Encoding: Planned H.264 encoding using Windows Media Foundation.",
          "Transport Layer: TCP streaming through localhost with ADB port forwarding over USB.",
          "Rendering Flow: Decoded frames are displayed on Android through SurfaceView."
        ]
      },
      technologiesUsed: {
        title: "Tech Stack",
        items: [
          "Mobile App: Flutter, Kotlin, Material 3",
          "Video & Rendering: MediaCodec, H.264/AVC, SurfaceView",
          "Transport: TCP sockets and ADB port forwarding",
          "Planned Windows Sender: C++ or C#, DXGI Desktop Duplication API, Windows Media Foundation"
        ]
      },
      securityCompliance: {
        title: "Security & Compliance",
        structure: [
          "Uses officially supported Microsoft and Android APIs only.",
          "Runs entirely in user mode without kernel drivers or system hooks.",
          "Does not bypass DRM or capture protected secure surfaces.",
          "Remains USB-only with no dependency on Wi-Fi or internet-based communication."
        ]
      }
    }
  }
];

export default projectData;
