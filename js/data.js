// =====================================================
// PERSONAL INFORMATION
// Edit these values to update your website headers/links.
// =====================================================
const siteData = {
    name: "Sarthak Gaurav",
    title: "Data Engineer",
    tagline: "Building reliable data pipelines, analytical systems, and cloud-based data solutions.",
    bio: "I am a data engineering professional interested in building scalable data pipelines, analytical systems, and cloud-based data solutions. I focus on transforming raw data into reliable, structured formats to drive business intelligence and analytics.",
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    resume: "assets/resume.pdf",
    focus: [
        "Data Engineering",
        "Microsoft Fabric",
        "Azure",
        "SQL",
        "PySpark",
        "Data Analytics"
    ],
    enjoyBuilding: [
        "ETL/ELT pipelines",
        "Data warehouses",
        "Lakehouse architectures",
        "Analytics solutions",
        "Real-time data systems"
    ]
};

// =====================================================
// EXPERIENCE
// To add another job:
// 1. Copy an existing object (from { to }, inclusive)
// 2. Paste it below the previous one, separated by a comma
// 3. Change the values
// =====================================================
const experiences = [
    {
        company: "Cognizant",
        role: "Programmer Analyst",
        duration: "March 2026 – Present",
        location: "Kochi, India",
        description: "Data Engineering focus, building and maintaining data pipelines.",
        achievements: [
            "Contributed to cloud data solutions and pipeline orchestration.",
            "Utilized SQL and Python for data extraction and transformation.",
            "Participated in agile ceremonies and collaborative team environments."
        ],
        technologies: ["SQL", "Python", "Azure", "Microsoft Fabric", "PySpark"]
    }
];

// =====================================================
// SKILLS
// Organized by categories. Add or remove arrays as needed.
// =====================================================
const skills = [
    {
        category: "DATA ENGINEERING",
        items: ["ETL / ELT", "Data Pipelines", "Data Warehousing", "Data Modelling", "Data Lakes", "Lakehouse Architecture"]
    },
    {
        category: "PROGRAMMING",
        items: ["Python", "SQL", "PySpark", "KQL"]
    },
    {
        category: "MICROSOFT / CLOUD",
        items: ["Microsoft Fabric", "Azure", "OneLake", "Azure Data Factory", "Power BI"]
    },
    {
        category: "DATABASES / ANALYTICS",
        items: ["SQL Server", "Delta Lake", "Data Warehouses", "Power BI"]
    }
];

// =====================================================
// PROJECTS
// =====================================================
const projects = [
    {
        title: "Microsoft Fabric Data Engineering Pipeline",
        description: "An end-to-end data engineering pipeline demonstrating ingestion, transformation, lakehouse storage, and analytical serving using Microsoft Fabric.",
        architecture: "Source &rarr; Data Factory &rarr; OneLake &rarr; Lakehouse &rarr; PySpark &rarr; Warehouse / SQL &rarr; Power BI",
        technologies: ["Microsoft Fabric", "OneLake", "Lakehouse", "Data Factory", "PySpark", "SQL", "Power BI"],
        github: "#",
        demo: "" // Leave empty to hide button
    },
    {
        title: "Cloud Data Warehouse",
        description: "An analytical data warehouse project demonstrating dimensional modelling, ETL/ELT pipelines, and BI-ready datasets.",
        architecture: "Data Sources &rarr; Azure Data Factory &rarr; SQL Data Warehouse &rarr; Power BI",
        technologies: ["Azure", "SQL", "Data Factory", "Data Warehouse", "Power BI"],
        github: "#",
        demo: "#"
    },
    {
        title: "Real-Time Analytics",
        description: "A real-time analytics project demonstrating event ingestion, KQL-based analysis, and real-time reporting.",
        architecture: "Streaming Data &rarr; Eventstream &rarr; Eventhouse &rarr; KQL &rarr; Power BI",
        technologies: ["Microsoft Fabric", "Eventstream", "Eventhouse", "KQL", "Power BI"],
        github: "#",
        demo: ""
    }
];

// =====================================================
// EDUCATION
// =====================================================
const education = [
    {
        degree: "Bachelor of Technology",
        institution: "Maharaja Surajmal Institute of Technology (MSIT)",
        duration: "2022 – 2026",
        coursework: [
            "Data Structures",
            "Database Management Systems",
            "Python Programming",
            "Computer Networks"
        ]
    }
];

// =====================================================
// CERTIFICATIONS
// =====================================================
const certifications = [
    {
        name: "Fabric Data Engineer Associate (DP-700)",
        issuer: "Microsoft",
        status: "Planned",
        date: "2026"
    },
    {
        name: "Azure Fundamentals (AZ-900)",
        issuer: "Microsoft",
        status: "In Progress",
        date: "2026"
    }
];

// =====================================================
// ACHIEVEMENTS / HIGHLIGHTS
// Leave array empty [] to hide this section on the site.
// =====================================================
const achievements = [
    "Specialized focus on Microsoft Fabric and Azure ecosystem.",
    "Built foundational projects demonstrating modern Lakehouse architectures."
];
