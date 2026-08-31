/* =====================================================================
   DATA.JS — All editable content for the website lives in this file.
   =====================================================================

   HOW THIS FILE WORKS
   --------------------
   The HTML file (index.html) only contains empty "slots" — it does not
   contain your name, your job history, or your projects. Instead, this
   file holds all of that information as plain JavaScript objects and
   lists, and js/main.js reads this file and builds the page from it.

   This means: to update almost anything on the site, you only need to
   edit THIS file. You do not need to touch index.html, style.css, or
   main.js for everyday updates like adding a job or a project.

   A FEW GROUND RULES BEFORE YOU EDIT
   -----------------------------------
   1. Every piece of text must be wrapped in quotes: "like this"
   2. Every entry (except the last one in a list) needs a comma after it
   3. Curly braces { } group the details of ONE thing (one job, one
      project, etc). Square brackets [ ] hold a LIST of things.
   4. If you're not sure you broke something, compare your edit closely
      against an entry that's still working — one missing comma or
      quote is the most common mistake.
   5. Anything written like [In brackets like this] is placeholder text
      left for you to replace with your real information.

   ===================================================================== */


/* =====================================================================
   1. PERSONAL INFORMATION
   =====================================================================
   These values are used all over the site: the navigation bar, the
   hero section, the contact section, and the footer. Change them once
   here and they update everywhere automatically.
   ===================================================================== */
const siteData = {
    name: "Sarthak Gaurav",
    title: "Data Engineer",
    tagline: "Building reliable data pipelines, analytical systems, and cloud-based data solutions.",

    // Used for the "mailto:" link in the Contact section and footer.
    email: "your.email@example.com",

    // Full URLs, including "https://"
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",

    // Path to your resume file. Keep your resume in the assets folder
    // and name it exactly "resume.pdf" (or update this path to match
    // whatever you name it).
    resume: "assets/resume.pdf",

    // Shown in the small hero graphic. Edit the stage names if you'd
    // like the flow to describe your work differently.
    heroFlow: ["Source", "Pipeline", "Lakehouse", "Warehouse", "Analytics"]
};


/* =====================================================================
   2. ABOUT ME
   ===================================================================== */
const aboutData = {
    bio: "I am a data engineering professional interested in building scalable data pipelines, analytical systems, and cloud-based data solutions.",

    focusAreas: [
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


/* =====================================================================
   3. EXPERIENCE
   =====================================================================
   TO ADD A NEW JOB:
     1. Copy one whole entry below — from the opening "{" to the
        closing "},"
     2. Paste it either above or below the existing entry (most recent
        job usually goes first, at the top of the list)
     3. Change the values to match your new role

   TO REMOVE A JOB:
     Delete its entire { ... } entry, including the comma that follows
     it (or precedes it, if you're deleting the last entry in the list).
   ===================================================================== */
const experiences = [
    {
        company: "Cognizant",
        role: "Programmer Analyst",
        duration: "2026 – Present",
        location: "India",
        description: "[Add a short description of your role and day-to-day responsibilities]",
        achievements: [
            "[Achievement or responsibility — edit this]",
            "[Achievement or responsibility — edit this]",
            "[Achievement or responsibility — edit this]"
        ],
        technologies: ["SQL", "Python", "Azure", "Microsoft Fabric", "PySpark"]
    }

    // TO ADD ANOTHER JOB, copy the block above, paste it here, and edit:
    // {
    //     company: "...",
    //     role: "...",
    //     duration: "...",
    //     location: "...",
    //     description: "...",
    //     achievements: ["...", "..."],
    //     technologies: ["...", "..."]
    // }
];


/* =====================================================================
   4. SKILLS
   =====================================================================
   Each key on the left (e.g. "Data Engineering") is a category heading.
   The list on the right is the set of skill tags shown under it.

   TO ADD A SKILL: add another "item" inside the right list.
   TO ADD A CATEGORY: add another "Category Name": [ ... ] line.
   TO REMOVE A SKILL OR CATEGORY: delete the relevant line.
   ===================================================================== */
const skills = {
    "Data Engineering": [
        "ETL / ELT",
        "Data Pipelines",
        "Data Warehousing",
        "Data Modelling",
        "Data Lakes",
        "Lakehouse Architecture"
    ],
    "Programming": [
        "Python",
        "SQL",
        "PySpark",
        "KQL"
    ],
    "Microsoft / Cloud": [
        "Microsoft Fabric",
        "Azure",
        "OneLake",
        "Azure Data Factory",
        "Power BI"
    ],
    "Databases / Analytics": [
        "SQL Server",
        "Delta Lake",
        "Data Warehouses",
        "Power BI"
    ]
};


/* =====================================================================
   5. PROJECTS
   =====================================================================
   These are currently PLACEHOLDER projects — they describe the kind of
   project being planned, not something already completed. Replace the
   description, features, and case-study fields once the project is
   real. The "architecture" list is rendered as a simple flow diagram
   on the project card, and doubles as a fallback if no image is found
   at the "image" path.

   TO ADD A PROJECT: copy one whole { ... } entry and edit the values.
   TO REMOVE A PROJECT: delete its { ... } entry.
   ===================================================================== */
const projects = [
    {
        title: "Microsoft Fabric Data Engineering Pipeline",
        description: "An end-to-end data engineering pipeline demonstrating ingestion, transformation, lakehouse storage, and analytical serving using Microsoft Fabric.",
        // If an image exists at this path, it's shown instead of the
        // auto-generated architecture diagram below.
        image: "assets/project1.png",
        architecture: ["Source", "Data Factory", "OneLake", "Lakehouse", "PySpark", "Warehouse / SQL", "Power BI"],
        technologies: ["Microsoft Fabric", "OneLake", "Lakehouse", "Data Factory", "PySpark", "SQL", "Power BI"],
        features: [
            "[Key feature — edit this]",
            "[Key feature — edit this]",
            "[Key feature — edit this]"
        ],
        github: "#",
        demo: "#",
        caseStudy: {
            problem: "[Describe the problem this project addresses]",
            approach: "[Describe your approach to solving it]",
            dataPipeline: "[Describe how data flows through the system]",
            challenges: "[Describe challenges you ran into]",
            results: "[Describe the outcome or results]",
            whatILearned: "[Describe what you learned building this]"
        }
    },
    {
        title: "Cloud Data Warehouse",
        description: "An analytical data warehouse project demonstrating dimensional modelling, ETL/ELT pipelines, and BI-ready datasets.",
        image: "assets/project2.png",
        architecture: ["Source", "Data Factory", "Data Warehouse", "Power BI"],
        technologies: ["Azure", "SQL", "Data Factory", "Data Warehouse", "Power BI"],
        features: [
            "[Key feature — edit this]",
            "[Key feature — edit this]",
            "[Key feature — edit this]"
        ],
        github: "#",
        demo: "#",
        caseStudy: {
            problem: "[Describe the problem this project addresses]",
            approach: "[Describe your approach to solving it]",
            dataPipeline: "[Describe how data flows through the system]",
            challenges: "[Describe challenges you ran into]",
            results: "[Describe the outcome or results]",
            whatILearned: "[Describe what you learned building this]"
        }
    },
    {
        title: "Real-Time Analytics",
        description: "A real-time analytics project demonstrating event ingestion, KQL-based analysis, and real-time reporting.",
        image: "assets/project3.png",
        architecture: ["Event Source", "Eventstream", "Eventhouse", "KQL", "Power BI"],
        technologies: ["Microsoft Fabric", "Eventstream", "Eventhouse", "KQL", "Power BI"],
        features: [
            "[Key feature — edit this]",
            "[Key feature — edit this]",
            "[Key feature — edit this]"
        ],
        github: "#",
        demo: "#",
        caseStudy: {
            problem: "[Describe the problem this project addresses]",
            approach: "[Describe your approach to solving it]",
            dataPipeline: "[Describe how data flows through the system]",
            challenges: "[Describe challenges you ran into]",
            results: "[Describe the outcome or results]",
            whatILearned: "[Describe what you learned building this]"
        }
    }
];


/* =====================================================================
   6. EDUCATION
   =====================================================================
   TO ADD ANOTHER EDUCATION ENTRY: copy one { ... } entry and edit it.
   ===================================================================== */
const education = [
    {
        degree: "[Degree Name]",
        institution: "[University / College]",
        duration: "[Year – Year]",
        coursework: [
            "Data Structures",
            "Database Management",
            "Data Engineering",
            "Statistics"
        ]
    }
];


/* =====================================================================
   7. CERTIFICATIONS
   =====================================================================
   status is typically one of: "Planned", "In Progress", or "Completed"
   credentialId / credentialUrl can be left as empty strings ("") if
   you don't have them yet — they'll simply be hidden on the card.

   TO ADD A CERTIFICATION: copy one { ... } entry and edit it.
   ===================================================================== */
const certifications = [
    {
        name: "Microsoft Certified: Fabric Data Engineer Associate",
        issuer: "Microsoft",
        examCode: "DP-700",
        status: "[Planned / In Progress / Completed]",
        date: "[Date]",
        credentialId: "",
        credentialUrl: ""
    },
    {
        name: "[Azure Certification Name]",
        issuer: "Microsoft Azure",
        examCode: "",
        status: "[Status]",
        date: "[Date]",
        credentialId: "",
        credentialUrl: ""
    }

    // TO ADD ANOTHER CERTIFICATION, copy a block above and edit it:
    // {
    //     name: "...",
    //     issuer: "...",
    //     examCode: "...",
    //     status: "...",
    //     date: "...",
    //     credentialId: "",
    //     credentialUrl: ""
    // }
];


/* =====================================================================
   8. ACHIEVEMENTS / HIGHLIGHTS
   =====================================================================
   Short one-line highlights. If this list is left empty ( [] ), the
   whole "Achievements" section is automatically hidden — you don't
   need to edit the HTML to remove it.
   ===================================================================== */
const achievements = [
    "[Add a career highlight, award, or notable achievement]"
];
