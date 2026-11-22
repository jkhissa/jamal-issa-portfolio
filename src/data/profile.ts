// Profile content: used by the home page and /profile.

export interface Job {
  date: string;
  title: string;
  companyName: string;
  location: string;
  bullets: string[];
}

export const headline = 'Senior Technical Business Analyst';
export const employer = 'Condatis';

export const jobs: Job[] = [
  {
    date: 'Mar 2025 – Present',
    title: 'Senior Technical Business Analyst',
    companyName: 'Condatis',
    location: 'Edinburgh, Scotland, United Kingdom',
    bullets: [
      'Define authentication and user journeys for Azure AD B2C solutions built on custom policies (IEF), including MFA, social and enterprise federation, account linking and progressive profiling.',
      'Specify integrations between B2C and downstream applications via orchestration services: token flows, claims mapping and API contracts over OAuth 2.0 / OIDC and REST.',
      'Lead requirements for a large government-sector customer identity platform on Azure AD B2C.',
      'Analyse and specify Entra ID Governance (access packages, joiner/mover/leaver workflows) and Entra Verified ID solutions, and support architects evaluating Entra External ID against existing B2C solutions.',
      'Translate GDPR and ISO 27001 requirements into identity design controls such as claims minimisation, consent, retention and audit logging.',
      'Run discovery and design workshops, acting as the link between clients, architects and engineers through build, UAT and go-live.',
    ],
  },
  {
    date: 'May 2023 – Mar 2025',
    title: 'Business Analyst',
    companyName: 'Condatis',
    location: 'Edinburgh, Scotland, United Kingdom',
    bullets: [
      'Joined Condatis\' identity practice, moving from core banking into customer identity (Azure AD B2C) projects.',
      'Elicited and documented requirements as user stories, process flows and acceptance criteria for client identity solutions.',
      'Contributed to proposals and business cases, evaluating product features and solution options for clients.',
    ],
  },
  {
    date: 'Jul 2022 – Apr 2023',
    title: 'Senior Business Analyst',
    companyName: 'Avaloq',
    location: 'Edinburgh, Scotland, United Kingdom',
    bullets: [
      'Led defect and root-cause analysis for credit and lending functionality, driving resolution with development teams.',
      'Ran customer workshops and requirements sessions, translating complex banking requirements into deliverable specifications.',
      'Provided effort estimates for features and fixes to support sprint planning.',
      'Mentored junior analysts and external consultants.',
    ],
  },
  {
    date: 'Jan 2020 – Jul 2022',
    title: 'Business Analyst',
    companyName: 'Avaloq',
    location: 'Edinburgh, United Kingdom',
    bullets: [
      'Delivered requirements and specifications for lending and credit products on the Avaloq core banking platform for global banking clients.',
      'Analysed and resolved third-level product issues with development and QA teams.',
      'Earned the Avaloq Certified Customisation Professional (ACCP) certification.',
    ],
  },
  {
    date: 'Dec 2018 – Jan 2020',
    title: 'Technical Business Analyst',
    companyName: 'Avaloq',
    location: 'Edinburgh, United Kingdom',
    bullets: [
      'Joined Avaloq\'s lending and credit team, delivering requirements and specification design for new credit and lending products and providing third-level support to a global client base.',
    ],
  },
  {
    date: 'Nov 2017 – Sep 2018',
    title: 'Freelance IT & Business Support Consultant',
    companyName: 'Self-employed',
    location: 'Remote',
    bullets: [
      'Provided remote IT and administrative support, including continued support of Social Care Alba\'s care management systems and staff after moving from an in-house role.',
    ],
  },
  {
    date: 'Jun 2014 – Oct 2017',
    title: 'IT Coordinator / Business Analyst',
    companyName: 'Social Care Alba',
    location: 'Edinburgh, United Kingdom',
    bullets: [
      'Managed the deployment and development of care management IT systems in partnership with Edinburgh Napier University.',
      'Coordinated a team of five developers, including recruitment, inductions and supervision.',
      'Maintained IT systems and support for 50+ local and remote staff, aligned with ISO 27001.',
      'Produced reporting and analysis to redesign processes and resolve operational problems.',
    ],
  },
  {
    date: 'Jan 2014 – Apr 2014',
    title: 'Student Analyst',
    companyName: 'Edinburgh Napier University',
    location: 'Edinburgh, United Kingdom',
    bullets: [
      'Part of a consultancy team on ALISS (A Local Information System for Scotland), running requirements interviews and recommending improvements to data gathering and analysis.',
    ],
  },
  {
    date: 'Jun 2013 – Sep 2013',
    title: 'Intern Social Media Analyst',
    companyName: 'Edinburgh Napier University',
    location: 'Edinburgh, United Kingdom',
    bullets: [
      'Comparative analysis of social media APIs, evolving into the design of an evaluation framework for the institute\'s social media research projects.',
    ],
  },
  {
    date: 'Oct 2010 – Aug 2012',
    title: 'Junior Business Process Analyst',
    companyName: 'Souccar for Electronic Industries (SEI)',
    location: 'Syria',
    bullets: [
      'Member of the Business Process Reengineering team, producing as-is workflow analysis in MS Visio and SAP PowerDesigner.',
      'Ran requirements workshops with stakeholders and business owners to capture software requirements for developers.',
      'Identified workflow gaps and recommended business transformation solutions.',
    ],
  },
  {
    date: 'Jun 2010 – Sep 2010',
    title: 'Supervisor, Shabab Project',
    companyName: 'Syrian Trust for Development',
    location: 'Damascus, Syria',
    bullets: [
      'Led a group of 15 high school students on business visits across Damascus, including DHL, a food manufacturer and eSyria magazine.',
    ],
  },
  {
    date: 'Jun 2009 – Sep 2009',
    title: 'Intern Researcher',
    companyName: 'Syrian Consulting Bureau for Development and Investment (SCB)',
    location: 'Damascus, Syria',
    bullets: [
      'Supervised survey data collection and supported data processing for SCB research projects.',
    ],
  },
];

export const platforms = [
  'Azure AD B2C', 'Entra External ID', 'Entra ID Governance', 'Entra Verified ID',
  'OAuth 2.0 / OIDC', 'REST APIs', 'GDPR', 'ISO 27001',
];

export const skills = {
  core: [
    'Stakeholder Management', 'Customer Identity & Access Management',
    'Requirements & Specification', 'Discovery Workshops',
    'Solution Design', 'Agile Delivery',
  ],
  technical: [
    'Azure AD B2C (Custom Policies / IEF)', 'Entra External ID',
    'Entra ID Governance', 'Entra Verified ID',
    'OAuth 2.0 / OpenID Connect', 'REST APIs',
    'GDPR & ISO 27001', 'Visio',
  ],
};

export interface Cert { name: string; short: string; issuer: string; year: number }

export const certifications: Cert[] = [
  { name: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals', short: 'SC-900', issuer: 'Microsoft', year: 2024 },
  { name: 'Microsoft Certified: Azure AI Fundamentals', short: 'AI-900', issuer: 'Microsoft', year: 2026 },
  { name: 'Microsoft Certified: Azure Fundamentals', short: 'AZ-900', issuer: 'Microsoft', year: 2023 },
  { name: 'Professional Scrum Master™ I', short: 'PSM I', issuer: 'Scrum.org', year: 2023 },
  { name: 'Professional Scrum™ with Kanban I', short: 'PSK I', issuer: 'Scrum.org', year: 2023 },
  { name: 'Avaloq Certified Customisation Professional', short: 'ACCP', issuer: 'Avaloq', year: 2019 },
  { name: 'Learn to Code in Python', short: 'Python', issuer: 'Boot.dev', year: 2025 },
  { name: 'Learn Git', short: 'Git', issuer: 'Boot.dev', year: 2025 },
  { name: 'Learn Linux', short: 'Linux', issuer: 'Boot.dev', year: 2025 },
];

export const languages = [
  { code: 'EN', name: 'English', level: 'Full professional' },
  { code: 'AR', name: 'Arabic', level: 'Native' },
  { code: 'RU', name: 'Russian', level: 'Native' },
  { code: 'FR', name: 'French', level: 'Elementary' },
];

export const education = [
  { degree: 'MSc Business Information Technology', school: 'Edinburgh Napier University', years: '2013 – 2014' },
  { degree: 'BSc Management of Information Systems', school: 'Higher Institute of Business Administration', years: '2007 – 2012' },
];

export const links = {
  email: 'mailto:jkhissa@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jissa90',
  github: 'https://github.com/jkhissa',
};
