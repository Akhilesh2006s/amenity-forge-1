export interface Job {
  _id?: string;
  title: string;
  description: string;
  requirements?: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  salary?: string;
  department?: string;
  postedDate: Date;
  deadline?: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Application {
  _id?: string;
  jobId: string;
  jobTitle: string;
  fullName: string;
  email: string;
  phone: string;
  location?: string;
  coverLetter?: string;
  resumeUrl: string;
  resumeFileName: string;
  status: 'pending' | 'reviewed' | 'shortlisted' | 'rejected';
  submittedAt: Date;
}

export interface Admin {
  _id?: string;
  email: string;
  password: string; // hashed
  createdAt: Date;
}
