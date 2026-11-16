export type MentorId = "pavan" | "sai" | "manjith" | "hitesh" | "piyush";

export type Mentor = {
  id: MentorId;
  name: string;
  avatar: string;
  role: string;
  greeting: string;
  colorBadge?: string;
  badges?: string[];
};

export const mentors: Record<string, Mentor> = {
  pavan: {
    id: "pavan",
    name: "Pavan Kumar Kunukuntla",
    avatar: "/pavan.jpg",
    role:
      "Founder at WTFear Agency & Computer Science Engineer. Architecting enterprise autonomous AI agents, sub-second voice pipelines, and modern full-stack platforms.",
    greeting: "Hello! I'm Pavan. How can I help you architect your AI and SaaS systems today?",
    colorBadge: "#eab308",
    badges: ["Founder", "AI Architect", "Full-Stack", "RGUKT"],
  },
  sai: {
    id: "sai",
    name: "Sai Manjith",
    avatar: "https://ui-avatars.com/api/?name=Sai+Manjith&background=6366f1&color=fff&size=256&bold=true",
    role:
      "Co-Founder & Platform Systems Engineer. Specializing in high-throughput backend infrastructure, distributed platform systems, and scalable cloud architectures.",
    greeting: "Hey there! I'm Sai Manjith. What technical challenge or backend pipeline are we solving today?",
    colorBadge: "#a855f7",
    badges: ["Co-Founder", "Platform Engineer", "Systems", "Cloud"],
  },
  manjith: {
    id: "manjith",
    name: "Sai Manjith Paripelli",
    avatar: "https://ui-avatars.com/api/?name=Sai+Manjith+Paripelli&background=06b6d4&color=fff&size=256&bold=true",
    role:
      "Technical Strategist & Product Systems Lead. Guiding enterprise technological roadmaps, platform engineering, and high-performance system designs.",
    greeting: "Greetings! I'm Sai Manjith Paripelli. Let's discuss technical strategy, systems architecture, and engineering execution.",
    colorBadge: "#06b6d4",
    badges: ["Tech Strategist", "Product Lead", "Architecture", "Consultant"],
  },
  hitesh: {
    id: "pavan",
    name: "Pavan Kumar Kunukuntla",
    avatar: "/pavan.jpg",
    role:
      "Founder at WTFear Agency & Computer Science Engineer. Architecting enterprise autonomous AI agents, sub-second voice pipelines, and modern full-stack platforms.",
    greeting: "Hello! I'm Pavan. How can I help you architect your AI and SaaS systems today?",
    colorBadge: "#eab308",
    badges: ["Founder", "AI Architect", "Full-Stack", "RGUKT"],
  },
  piyush: {
    id: "sai",
    name: "Sai Manjith",
    avatar: "https://ui-avatars.com/api/?name=Sai+Manjith&background=6366f1&color=fff&size=256&bold=true",
    role:
      "Co-Founder & Platform Systems Engineer. Specializing in high-throughput backend infrastructure, distributed platform systems, and scalable cloud architectures.",
    greeting: "Hey there! I'm Sai Manjith. What technical challenge or backend pipeline are we solving today?",
    colorBadge: "#a855f7",
    badges: ["Co-Founder", "Platform Engineer", "Systems", "Cloud"],
  },
};
