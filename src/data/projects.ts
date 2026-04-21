export interface Project {
  id: string;
  title: string;
  category: string;
  problem?: string;
  solution?: string;
  impact?: string;
  description?: string;
  image: string;
  tags: string[];
  links: {
    demo: string;
    cta: string;
  };
  color: string;
}

export const projects: Project[] = [
  {
    id: "vims-inspector",
    title: "Vehicle Inspection System (Inspector Platform)",
    category: "Vehicle Inspection & Reporting System",
    problem: "Vehicle inspections were vulnerable to fraud, where inspections were conducted without the vehicle being physically present. This led to unqualified vehicles being certified, increasing the risk of road accidents.",
    solution: "Developed a system that enforces inspection authenticity by integrating geofencing and real-time validation. Inspections can only be performed within designated inspection areas, and any attempt outside the defined zone triggers alerts to the admin system. Additionally, implemented camera capture functionality during inspections to verify the physical presence and condition of vehicles.",
    impact: "Significantly reduced fraudulent inspections, improved transparency, and enhanced road safety by ensuring only properly inspected vehicles are certified.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1200&h=800",
    tags: ["Geofencing", "Real-time Alerts", "Camera Capture", "Reporting"],
    links: { demo: "https://vims-five.vercel.app/#/dashboard", cta: "View Inspector App" },
    color: "blue"
  },
  {
    id: "vims-admin",
    title: "Vehicle Inspection Admin Dashboard",
    category: "Vehicle Inspection & Reporting System",
    problem: "Lack of monitoring tools made it difficult to detect fraudulent inspections and oversee inspection activities effectively.",
    solution: "Built an admin dashboard that provides full visibility into inspection activities, including alerts triggered by geofencing violations and access to inspection data and reports.",
    impact: "Enabled authorities to detect and prevent fraud, enforce compliance, and maintain higher inspection standards.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200&h=800",
    tags: ["Real-time Monitoring", "Alerts", "Data Management", "Analytics"],
    links: { demo: "https://vims-admin-portal.vercel.app/", cta: "View Admin Portal" },
    color: "purple"
  },
  {
    id: "egirs",
    title: "E-Government Index Reporting System",
    category: "Regional Digital Presence",
    description: "A platform that evaluates and scores regional digital presence by collecting survey data and generating insights through interactive dashboards and reports.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200&h=800",
    tags: ["Next.js", "React", "Tailwind CSS", "Data Viz"],
    links: { demo: "https://e-girs.vercel.app/dashboard", cta: "View System" },
    color: "emerald"
  },
];
