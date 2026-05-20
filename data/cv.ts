export type CVExperience = {
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
};

export type CVEducation = {
  institution: string;
  degree: string;
  location?: string;
  start: string;
  end: string;
  notes?: string;
};

export type CVSkillGroup = {
  group: string;
  items: string[];
};

export type CV = {
  summary?: string;
  location: string;
  email: string;
  updated: string;
  experience: CVExperience[];
  education: CVEducation[];
  skills: CVSkillGroup[];
};

export const cv: CV = {
  summary:
    "Designer and developer based in Zurich, working at the seam between editorial design and quiet, usable software.",
  location: "Zurich, CH",
  email: "andri.vogt@gmail.com",
  updated: "April 2026",
  experience: [
    {
      company: "INNOFORCE Est.",
      role: "Product Owner",
      location: "Zurich, CH",
      start: "2023",
      end: "present",
      bullets: [
        "[Replace with a concrete accomplishment — scope, impact, scale.]",
        "[Replace with a concrete accomplishment — scope, impact, scale.]",
        "[Replace with a concrete accomplishment — scope, impact, scale.]",
      ],
    },
    {
      company: "INNOFORCE Est.",
      role: "Application Specialist",
      location: "[City]",
      start: "2021",
      end: "2023",
      bullets: [
        "[Replace with a concrete accomplishment.]",
        "[Replace with a concrete accomplishment.]",
      ],
    },
  ],
  education: [
    {
      institution: "Ostschweizer Fachhochschule",
      degree: "BSc. Digital Design",
      location: "[City]",
      start: "2018",
      end: "2022",
      notes: "[Optional — thesis, honors, exchange.]",
    },
      {
      institution: "Liechtensteinisches Gymnasium",
      degree: "Matura",
      start: "2018",
      end: "2022",
  },
  ],
  skills: [
    {
      group: "design",
      items: ["Figma", "[type systems]", "[editorial layout]"],
    },
    {
      group: "engineering",
      items: ["[TypeScript]", "[React]", "[Next.js]", "[Node.js]"],
    },
    {
      group: "languages",
      items: ["German — native", "English — fluent"],
    },
  ],
};
