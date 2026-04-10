"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Briefcase, MapPin, Clock, DollarSign, Building2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Job } from '@/lib/models';
import JobApplicationForm from '@/components/JobApplicationForm';
import Navbar from '@/components/Amenity forge/navbar';

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
      <div className="min-h-screen bg-black pt-14 sm:pt-16">
        <Navbar />
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-white">Loading jobs...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-14 sm:pt-16">
      <Navbar />
      {/* Header */}
      <header
        className="relative border-b border-gray-700/50 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/2.png')" }}
      >
        <div className="absolute inset-0 z-[1] bg-black/55" />
        <Link
          href="/Home"
          className="absolute left-3 top-3 z-[3] outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-md sm:left-5 sm:top-5"
          aria-label="Amenity Forge home"
        >
          {/* 1.jpg is a tall canvas; the mark is centered — crop to center so it isn’t just empty top-left */}
          <img
            src="/1.jpg"
            alt="Amenity Forge"
            className="h-16 w-16 sm:h-[4.75rem] sm:w-[4.75rem] md:h-24 md:w-24 rounded-lg object-cover object-center shadow-lg shadow-black/50 ring-1 ring-yellow-400/25"
          />
        </Link>
        <div className="container relative z-[2] mx-auto px-4 py-16 md:py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Career Opportunities
            </h1>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto">
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {jobs.map((job) => (
              <div
                key={job._id}
                className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 p-6 rounded-xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10 flex flex-col h-full min-h-0"
              >
                <div className="flex-1 flex flex-col min-h-0">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-white mb-2 leading-snug line-clamp-4">{job.title}</h3>
                      {job.department && (
                        <p className="text-yellow-400 text-sm mb-2 flex items-center">
                          <Building2 className="w-4 h-4 mr-1 shrink-0" />
                          {job.department}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <p className="text-gray-400 text-sm flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-yellow-400 shrink-0" />
                      {job.location}
                    </p>
                    <p className="text-gray-400 text-sm flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-yellow-400 shrink-0" />
                      {job.type.charAt(0).toUpperCase() + job.type.slice(1).replace('-', ' ')}
                    </p>
                    {job.salary && (
                      <p className="text-gray-400 text-sm flex items-center">
                        <DollarSign className="w-4 h-4 mr-2 text-yellow-400 shrink-0" />
                        {job.salary}
                      </p>
                    )}
                  </div>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{job.description}</p>

                  {job.deadline && (
                    <p className="text-gray-500 text-xs">
                      Deadline: {new Date(job.deadline).toLocaleDateString()}
                    </p>
                  )}
                </div>

                <Button
                  onClick={() => handleApply(job)}
                  className="w-full mt-auto pt-4 shrink-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 text-black font-bold hover:shadow-lg hover:shadow-yellow-400/50 transition-all"
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
