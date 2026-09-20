export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Shivam Verma",
    title: "Software Developer",
    subtitle: "B.Tech IT Student • Problem Solver • Developer",
    description: "I build practical software solutions, solve programming problems, and explore modern technologies to create useful applications.",
    email: "sv739901@gmail.com",
    phone: "+91-7054323383",
    education: "B.Tech in Information Technology",
    college: "ABES Engineering College, Ghaziabad",
    graduation: "2027",
    cgpa: "8.02",
    photoUrl:"/profile.jpg",
    resumePdfUrl: "/main_resume.pdf", 
    socials: {
      github:"https://github.com/ShivamVerma272",
      linkedin: "https://www.linkedin.com/in/shivam-verma-802b22295/",
      leetcode: "https://leetcode.com/u/LpdLEp3e2U/",
      codechef: "https://www.codechef.com/users/host_door_11"
    }
  },
  terminal: {
    whoami: "Shivam Verma",
    education: "B.Tech Information Technology",
    cgpa: "8.02",
    coding: "150+ LeetCode | 800+ CodeChef",
    status: "Open to Opportunities"
  },
  skills: {
    Frontend: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    Backend: ["Node.js", "Express.js"],
    Database: ["MongoDB", "MySQL"],
    Tools: ["Git", "GitHub", "VS Code"]
  },
  projects: [
    {
      id: "spendwise-ai",
      title: "SpendWise",
      slug: "spendwise-ai",
      description: "AI-powered personal finance management application featuring expense tracking, receipt OCR, risk analysis, and action plans.",
      category: ["AI", "Web"],
      featured: true,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini AI", "OCR"],
      features: [
        "Expense tracking",
        "Budget management",
        "Spending analytics",
        "Interactive charts",
        "CSV export",
        "Receipt OCR",
        "AI-powered financial insights",
        "Personalized saving recommendations",
        "Spending risk analysis",
        "Action plans",
        "Authentication"
      ],
      github:"https://github.com/ShivamVerma272/SpendWise-AI-Pro.",
      liveDemo:"https://spend-wise-ai-pro.vercel.app/"
    },
    {
  id: "slap-slack-clone",
  title: "SLAP (Slack Clone)",
  slug: "slap-slack-clone",
  description: "Real-time Workplace Communication Platform featuring custom channel creation, direct messaging, live chat, and multi-tenant authentication.",
  category: ["Web", "Real-Time", "Database"],
  featured: true,
  technologies: ["React", "Node.js", "Express", "MongoDB", "Stream Chat", "Clerk", "Tailwind CSS", "Vercel", "Render"],
  features: [
    "Real-time instant messaging with sub-second latency",
    "Custom workspace channel creation and management",
    "Direct 1-on-1 messaging & user presence tracking",
    "Multi-tenant OAuth authentication & role management",
    "Rich text formatting, unread badges, and message reactions"
  ],
  github: "https://github.com/ShivamVerma272/slap-slack-clone",
  liveDemo: "https://slap-slack-clone-three.vercel.app"
},
    {
      id: "medicare-ai",
      title: "MediCare",
      slug: "medicare-ai",
      description: "Healthcare Management Platform providing role-based dashboards, slot booking, and AI medical document summarization.",
      category: ["AI", "Web", "Database"],
      featured: true,
      technologies: ["PostgreSQL", "Prisma", "Vercel", "Neon"],
      features: [
        "Role-based dashboards",
        "Online appointment slot booking",
        "Medical record management",
        "AI-assisted medical document summarization",
        "Prescription/document workflows"
      ],
      github: "https://github.com/ShivamVerma272/Medicare",
      liveDemo: "https://medicare-a8n6.vercel.app/"
    },
    {
  id: "ai-chatbot",
  title: "AI Chatbot For Mental Health Support",
  slug: "ai-chatbot",
  description: "AI-powered mental health support chatbot designed for real-time emotional support, secure session history management, and conversational assistance.",
  category: ["AI", "Web", "Database"],
  featured: true,
  technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "OpenAI API", "Vercel"],
  features: [
    "Real-time emotional support and empathetic AI conversational assistance",
    "Secure session and chat history persistence using MongoDB",
    "RESTful API integration for smooth client-server data streaming",
    "Interactive, low-latency AI response interface",
    "Custom prompt engineering with safety content guardrails"
  ],
  github: "https://github.com/ShivamVerma272/AI-Chatbot-for-Mental-Health-Support",
  liveDemo: "https://ai-chatbot-for-mental-health-suppor-liard.vercel.app/"
}
   
  ],
  achievements: [
    { title: "150+", label: "LeetCode Problems Solved" },
    { title: "800+", label: "CodeChef Problems Completed" }
  ],
  certifications: [
    { title: "Frontend / Full Stack Development", issuer: "SkillUp", url: null },
    { title: "Data Analysis", issuer: "Microsoft & LinkedIn", url: null },
    { title: "CodeChef Certificate", issuer: "CodeChef", url: null },
    { title: "Problem Solving (Intermediate)", issuer: "HackerRank", url: null }
  ],
  educationTimeline: [
    {
      year: "2027",
      degree: "B.Tech in Information Technology",
      institution: "ABES Engineering College, Ghaziabad",
      detail: "CGPA: 8.02"
    },
    {
      year: "2022",
      degree: "Senior Secondary",
      institution: "PTR PANDAY SIC",
      detail: "66%"
    },
    {
      year: "2020",
      degree: "Secondary",
      institution: "DEV SANSKRITI GIC",
      detail: "79%"
    }
  ]
};