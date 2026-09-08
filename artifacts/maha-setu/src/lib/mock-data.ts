export type ApplicationStatus =
  | 'Draft'
  | 'Submitted'
  | 'In review'
  | 'Action required'
  | 'Approved'
  | 'Processing'
  | 'Inspection scheduled'
  | 'Query raised'
  | 'Verified';

export type BusinessProfile = {
  businessName: string;
  sector: string;
  businessType: string;
  district: string;
  projectSize: string;
  investment: string;
  employees: string;
  stage: string;
};

export type Approval = {
  id: string;
  name: string;
  department: string;
  status: ApplicationStatus;
  priority: 'High' | 'Medium' | 'Low';
  description: string;
};

export type Document = {
  id: string;
  name: string;
  category: string;
  uploaded: boolean;
  required: boolean;
};

export type Application = {
  id: string;
  name: string;
  status: ApplicationStatus;
  department: string;
  lastUpdated: string;
  nextAction: string;
  progress: number;
};

export type TimelineStep = {
  label: string;
  status: 'complete' | 'current' | 'upcoming';
  date: string;
  description: string;
};

export const mockBusiness: BusinessProfile = {
  businessName: 'Maharashtra Food Processing Pvt Ltd',
  sector: 'Food processing',
  businessType: 'Private limited company',
  district: 'Nagpur',
  projectSize: 'Medium',
  investment: '₹5 Crore',
  employees: '50',
  stage: 'New Business',
};

export const mockApprovals: Approval[] = [
  {
    id: 'factory-licence',
    name: 'Factory Licence',
    department: 'Directorate of Industrial Safety & Health',
    status: 'In review',
    priority: 'High',
    description: 'Approval to operate a manufacturing unit with prescribed worker and safety provisions.',
  },
  {
    id: 'pollution-consent',
    name: 'Pollution Control Consent',
    department: 'Maharashtra Pollution Control Board',
    status: 'Submitted',
    priority: 'High',
    description: 'Consent to Establish for the proposed food processing facility and effluent systems.',
  },
  {
    id: 'fire-noc',
    name: 'Fire NOC',
    department: 'Maharashtra Fire & Emergency Services',
    status: 'Action required',
    priority: 'High',
    description: 'Site safety clearance based on the building plan, fire systems and evacuation routes.',
  },
  {
    id: 'shop-establishment',
    name: 'Shop & Establishment Registration',
    department: 'Labour Department, Government of Maharashtra',
    status: 'Approved',
    priority: 'Medium',
    description: 'Registration of the commercial establishment and its employment details.',
  },
  {
    id: 'electricity',
    name: 'Electricity Connection Approval',
    department: 'MSEDCL',
    status: 'In review',
    priority: 'Medium',
    description: 'Sanction for the new industrial electricity connection and connected load.',
  },
];

export const mockDocuments: Document[] = [
  { id: 'doc-1', name: 'Business Registration', category: 'Factory Licence', uploaded: true, required: true },
  { id: 'doc-2', name: 'PAN', category: 'Factory Licence', uploaded: true, required: true },
  { id: 'doc-3', name: 'Factory Layout', category: 'Factory Licence', uploaded: false, required: true },
  { id: 'doc-4', name: 'Site Plan', category: 'Factory Licence', uploaded: false, required: true },
  { id: 'doc-5', name: 'Business Details', category: 'Pollution Control Consent', uploaded: true, required: true },
  { id: 'doc-6', name: 'Site Information', category: 'Pollution Control Consent', uploaded: true, required: true },
  { id: 'doc-7', name: 'Environmental Documents', category: 'Pollution Control Consent', uploaded: false, required: true },
  { id: 'doc-8', name: 'Building Information', category: 'Fire NOC', uploaded: true, required: true },
  { id: 'doc-9', name: 'Fire Safety Plan', category: 'Fire NOC', uploaded: false, required: true },
];

export const mockApplications: Application[] = [
  {
    id: 'APP-26130-01',
    name: 'Fire NOC',
    status: 'Inspection scheduled',
    department: 'Maharashtra Fire & Emergency Services',
    lastUpdated: '28 Aug 2026',
    nextAction: 'Confirm inspection readiness',
    progress: 62,
  },
  {
    id: 'APP-26130-02',
    name: 'Factory Licence',
    status: 'Processing',
    department: 'Directorate of Industrial Safety & Health',
    lastUpdated: '26 Aug 2026',
    nextAction: 'Await department review',
    progress: 74,
  },
  {
    id: 'APP-26130-03',
    name: 'Pollution Control Consent',
    status: 'Approved',
    department: 'Maharashtra Pollution Control Board',
    lastUpdated: '24 Aug 2026',
    nextAction: 'Keep consent documents on file',
    progress: 100,
  },
  {
    id: 'APP-26130-04',
    name: 'Electricity Connection',
    status: 'Query raised',
    department: 'MSEDCL',
    lastUpdated: '22 Aug 2026',
    nextAction: 'Respond to load clarification',
    progress: 54,
  },
  {
    id: 'APP-26130-05',
    name: 'Shop & Establishment Registration',
    status: 'Verified',
    department: 'Labour Department, Government of Maharashtra',
    lastUpdated: '18 Aug 2026',
    nextAction: 'Download certificate',
    progress: 100,
  },
];

export const mockTimeline: TimelineStep[] = [
  { label: 'PROFILE', status: 'complete', date: '08 Aug 2026', description: 'Business profile captured for the industrial unit.' },
  { label: 'IDENTIFY', status: 'complete', date: '09 Aug 2026', description: 'Likely approval requirements mapped from the profile.' },
  { label: 'CHECKLIST', status: 'complete', date: '10 Aug 2026', description: 'Required and supporting documents organised by approval.' },
  { label: 'PRE-VALIDATE', status: 'complete', date: '12 Aug 2026', description: 'Documents marked ready for a prototype pre-validation pass.' },
  { label: 'SUBMIT', status: 'complete', date: '14 Aug 2026', description: 'Prototype submission record created for tracking.' },
  { label: 'PARALLEL PROCESS', status: 'current', date: 'In progress', description: 'Multiple departments are moving through their respective review stages.' },
  { label: 'INSPECTION & QUERIES', status: 'current', date: 'Current', description: 'Fire inspection is scheduled and an electricity-load query needs attention.' },
  { label: 'DECISION', status: 'upcoming', date: 'Pending', description: 'The concerned authority will record the outcome.' },
  { label: 'APPROVAL', status: 'upcoming', date: 'Pending', description: 'Final approval status will be reflected after the authority decision.' },
];
