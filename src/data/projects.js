export const projects = [
  {
    id: "collaborative-code-editor",
    title: "Collaborative Code Editor",
    shortDescription:
      "A multi-user coding workspace with synchronized editing, controlled execution, and built-in collaboration flows.",
    longDescription:
      "Collaborative Code Editor is a real-time platform designed for pair programming, interview practice, and group problem solving. It combines synchronized code editing, room-based collaboration, containerized execution, and live communication so developers can move from idea to shared output without leaving the workspace.",
    challenge:
      "The main challenge was keeping the editing experience fast and reliable while supporting multiple users, host controls, and safe code execution.",
    outcome:
      "The result is a polished full-stack experience that balances collaboration, execution safety, and developer ergonomics for real-world team workflows.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Docker",
      "Tailwind CSS",
    ],
    features: [
      "Real-time collaborative editing with room-based sync",
      "Host-managed session controls and participant flow",
      "Containerized execution pipeline for safer code runs",
      "Integrated chat and coordination experience",
    ],
    githubUrl:
      "https://github.com/vaibhavsayam642/Collaborative_Code_Editor.git",
    liveUrl: "#",
    images: ["/collabe 1.png", "/collabe 2.png"],
    accent: "from-cyan-500/25 via-sky-500/15 to-blue-500/25",
  },
  {
    id: "alumni-management-system",
    title: "Alumni Management System",
    shortDescription:
      "A structured platform for alumni engagement, profile management, and communication across institutions.",
    longDescription:
      "Alumni Management System centralizes alumni records, search workflows, and communication channels into one interface. The project focuses on making institutional data easier to manage while providing a smoother way to reconnect graduates with campus initiatives, updates, and networking opportunities.",
    challenge:
      "The core challenge was organizing large amounts of user and institutional data while keeping the interface approachable for day-to-day admin use.",
    outcome:
      "The final product improves data visibility, reduces manual overhead, and makes alumni outreach more consistent and scalable.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JavaScript",
      "Tailwind CSS",
    ],
    features: [
      "Role-aware dashboard for administrative workflows",
      "Searchable alumni directory with filtering support",
      "Profile and communication management tools",
      "Clear information architecture for operational efficiency",
    ],
    githubUrl: "https://github.com/vaibhavsayam642/Alumni_Management_System.git",
    liveUrl: "#",
    images: ["/Alumni 1.png", "/Alumni 2.png"],
    accent: "from-fuchsia-500/20 via-violet-500/10 to-pink-500/20",
  },
  {
    id: "grocery-management-system",
    title: "Grocery Management System",
    shortDescription:
      "A store operations app for inventory tracking, billing, and reporting in day-to-day retail environments.",
    longDescription:
      "Grocery Management System streamlines inventory control, billing, and reporting for small retail operations. It focuses on clarity and speed, helping operators monitor stock levels, process transactions, and review essential business metrics from a single workflow.",
    challenge:
      "The key challenge was simplifying repetitive store operations into a clean interface that supports both speed and accuracy.",
    outcome:
      "The project delivers a more organized operating flow for inventory and billing, making routine retail tasks easier to manage.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JavaScript",
      "Tailwind CSS",
    ],
    features: [
      "Inventory visibility and stock tracking flows",
      "Billing support for quicker store transactions",
      "Reporting tools for operational monitoring",
      "Simple, practical experience for retail management",
    ],
    githubUrl: "https://github.com/vaibhavsayam642/GrosseerySystem.git",
    liveUrl: "#",
    images: ["/grocery 1.png", "/grocery 2.png"],
    accent: "from-emerald-500/20 via-teal-500/10 to-lime-500/20",
  },
];

export function getProjectById(id) {
  return projects.find((project) => project.id === id);
}
