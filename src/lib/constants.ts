// ═══════════════════════════════════════════
// App Constants
// ═══════════════════════════════════════════

export const APP_NAME = 'Mextify';
export const APP_DESCRIPTION =
  'The AI-powered Career Operating System. Discover opportunities, build your profile, prepare for interviews, and grow professionally.';
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

// ═══════════════════════════════════════════
// Navigation
// ═══════════════════════════════════════════

export const MARKETING_NAV_LINKS = [
  { name: 'Features', href: '/#features' },
  { name: 'For Employers', href: '/#employers' },
  { name: 'Pricing', href: '/pricing' },
] as const;

export const CANDIDATE_NAV_LINKS = [
  { name: 'Dashboard', href: '/candidate', icon: 'LayoutDashboard' },
  { name: 'Profile', href: '/candidate/profile', icon: 'User' },
  { name: 'Resume', href: '/candidate/resume', icon: 'FileText' },
  { name: 'Jobs', href: '/candidate/jobs', icon: 'Briefcase' },
  { name: 'Applications', href: '/candidate/applications', icon: 'Send' },
  { name: 'Interviews', href: '/candidate/interviews', icon: 'Video' },
  { name: 'Career Coach', href: '/candidate/career-coach', icon: 'Sparkles' },
  { name: 'Settings', href: '/candidate/settings', icon: 'Settings' },
] as const;

export const EMPLOYER_NAV_LINKS = [
  { name: 'Dashboard', href: '/employer', icon: 'LayoutDashboard' },
  { name: 'Company', href: '/employer/company', icon: 'Building2' },
  { name: 'Jobs', href: '/employer/jobs', icon: 'Briefcase' },
  { name: 'Candidates', href: '/employer/candidates', icon: 'Users' },
  { name: 'Interviews', href: '/employer/interviews', icon: 'Video' },
  { name: 'Analytics', href: '/employer/analytics', icon: 'BarChart3' },
  { name: 'Team', href: '/employer/team', icon: 'UserCog' },
  { name: 'Billing', href: '/employer/billing', icon: 'CreditCard' },
  { name: 'Settings', href: '/employer/settings', icon: 'Settings' },
] as const;

export const ADMIN_NAV_LINKS = [
  { name: 'Dashboard', href: '/admin', icon: 'LayoutDashboard' },
  { name: 'Users', href: '/admin/users', icon: 'Users' },
  { name: 'Companies', href: '/admin/companies', icon: 'Building2' },
  { name: 'Jobs', href: '/admin/jobs', icon: 'Briefcase' },
  { name: 'Reports', href: '/admin/reports', icon: 'Flag' },
  { name: 'Moderation', href: '/admin/moderation', icon: 'Shield' },
  { name: 'Analytics', href: '/admin/analytics', icon: 'BarChart3' },
  { name: 'Feature Flags', href: '/admin/feature-flags', icon: 'ToggleLeft' },
  { name: 'Settings', href: '/admin/settings', icon: 'Settings' },
] as const;

// ═══════════════════════════════════════════
// Job & Application Constants
// ═══════════════════════════════════════════

export const JOB_TYPES = [
  { value: 'FULL_TIME', label: 'Full Time' },
  { value: 'PART_TIME', label: 'Part Time' },
  { value: 'INTERNSHIP', label: 'Internship' },
  { value: 'CONTRACT', label: 'Contract' },
  { value: 'FREELANCE', label: 'Freelance' },
] as const;

export const WORK_MODES = [
  { value: 'REMOTE', label: 'Remote' },
  { value: 'HYBRID', label: 'Hybrid' },
  { value: 'ONSITE', label: 'On-site' },
] as const;

export const EXPERIENCE_LEVELS = [
  { value: 'ENTRY', label: 'Entry Level' },
  { value: 'JUNIOR', label: 'Junior' },
  { value: 'MID', label: 'Mid Level' },
  { value: 'SENIOR', label: 'Senior' },
  { value: 'LEAD', label: 'Lead' },
  { value: 'EXECUTIVE', label: 'Executive' },
] as const;

export const APPLICATION_STATUSES = [
  { value: 'APPLIED', label: 'Applied', color: 'bg-blue-500' },
  { value: 'SCREENING', label: 'Screening', color: 'bg-yellow-500' },
  { value: 'ASSESSMENT', label: 'Assessment', color: 'bg-orange-500' },
  { value: 'SHORTLISTED', label: 'Shortlisted', color: 'bg-purple-500' },
  { value: 'INTERVIEW', label: 'Interview', color: 'bg-indigo-500' },
  { value: 'OFFER', label: 'Offer', color: 'bg-emerald-500' },
  { value: 'HIRED', label: 'Hired', color: 'bg-green-500' },
  { value: 'REJECTED', label: 'Rejected', color: 'bg-red-500' },
  { value: 'WITHDRAWN', label: 'Withdrawn', color: 'bg-gray-500' },
] as const;

// ═══════════════════════════════════════════
// Pricing
// ═══════════════════════════════════════════

export const CANDIDATE_PLANS = [
  {
    name: 'Free',
    price: 0,
    description: 'Get started with your career journey',
    features: [
      '5 applications per month',
      'Basic profile',
      'Job search & filters',
      'Application tracking',
      'Email notifications',
    ],
    limitations: [
      'Limited AI features',
      'No resume analysis',
      'No career coaching',
    ],
  },
  {
    name: 'Premium',
    price: 999, // cents
    description: 'Accelerate your career growth',
    features: [
      'Unlimited applications',
      'AI resume analysis & ATS scoring',
      'AI career coaching',
      'Mock interview prep',
      'Skill gap analysis',
      'Career health score',
      'Priority support',
      'Profile visibility boost',
    ],
    limitations: [],
    popular: true,
  },
] as const;

export const EMPLOYER_PLANS = [
  {
    name: 'Starter',
    price: 4900, // cents
    description: 'For small teams hiring occasionally',
    features: [
      '3 active job listings',
      'Basic ATS',
      '50 applicant views/month',
      'Email support',
    ],
  },
  {
    name: 'Business',
    price: 19900,
    description: 'For growing teams with regular hiring needs',
    features: [
      '15 active job listings',
      'AI candidate ranking',
      'Assessment system',
      'Team access (5 seats)',
      'Hiring analytics',
      'Priority support',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: -1, // custom
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited job listings',
      'Unlimited team seats',
      'API access',
      'Custom integrations',
      'Dedicated account manager',
      'SLA guarantee',
      'Custom branding',
    ],
  },
] as const;

// ═══════════════════════════════════════════
// Limits & Defaults
// ═══════════════════════════════════════════

export const PAGINATION_DEFAULT = 20;
export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
export const ALLOWED_RESUME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];
export const MAX_RESUME_VERSIONS = 10;
export const FREE_APPLICATIONS_PER_MONTH = 5;
