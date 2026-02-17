"use client"

import { useEffect, useState } from 'react';
import { Briefcase, MapPin, Clock, DollarSign, Building2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Job } from '@/lib/models';
import JobApplicationForm from '@/components/JobApplicationForm';

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch('/api/jobs?active=true');
      const data = await response.json();
      // Always set jobs, even if there's an error (will be empty array)
      setJobs(data.jobs || []);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      // Set empty array on error so page shows "No Open Positions"
      setJobs([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleApply = (job: Job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading jobs...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-gradient-to-br from-gray-900/90 to-black border-b border-gray-700/50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
                Career Opportunities
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Join the Amenity Forge team and help us build the future of digital solutions
            </p>
          </div>
        </div>
      </header>

      {/* Jobs List */}
      <div className="container mx-auto px-4 py-12">
        {jobs.length === 0 ? (
          <div className="text-center py-20">
            <Briefcase className="w-20 h-20 mx-auto mb-4 text-gray-600" />
            <h2 className="text-2xl font-bold text-white mb-2">No Open Positions</h2>
            <p className="text-gray-400">Check back later for new opportunities!</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <div
                key={job._id}
                className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 p-6 rounded-xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                    {job.department && (
                      <p className="text-yellow-400 text-sm mb-2 flex items-center">
                        <Building2 className="w-4 h-4 mr-1" />
                        {job.department}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <p className="text-gray-400 text-sm flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-yellow-400" />
                    {job.location}
                  </p>
                  <p className="text-gray-400 text-sm flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-yellow-400" />
                    {job.type.charAt(0).toUpperCase() + job.type.slice(1).replace('-', ' ')}
                  </p>
                  {job.salary && (
                    <p className="text-gray-400 text-sm flex items-center">
                      <DollarSign className="w-4 h-4 mr-2 text-yellow-400" />
                      {job.salary}
                    </p>
                  )}
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{job.description}</p>

                {job.deadline && (
                  <p className="text-gray-500 text-xs mb-4">
                    Deadline: {new Date(job.deadline).toLocaleDateString()}
                  </p>
                )}

                <Button
                  onClick={() => handleApply(job)}
                  className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 text-black font-bold hover:shadow-lg hover:shadow-yellow-400/50 transition-all"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Application Form Modal */}
      {showApplicationForm && selectedJob && (
        <JobApplicationForm
          job={selectedJob}
          onClose={() => {
            setShowApplicationForm(false);
            setSelectedJob(null);
          }}
          onSuccess={() => {
            setShowApplicationForm(false);
            setSelectedJob(null);
            alert('Application submitted successfully!');
          }}
        />
      )}
    </div>
  );
}
