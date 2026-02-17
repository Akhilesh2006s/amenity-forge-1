"use client"

import { useState } from 'react';
import { X, Upload, FileText, User, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Job } from '@/lib/models';

interface JobApplicationFormProps {
  job: Job;
  onClose: () => void;
  onSuccess: () => void;
}

export default function JobApplicationForm({ job, onClose, onSuccess }: JobApplicationFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    coverLetter: '',
  });
  const [resume, setResume] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'image/png', 'image/jpeg'];
      if (!allowedTypes.includes(file.type)) {
        setError('Resume must be PDF, PNG, or JPEG');
        return;
      }
      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('Resume file size must be less than 5MB');
        return;
      }
      setResume(file);
      setError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!resume) {
      setError('Please upload your resume');
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('location', formData.location);
      formDataToSend.append('coverLetter', formData.coverLetter);
      formDataToSend.append('jobId', job._id || '');
      formDataToSend.append('jobTitle', job.title);
      formDataToSend.append('resume', resume);

      const response = await fetch('/api/applications', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        onSuccess();
      } else {
        setError(data.message || 'Failed to submit application');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 p-8 rounded-xl border border-gray-700/50 max-w-2xl w-full my-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Apply for {job.title}</h2>
            <p className="text-gray-400 text-sm">{job.location} • {job.type}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-red-900/50 border border-red-700/50 rounded-lg text-red-300 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-sm text-gray-300 mb-2 font-medium flex items-center">
                <User className="w-4 h-4 mr-2 text-yellow-400" />
                Full Name *
              </label>
              <Input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
                className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-500"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-300 mb-2 font-medium flex items-center">
                <Mail className="w-4 h-4 mr-2 text-yellow-400" />
                Email Address *
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-500"
                placeholder="john.doe@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm text-gray-300 mb-2 font-medium flex items-center">
                <Phone className="w-4 h-4 mr-2 text-yellow-400" />
                Phone Number *
              </label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-500"
                placeholder="+1 234 567 8900"
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm text-gray-300 mb-2 font-medium flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-yellow-400" />
                Location
              </label>
              <Input
                id="location"
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-500"
                placeholder="City, State/Country"
              />
            </div>
          </div>

          <div>
            <label htmlFor="resume" className="block text-sm text-gray-300 mb-2 font-medium flex items-center">
              <FileText className="w-4 h-4 mr-2 text-yellow-400" />
              Resume (PDF, PNG, or JPEG) *
            </label>
            <div className="relative">
              <input
                id="resume"
                type="file"
                accept=".pdf,.png,.jpg,.jpeg"
                onChange={handleFileChange}
                required
                className="hidden"
              />
              <label
                htmlFor="resume"
                className="flex items-center justify-center w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg cursor-pointer hover:border-yellow-400 transition-colors"
              >
                <Upload className="w-5 h-5 mr-2 text-yellow-400" />
                <span className="text-white text-sm">
                  {resume ? resume.name : 'Choose file (Max 5MB)'}
                </span>
              </label>
            </div>
            {resume && (
              <p className="text-gray-400 text-xs mt-2">
                Selected: {resume.name} ({(resume.size / 1024).toFixed(2)} KB)
              </p>
            )}
          </div>

          <div>
            <label htmlFor="coverLetter" className="block text-sm text-gray-300 mb-2 font-medium flex items-center">
              <MessageSquare className="w-4 h-4 mr-2 text-yellow-400" />
              Cover Letter
            </label>
            <textarea
              id="coverLetter"
              value={formData.coverLetter}
              onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
              rows={5}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all resize-none"
              placeholder="Tell us why you're interested in this position..."
            />
          </div>

          <div className="flex space-x-4 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 text-black font-bold hover:shadow-lg hover:shadow-yellow-400/50 transition-all disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </Button>
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="border-gray-700 text-gray-300"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
