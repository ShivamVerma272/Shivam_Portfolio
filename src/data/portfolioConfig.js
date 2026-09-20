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
    resumePdfUrl: "/resume.pdf", 
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
      description: "AI-powered mental health support chatbot designed for real-time emotional support and conversational assistance.",
      category: ["AI"],
      featured: true,
      technologies: ["React.js", "Node.js"],
      features: [
        "Real-time emotional support",
        "Conversational assistance",
        "Interactive AI response interface"
      ],
      github: "https://github.com/ShivamVerma272/AI-Chatbot-for-Mental-Health-Support",
      liveDemo:"https://ai-chatbot-for-mental-health-suppor-liard.vercel.app/"
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