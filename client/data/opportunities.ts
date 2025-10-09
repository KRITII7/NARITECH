import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  CalendarDays,
  Cloud,
  Cpu,
  FileCode,
  GraduationCap,
  Lightbulb,
  MapPin,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

export type OpportunityType = "hackathon" | "internship" | "fellowship";

export interface StatTile {
  icon: LucideIcon;
  value: string;
  label: string;
}

export interface OpportunityCategory {
  icon: LucideIcon;
  name: string;
  description: string;
  count: string;
}

export interface Opportunity {
  id: string;
  title: string;
  company: string;
  type: OpportunityType;
  description: string;
  domain: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  location: string;
  deadline: string;
  tags: string[];
}

export const stats: StatTile[] = [
  { icon: Briefcase, value: "500+", label: "Total Opportunities" },
  { icon: Users, value: "10,000+", label: "Women Connected" },
  { icon: GraduationCap, value: "85%", label: "Success Rate" },
  { icon: TrendingUp, value: "50+", label: "Growing Daily" },
];

export const categories: OpportunityCategory[] = [
  {
    icon: Lightbulb,
    name: "Hackathons",
    description:
      "Compete, innovate, and build solutions in 24-72 hour coding challenges",
    count: "200+ opportunities",
  },
  {
    icon: Briefcase,
    name: "Internships",
    description:
      "Gain hands-on experience at leading tech companies worldwide",
    count: "150+ opportunities",
  },
  {
    icon: GraduationCap,
    name: "Fellowships",
    description:
      "Advanced programs for research, leadership, and skill development",
    count: "150+ opportunities",
  },
];

export const opportunities: Opportunity[] = [
  {
    id: "op-1",
    title: "AI/ML Research Hackathon",
    company: "Google",
    type: "hackathon",
    description:
      "Tackle real-world challenges in responsible AI and create scalable machine learning solutions with Google mentors.",
    domain: "AI & Machine Learning",
    level: "Intermediate",
    location: "Remote",
    deadline: "March 15, 2025",
    tags: ["48-hour sprint", "Team of 4"],
  },
  {
    id: "op-2",
    title: "Software Engineering Internship",
    company: "Microsoft",
    type: "internship",
    description:
      "Collaborate with cross-functional teams to ship production-ready features for millions of global users.",
    domain: "Web Development",
    level: "Beginner",
    location: "United States",
    deadline: "February 28, 2025",
    tags: ["Paid", "Hybrid"],
  },
  {
    id: "op-3",
    title: "Data Science Fellowship",
    company: "Meta",
    type: "fellowship",
    description:
      "Advance your analytics toolkit with mentorship from Meta researchers across cutting-edge social impact initiatives.",
    domain: "Data Science",
    level: "Advanced",
    location: "Global",
    deadline: "March 20, 2025",
    tags: ["Mentorship", "12 weeks"],
  },
  {
    id: "op-4",
    title: "Cybersecurity Challenge",
    company: "IBM",
    type: "hackathon",
    description:
      "Defend simulated enterprise systems against live attacks and propose resilient architectures.",
    domain: "Cybersecurity",
    level: "Intermediate",
    location: "Global",
    deadline: "March 10, 2025",
    tags: ["Virtual", "Capture the Flag"],
  },
  {
    id: "op-5",
    title: "Cloud Computing Fellowship",
    company: "Amazon Web Services",
    type: "fellowship",
    description:
      "Design scalable multi-cloud infrastructure and deploy automation pipelines with AWS instructors.",
    domain: "Cloud Computing",
    level: "Advanced",
    location: "Remote",
    deadline: "April 15, 2025",
    tags: ["Certification support", "Stipend"],
  },
  {
    id: "op-6",
    title: "Data Analytics Internship",
    company: "Netflix",
    type: "internship",
    description:
      "Build experimentation frameworks and deliver viewer insights that inform the next generation of storytelling.",
    domain: "Data Science",
    level: "Intermediate",
    location: "United States",
    deadline: "February 20, 2025",
    tags: ["Paid", "On-site"],
  },
  {
    id: "op-7",
    title: "Mobile Development Internship",
    company: "Apple",
    type: "internship",
    description:
      "Prototype delightful mobile experiences and optimize performance across the iOS ecosystem.",
    domain: "Mobile Development",
    level: "Intermediate",
    location: "United States",
    deadline: "March 10, 2025",
    tags: ["Swift", "In-person"],
  },
  {
    id: "op-8",
    title: "Security Research Fellowship",
    company: "Stripe",
    type: "fellowship",
    description:
      "Investigate emerging threats across global financial ecosystems and define new security protocols.",
    domain: "Fintech Security",
    level: "Advanced",
    location: "Remote",
    deadline: "April 5, 2025",
    tags: ["Mentorship", "Global team"],
  },
  {
    id: "op-9",
    title: "Full Stack Web Development Bootcamp",
    company: "Women Who Code",
    type: "hackathon",
    description:
      "Accelerated bootcamp for building production-grade apps with women-led engineering mentorship.",
    domain: "Full Stack",
    level: "Beginner",
    location: "Remote",
    deadline: "March 30, 2025",
    tags: ["Scholarship available", "8 weeks"],
  },
];

export const filters = [
  {
    label: "Opportunity Type",
    value: "All types",
  },
  {
    label: "Domain",
    value: "All domains",
  },
  {
    label: "Experience Level",
    value: "All levels",
  },
  {
    label: "Location",
    value: "Any location",
  },
];

export const heroHighlights = [
  "500+ Opportunities",
  "Updated Daily",
  "Remote & On-Site",
];

export const heroBadges = [
  {
    icon: Sparkles,
    title: "Discover Your Next Tech Opportunity",
    subtitle:
      "Connect with hackathons, internships, and fellowships designed to empower women in technology. Your next breakthrough starts here.",
  },
];
