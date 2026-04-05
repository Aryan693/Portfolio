import { Bot, Database, Workflow, Rocket, Briefcase, Wrench, Mail, Network, Code, BrainCircuit, Award } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Aryan Nitin Gulhane",
  title: "Applied AI & Data Engineer",
  tagline: "Building scalable LLM systems, data pipelines, and backend infrastructure for real-world applications.",
  email: "aryangulhane693@gmail.com",
  phone: "+91 8779793253",
  location: "Thane, Maharashtra",
  linkedin: "https://www.linkedin.com/in/aryan-nitin-gulhane-16a279226/",
  github: "https://github.com/Aryan693",
  resumeUrl: "/resume",
  resumePdfUrl: "/Aryan_Nitin_Gulhane_IIT_Dh-CV.pdf"
};
export const ROLE_FOCUS = [
  'SDE',
  'AI-ML',
  'Data Engineer',
  'Data Scientist'
];
export const SERVICES = [
  {
    icon: <Bot className="w-8 h-8 text-accent" />,
    title: 'Applied AI / LLM Systems',
    description: 'Production-grade RAG pipelines, LlamaIndex, FAISS, HuggingFace — solving real enterprise use-cases with GenAI.',
  },
  {
    icon: <Database className="w-8 h-8 text-accent" />,
    title: 'Data Engineering',
    description: 'Scalable data pipelines, Medallion architecture, Microsoft Fabric — handling 100M–1B+ records.',
  },
  {
    icon: <Workflow className="w-8 h-8 text-accent" />,
    title: 'Backend & Systems Engineering',
    description: 'FastAPI services, workflow automation via MCP, distributed systems, and production ML pipelines.',
  }
];

export const HIGHLIGHTS = [
  {
    title: 'Workflow Automation Bot + Fabric Data Pipelines',
    company: 'MAQ Software',
    tags: ['MCP Server', 'Microsoft Fabric', 'Python', 'Medallion Architecture', 'Teams API'],
    description: 'Automated stand-up workflows for internal teams; built enterprise-scale data ingestion framework handling millions of records.',
    link: '/experience'
  },
  {
    title: 'RAG-Based Legal Compliance System',
    company: 'Dvara Holdings',
    tags: ['RAG', 'FAISS', 'LlamaIndex', 'HuggingFace', 'Python'],
    description: 'Reduced legal team effort by ~60% through automated contract clause validation using retrieval-augmented generation.',
    link: '/projects'
  }
];

export const EDUCATION = [
  {
    institution: 'Indian Institute Of Technology Dharwad',
    degree: 'Bachelor of Technology, Computer Science',
    year: '2021 – 2025',
    score: 'CGPA: 8.66',
  },
  {
    institution: 'Shubhamraje Junior College',
    degree: 'Higher Secondary Certificate (HSC)',
    year: '2021',
    score: '96.5%',
  },
  {
    institution: 'Rainbow International School',
    degree: 'Central Board of Secondary Education (SSC)',
    year: '2019',
    score: '96%',
  }
];

export const EXPLORE_STATS = [
  { emoji: <Rocket className="w-6 h-6" />, count: '5+', label: 'Projects', href: '/projects' },
  { emoji: <Briefcase className="w-6 h-6" />, count: '5', label: 'Experience', href: '/experience' },
  { emoji: <Wrench className="w-6 h-6" />, count: '25+', label: 'Skills', href: '/skills' },
  { emoji: <Mail className="w-6 h-6" />, count: "Let's talk", label: 'Contact', href: '/contact', textOnly: true },
];

export const PROJECTS = [
  {
    title: 'Workflow Automation Bot + Fabric Data Pipelines',
    description: 'Automated stand-up workflows for internal teams via MCP Server and Teams API. Built an enterprise-scale data ingestion framework on Microsoft Fabric passing millions of records using Medallion Architecture.',
    tags: ['MCP Server', 'Microsoft Fabric', 'Python', 'Medallion Architecture', 'Teams API'],
    github: '#',
    link: '/experience',
    featured: true,
  },
  {
    title: 'RAG-Based Legal Compliance System',
    description: 'Implemented document chunking and a semantic retrieval pipeline to process 1000+ contract clauses and generate automated compliance reports, reducing legal team effort by ~60%.',
    tags: ['RAG', 'FAISS', 'LlamaIndex', 'HuggingFace', 'Python'],
    github: '#',
    link: '#',
    featured: true,
  },
  {
    title: 'LawGPT Legal Chatbot',
    description: 'A domain-specific legal chatbot trained on legal documents from 10+ EU countries, including regulations and constitutional guidelines, to enable automated legal information retrieval.',
    tags: ['GenAI', 'LLM', 'Python', 'ML Pipeline'],
    github: '#',
  },
  {
    title: 'Movie Rating Platform',
    description: 'Designed a fully normalized relational database layout to support rating aggregation, complex relational queries, and user reviews. Developed local deployment strategy.',
    tags: ['SQL', 'Relational DB Design', 'Data Engineering'],
    github: '#',
  },
  {
    title: 'Inter IIT Sports Schedule Management Website',
    description: 'A dedicated portal for tracking live scores, leaderboards, and scheduling for Inter IIT Sports. Implemented real-time tournament match score updates using PHP and SQL.',
    tags: ['MySQL', 'PHP', 'Real-time Analytics'],
    github: '#',
  }
];

export const EXPERIENCES = [
  {
    role: 'Software Engineer',
    company: 'MAQ Software',
    date: '06/2025 – Present',
    location: 'Noida, India',
    description: [
      'Engineered a workflow automation bot system using the MCP server and Microsoft Teams APIs to collect daily employee stand-up updates.',
      'Orchestrated backend services to aggregate responses, generate automated progress summaries, and deliver reports to managers via email.',
      'Architected a metadata-driven data ingestion framework on Microsoft Fabric to ingest large-scale datasets from multiple data sources into Bronze layer.',
      'Developed scalable data pipelines supporting full and incremental loads, handling 100M+ to billions of records.',
      'Established Medallion architecture (Bronze → Silver → Gold) to transform raw data into analytics-ready datasets.'
    ],
  },
  {
    role: 'AI Engineer Intern',
    company: 'Dvara Holdings',
    date: '01/2025 – 04/2025',
    location: 'Dharwad, India',
    description: [
      'Automated manual contract compliance review by developing a RAG-based LLM system validating legal clauses against guidelines using FAISS and HuggingFace.',
      'Implemented document chunking and semantic retrieval pipeline processing 1000+ contract clauses.',
      'Integrated LlamaIndex reranking to improve retrieval relevance and accuracy for compliance analysis (reducing effort by ~60%).'
    ],
  },
  {
    role: 'AI Engineer Intern',
    company: 'Flomoney',
    date: '05/2024 – 08/2024',
    location: 'Singapore',
    description: [
      'Developed LawGPT, a domain-specific legal chatbot trained on EU legal documents enabling automated query answering.',
      'Streamlined an automated Machine Learning pipeline for data ingestion, model training, evaluation, and deployment.',
      'Enhanced in-house chatbot capabilities by developing backend API endpoints and integrating image generation features.'
    ],
  },
  {
    role: 'Adversarial ML Research',
    company: 'IIT Dharwad',
    date: '08/2023 – 04/2024',
    location: 'Dharwad, India',
    description: [
      'Investigated backdoor poisoning attacks in fake speech detection models by exploiting frequency-domain perturbations.',
      'Developed a stealthy trigger generation mechanism to bypass existing detection systems with a 93% attack success rate.',
      'Deployed remote training workflows using GitHub-based version control and server-based model execution.'
    ],
  },
  {
    role: 'Machine Learning Research Intern',
    company: 'IIT Bombay',
    date: '05/2023 – 08/2023',
    location: 'Mumbai, India',
    description: [
      'Applied machine learning to a 200K+ patient dataset to predict ICU length of stay, achieving 90% accuracy.',
      'Applied One-Class SVM anomaly detection to identify and remove inconsistent medical records prior to model training.',
      'Trained predictive models via Scikit-learn and PyTorch.'
    ],
  }
];

export const SKILL_CATEGORIES = [
  {
    title: 'Data Engineering & Analytics',
    icon: <Network className="w-5 h-5" />,
    skills: ['Pandas', 'NumPy', 'SQL', 'Microsoft Fabric', 'PySpark', 'Data Pipelines', 'Machine Learning']
  },
  {
    title: 'Languages',
    icon: <Code className="w-5 h-5" />,
    skills: ['Python', 'C++', 'JavaScript', 'Bash']
  },
  {
    title: 'Machine Learning / AI',
    icon: <BrainCircuit className="w-5 h-5" />,
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'HuggingFace', 'LlamaIndex', 'FAISS']
  },
  {
    title: 'Database',
    icon: <Database className="w-5 h-5" />,
    skills: ['MySQL', 'MongoDB', 'Redis', 'Neo4j']
  },
  {
    title: 'Certifications',
    icon: <Award className="w-5 h-5" />,
    skills: ['Microsoft Certified: Fabric Data Engineer (DP-700)', 'Microsoft Certified: Fabric Analytics Engineer (DP-600)']
  }
];

export const NAV_LINKS = [
  { name: 'About', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Skills', href: '/skills' },
  { name: 'Contact', href: '/contact' },
];
