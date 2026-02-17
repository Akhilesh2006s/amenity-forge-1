"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Briefcase, Users, LogOut, Eye, Edit, Trash2, Download, CheckCircle, XCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Job, Application } from '@/lib/models';

export default function AdminDashboard() {
  const router = useRouter();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'jobs' | 'applications'>('jobs');
  const [showJobForm, setShowJobForm] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [jobsRes, appsRes] = await Promise.all([
        fetch('/api/jobs'),
        fetch('/api/applications'),
    ]);

      if (jobsRes.ok) {
        const jobsData = await jobsRes.json();
        setJobs(jobsData.jobs || []);
      }

      if (appsRes.ok) {
        const appsData = await appsRes.json();
        setApplications(appsData.applications || []);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  };

  const handleDeleteJob = async (id: string) => {
    if (!confirm('Are you sure you want to delete this job? This action cannot be undone.')) return;

    try {
      const response = await fetch(`/api/jobs/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Refresh the data to get updated list
        fetchData();
      } else {
        alert(data.message || 'Failed to delete job');
      }
    } catch (error) {
      console.error('Error deleting job:', error);
      alert('An error occurred while deleting the job');
    }
  };

  const handleToggleJobStatus = async (job: Job) => {
    try {
      const response = await fetch(`/api/jobs/${job._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...job, isActive: !job.isActive }),
      });

      if (response.ok) {
        fetchData();
      }
    } catch (error) {
      console.error('Error updating job:', error);
    }
  };

  const handleUpdateApplicationStatus = async (id: string, status: string) => {
    try {
      const response = await fetch(`/api/applications/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        fetchData();
      }
    } catch (error) {
      console.error('Error updating application:', error);
    }
  };

  const handleDeleteApplication = async (id: string) => {
    if (!confirm('Are you sure you want to delete this application? This action cannot be undone.')) return;

    try {
      const response = await fetch(`/api/applications/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Refresh the data to get updated list
        fetchData();
      } else {
        alert(data.message || 'Failed to delete application');
      }
    } catch (error) {
      console.error('Error deleting application:', error);
      alert('An error occurred while deleting the application');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'shortlisted':
        return 'bg-green-900/50 text-green-300 border-green-700';
      case 'rejected':
        return 'bg-red-900/50 text-red-300 border-red-700';
      case 'reviewed':
        return 'bg-blue-900/50 text-blue-300 border-blue-700';
      default:
        return 'bg-yellow-900/50 text-yellow-300 border-yellow-700';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-gray-900/50 border-b border-gray-700/50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-gray-700 text-gray-300 hover:bg-gray-800"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex space-x-4 mb-8 border-b border-gray-700">
          <button
            onClick={() => setActiveTab('jobs')}
            className={`pb-4 px-4 font-medium transition-colors ${
              activeTab === 'jobs'
                ? 'text-yellow-400 border-b-2 border-yellow-400'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Briefcase className="w-5 h-5 inline mr-2" />
            Jobs ({jobs.length})
          </button>
          <button
            onClick={() => setActiveTab('applications')}
            className={`pb-4 px-4 font-medium transition-colors ${
              activeTab === 'applications'
                ? 'text-yellow-400 border-b-2 border-yellow-400'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Users className="w-5 h-5 inline mr-2" />
            Applications ({applications.length})
          </button>
        </div>

        {/* Jobs Tab */}
        {activeTab === 'jobs' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">Job Postings</h2>
              <Button
                onClick={() => {
                  setEditingJob(null);
                  setShowJobForm(true);
                }}
                className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 text-black font-bold"
              >
                <Plus className="w-5 h-5 mr-2" />
                Post New Job
              </Button>
            </div>

            {showJobForm && (
              <JobForm
                job={editingJob}
                onClose={() => {
                  setShowJobForm(false);
                  setEditingJob(null);
                }}
                onSuccess={() => {
                  setShowJobForm(false);
                  setEditingJob(null);
                  fetchData();
                }}
              />
            )}

            <div className="grid gap-4">
              {jobs.map((job) => (
                <div
                  key={job._id}
                  className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 p-6 rounded-xl border border-gray-700/50"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{job.title}</h3>
                        <span
                          className={`px-2 py-1 text-xs rounded ${
                            job.isActive
                              ? 'bg-green-900/50 text-green-300'
                              : 'bg-gray-700 text-gray-400'
                          }`}
                        >
                          {job.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-2">{job.location} • {job.type}</p>
                      <p className="text-gray-300 text-sm line-clamp-2">{job.description}</p>
                      <p className="text-gray-500 text-xs mt-2">
                        Posted: {new Date(job.postedDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        onClick={() => handleToggleJobStatus(job)}
                        variant="outline"
                        size="sm"
                        className="border-gray-700"
                      >
                        {job.isActive ? <XCircle className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                      </Button>
                      <Button
                        onClick={() => {
                          setEditingJob(job);
                          setShowJobForm(true);
                        }}
                        variant="outline"
                        size="sm"
                        className="border-gray-700"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        onClick={() => job._id && handleDeleteJob(job._id)}
                        variant="outline"
                        size="sm"
                        className="border-red-700 text-red-400 hover:bg-red-900/20"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {jobs.length === 0 && (
              <div className="text-center py-12 text-gray-400">
                <Briefcase className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>No jobs posted yet. Create your first job posting!</p>
              </div>
            )}
          </div>
        )}

        {/* Applications Tab */}
        {activeTab === 'applications' && (
          <div>
            <h2 className="text-xl font-bold text-white mb-6">Job Applications</h2>
            <div className="grid gap-4">
              {applications.map((app) => (
                <div
                  key={app._id}
                  className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 p-6 rounded-xl border border-gray-700/50"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">{app.fullName}</h3>
                      <p className="text-gray-400 text-sm mb-2">{app.jobTitle}</p>
                      <div className="space-y-1 text-sm text-gray-300">
                        <p><strong>Email:</strong> {app.email}</p>
                        <p><strong>Phone:</strong> {app.phone}</p>
                        {app.location && <p><strong>Location:</strong> {app.location}</p>}
                      </div>
                      {app.coverLetter && (
                        <p className="text-gray-400 text-sm mt-3 line-clamp-2">{app.coverLetter}</p>
                      )}
                      <p className="text-gray-500 text-xs mt-2">
                        Applied: {new Date(app.submittedAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex flex-col space-y-2 ml-4">
                      <span className={`px-3 py-1 text-xs rounded border ${getStatusColor(app.status)}`}>
                        {app.status}
                      </span>
                      <a
                        href={app.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-400 hover:text-yellow-300 text-sm flex items-center"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Resume
                      </a>
                      <select
                        value={app.status}
                        onChange={(e) => app._id && handleUpdateApplicationStatus(app._id, e.target.value)}
                        className="bg-gray-800 border border-gray-700 text-white text-xs px-2 py-1 rounded"
                      >
                        <option value="pending">Pending</option>
                        <option value="reviewed">Reviewed</option>
                        <option value="shortlisted">Shortlisted</option>
                        <option value="rejected">Rejected</option>
                      </select>
                      <Button
                        onClick={() => app._id && handleDeleteApplication(app._id)}
                        variant="outline"
                        size="sm"
                        className="border-red-700 text-red-400 hover:bg-red-900/20 mt-2"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {applications.length === 0 && (
              <div className="text-center py-12 text-gray-400">
                <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>No applications yet.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Job Form Component
function JobForm({ job, onClose, onSuccess }: { job: Job | null; onClose: () => void; onSuccess: () => void }) {
  const [formData, setFormData] = useState({
    title: job?.title || '',
    description: job?.description || '',
    requirements: job?.requirements || '',
    location: job?.location || '',
    type: job?.type || 'full-time',
    salary: job?.salary || '',
    department: job?.department || '',
    deadline: job?.deadline ? new Date(job.deadline).toISOString().split('T')[0] : '',
    isActive: job?.isActive ?? true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const url = job?._id ? `/api/jobs/${job._id}` : '/api/jobs';
      const method = job?._id ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        onSuccess();
      }
    } catch (error) {
      console.error('Error saving job:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 p-8 rounded-xl border border-gray-700/50 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-white mb-6">
          {job ? 'Edit Job' : 'Post New Job'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-300 mb-2">Job Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">Location *</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-2">Description *</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              rows={4}
              className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-2">Requirements</label>
            <textarea
              value={formData.requirements}
              onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
              rows={3}
              className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-gray-300 mb-2">Type *</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
                required
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white"
              >
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">Salary</label>
              <input
                type="text"
                value={formData.salary}
                onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">Department</label>
              <input
                type="text"
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-2">Application Deadline</label>
            <input
              type="date"
              value={formData.deadline}
              onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
              className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white"
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="isActive"
              checked={formData.isActive}
              onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
              className="w-4 h-4"
            />
            <label htmlFor="isActive" className="text-sm text-gray-300">Active (visible on job board)</label>
          </div>
          <div className="flex space-x-4 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 text-black font-bold"
            >
              {isSubmitting ? 'Saving...' : job ? 'Update Job' : 'Post Job'}
            </Button>
            <Button type="button" onClick={onClose} variant="outline" className="border-gray-700">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
