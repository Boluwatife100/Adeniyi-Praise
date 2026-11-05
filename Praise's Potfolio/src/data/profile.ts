import photo from "../assets/profile.png";
import banner from "../assets/banner.png";

import {
  Users,
  FolderOpen,
  Headset,
  CalendarCheck,
  Search,
  MessagesSquare,
  Heart,
  Workflow,
  TrendingUp,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export const profile = {
  name: "Adeniyi Praise Adesewa",
  initials: "AP",
  photo: photo,
  title: "HR & Administrative Support",
  roles: [
    "HR & Administrative Support Professional",
    "Virtual Assistant",
    "Public Administration Graduate",
  ],
  location: "Nigeria",
  locationShort: "Ibadan, Nigeria",
  email: "adeniyipraise965@gmail.com",
  linkedin: "https://linkedin.com/in/praise-adeniyi-3ba91723",
  availability:
    "Open to full-time opportunities, graduate trainee programmes, internships and relevant professional engagements. Available for remote, hybrid and onsite work (West Africa Time, GMT+1).",
  headline:
    "I support organisations with people operations, recruitment coordination and dependable administrative support.",
  intro:
    "Public Administration graduate with hands-on experience in human resources, administrative coordination and virtual assistance.",
  bio: [
    "I am a Public Administration graduate of the University of Ilorin (Second Class Upper) with practical experience in human resources, administrative coordination and virtual assistance.",
    "My experience spans recruitment support, candidate coordination, employee documentation, scheduling, stakeholder communication, research and event coordination.",
    "I am passionate about people management, organisational effectiveness and using technology to improve how organisations work. I am continuously developing my expertise in HR and exploring where HR, artificial intelligence and people analytics meet.",
  ],
  closing:
    "I believe effective organisations are built through people, purposeful systems and continuous improvement.",
  stats: [
    { value: "2:1", label: "B.Sc. Public Administration" },
    { value: "2", label: "Professional roles" },
    { value: "3", label: "Certificates & programmes completed" },
    { value: "WAT", label: "Time zone (GMT+1)" },
  ],
};

export type Service = { title: string; description: string; icon: LucideIcon };
export const services: Service[] = [
  {
    title: "Recruitment Coordination",
    description:
      "Candidate sourcing and screening support, interview scheduling and clear candidate communication.",
    icon: Users,
  },
  {
    title: "HR Administration & Records",
    description:
      "Organised employee records, digital documentation and day-to-day HR administrative processes.",
    icon: FolderOpen,
  },
  {
    title: "Virtual Assistance",
    description:
      "Backend administrative support, correspondence and general project coordination.",
    icon: Headset,
  },
  {
    title: "Scheduling & Calendar Management",
    description: "Diaries, meetings and deadlines managed so nothing slips.",
    icon: CalendarCheck,
  },
  {
    title: "Research & Information Management",
    description: "Research, information gathering and reporting support.",
    icon: Search,
  },
  {
    title: "Events & Stakeholder Communication",
    description:
      "Virtual event coordination and communication with volunteers and stakeholders.",
    icon: MessagesSquare,
  },
];

export const skillGroups = [
  {
    title: "Microsoft Office",
    items: ["Word", "Excel", "PowerPoint", "Outlook"],
  },
  { title: "Google Workspace", items: ["Docs", "Sheets", "Drive", "Calendar"] },
  {
    title: "Communication & Collaboration",
    items: [
      "Microsoft Teams",
      "WhatsApp Business",
      "Email management",
      "Virtual meeting coordination",
    ],
  },
  { title: "Design & Content", items: ["Canva", "CapCut"] },
  {
    title: "HR & Administrative Tools",
    items: [
      "Applicant Tracking Systems (ATS)",
      "HR information systems (HRIS)",
      "Digital employee documentation",
      "Recruitment coordination",
      "Scheduling and records management",
    ],
  },
  { title: "Currently Learning", items: ["BambooHR", "Zoho People", "SAP HR"] },
];

export const competencies = [
  "Recruitment and candidate coordination",
  "HR administration",
  "Employee records management",
  "Stakeholder relationship management",
  "Written and verbal communication",
  "Research and information management",
  "Scheduling and calendar management",
  "Event coordination",
  "Project support",
  "Organisation and time management",
  "Problem-solving",
  "Attention to detail",
  "Adaptability and continuous learning",
];

export const education: {
  degree: string;
  school: string;
  period?: string;
  note: string;
}[] = [
  {
    degree: "B.Sc. Public Administration",
    school: "University of Ilorin",
    note: "Second Class Upper (2:1).",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  year?: string;
  inProgress?: boolean;
};
export const certifications: Certification[] = [
  { name: "ALX Virtual Assistant Programme", issuer: "ALX", year: "2024" },
  {
    name: "CIPDM Certificate",
    issuer: "Chartered Institute of Public Diplomacy and Management",
  },
  { name: "IBDFM Certificate", issuer: "IBDFM" },
  {
    name: "CIPM Professional Examinations",
    issuer: "Chartered Institute of Personnel Management of Nigeria",
    inProgress: true,
  },
];

export type Job = {
  role: string;
  company: string;
  period?: string;
  points: string[];
};
export const experience: Job[] = [
  {
    role: "HR Officer",
    company: "Balm City",
    period: "March 2025 – August 2025",
    points: [
      "Supported recruitment and talent acquisition, including candidate sourcing and screening.",
      "Coordinated candidate communication and interview scheduling.",
      "Maintained and organised employee records and documentation.",
      "Supported HR administrative processes.",
      "Assisted with reporting and information management.",
      "Used digital tools for administrative and HR operations.",
    ],
  },
  {
    role: "Virtual Assistant",
    company: "Teacher Chike Educational Foundation",
    points: [
      "Provided backend administrative support and assisted with communication and correspondence.",
      "Supported scheduling and coordination.",
      "Conducted research and information gathering.",
      "Assisted with virtual event coordination.",
      "Supported volunteer and stakeholder communication.",
      "Contributed to general project and administrative coordination.",
    ],
  },
];

export type Project = {
  title: string;
  status: string;
  description: string;
  focus: string[];
  approach: string;
  tags: string[];
};
export const projects: Project[] = [
  {
    title: "People Intelligence Project",
    status: "Research proposal stage",
    description:
      "An emerging research initiative on how people management, organisational effectiveness, technology and data-driven HR practices connect. Research topic: Human Resources and Artificial Intelligence.",
    focus: [
      "The adoption of artificial intelligence in HR.",
      "How AI is transforming recruitment and talent acquisition.",
      "The benefits and challenges of AI adoption in HR.",
      "HR professionals’ perceptions of artificial intelligence.",
      "The implications of AI for the future of human resource management.",
    ],
    approach:
      "Proposed questionnaire-based research with HR professionals in private-sector organisations.",
    tags: ["HR & AI", "Research", "People Analytics"],
  },
];

export type Value = { title: string; description: string; icon: LucideIcon };
export const values: Value[] = [
  {
    title: "People First",
    description: "Effective organisations are built through people.",
    icon: Heart,
  },
  {
    title: "Purposeful Systems",
    description: "Clear, well-organised processes that help work run smoothly.",
    icon: Workflow,
  },
  {
    title: "Continuous Improvement",
    description:
      "Committed to learning, professional development and better ways of working.",
    icon: TrendingUp,
  },
  {
    title: "Reliability & Detail",
    description:
      "Careful, organised work with strong attention to detail and time management.",
    icon: ShieldCheck,
  },
];

export const careerObjective =
  "To build a rewarding career in Human Resources and organisational management, gaining exposure to strategic people operations, talent management, organisational development and HR technology while contributing to the growth and effectiveness of forward-thinking organisations.";

export const careerInterests = [
  "Human Resources Management",
  "HR Operations and Administration",
  "Recruitment and Talent Acquisition",
  "Learning and Development",
  "Employee Experience and Engagement",
  "People Analytics and HR Technology",
  "Artificial Intelligence in Human Resources",
  "Virtual Assistance",
  "Project and Administrative Coordination",
  "Organisational Development",
];

export const bannerImage = banner;
