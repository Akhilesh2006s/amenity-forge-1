"use client"

import { useEffect, useState } from "react"
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Building2,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Job } from "@/lib/models"
import JobApplicationForm from "@/components/JobApplicationForm"

const gridBgClass =
  "bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:40px_40px]"

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [showApplicationForm, setShowApplicationForm] = useState(false)

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      const response = await fetch("/api/jobs?active=true")
      const data = await response.json()
      setJobs(data.jobs || [])
    } catch (error) {
      console.error("Error fetching jobs:", error)
      setJobs([])
    } finally {
      setIsLoading(false)
    }
  }

  const handleApply = (job: Job) => {
    setSelectedJob(job)
    setShowApplicationForm(true)
  }

  if (isLoading) {
    return (
      <div className={`relative min-h-screen bg-black ${gridBgClass}`}>
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
          <div className="mb-4 h-10 w-10 animate-pulse rounded-full border-2 border-yellow-400/30 border-t-yellow-400" />
          <p className="text-sm text-zinc-400">Loading opportunities…</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative min-h-screen overflow-hidden bg-black text-white ${gridBgClass}`}>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />

      {/* Hero — full width, no navbar strip */}
      <header
        className="relative border-b border-white/5 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/2.png')" }}
      >
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-black/60 to-black" />
        <div className="container relative z-[2] mx-auto px-4 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/25 bg-yellow-500/5 px-3 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-yellow-400" aria-hidden />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-yellow-400 md:text-xs">
                Careers
              </span>
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              <span className="block bg-gradient-to-r from-white via-white to-zinc-300 bg-clip-text text-transparent">
                Career
              </span>
              <span className="mt-1 block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Opportunities
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
              Join the Amenity Forge team and help us build the future of digital
              solutions.
            </p>
          </div>
        </div>
      </header>

      {/* Open positions */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 py-14 md:py-16">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-yellow-400/90 md:text-xs">
              Open positions
            </p>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Explore roles
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-500">
            Select a role to apply. We review every application carefully.
          </p>
        </div>

        {jobs.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-zinc-900/40 py-20 text-center backdrop-blur-sm">
            <Briefcase className="mx-auto mb-4 h-16 w-16 text-zinc-600" />
            <h3 className="mb-2 text-xl font-semibold text-white">
              No open positions
            </h3>
            <p className="text-zinc-500">
              Check back later for new opportunities.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job, index) => {
              const featured = index === 1
              return (
                <article
                  key={job._id}
                  className={[
                    "flex min-h-0 flex-col rounded-2xl border bg-gradient-to-br from-zinc-900/90 to-black/80 p-6 backdrop-blur-sm transition-all duration-300",
                    featured
                      ? "border-yellow-500/45 shadow-[0_0_32px_-8px_rgba(234,179,8,0.35)] ring-1 ring-yellow-500/20"
                      : "border-white/10 hover:border-yellow-500/30 hover:shadow-lg hover:shadow-yellow-500/5",
                  ].join(" ")}
                >
                  <div className="flex min-h-0 flex-1 flex-col">
                    <div className="mb-4 min-w-0">
                      <h3 className="mb-2 text-lg font-bold leading-snug text-white line-clamp-4 md:text-xl">
                        {job.title}
                      </h3>
                      {job.department && (
                        <p className="flex items-center text-sm text-yellow-400/95">
                          <Building2 className="mr-1.5 h-4 w-4 shrink-0" />
                          {job.department}
                        </p>
                      )}
                    </div>

                    <div className="mb-4 space-y-2">
                      <p className="flex items-center text-sm text-zinc-400">
                        <MapPin className="mr-2 h-4 w-4 shrink-0 text-yellow-400/90" />
                        {job.location}
                      </p>
                      <p className="flex items-center text-sm text-zinc-400">
                        <Clock className="mr-2 h-4 w-4 shrink-0 text-yellow-400/90" />
                        {job.type.charAt(0).toUpperCase() +
                          job.type.slice(1).replace("-", " ")}
                      </p>
                      {job.salary && (
                        <p className="flex items-center text-sm text-zinc-400">
                          <DollarSign className="mr-2 h-4 w-4 shrink-0 text-yellow-400/90" />
                          {job.salary}
                        </p>
                      )}
                    </div>

                    <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-zinc-400">
                      {job.description}
                    </p>

                    {job.deadline && (
                      <p className="mb-4 text-xs text-zinc-500">
                        Deadline:{" "}
                        {new Date(job.deadline).toLocaleDateString()}
                      </p>
                    )}
                  </div>

                  <Button
                    onClick={() => handleApply(job)}
                    className="mt-auto w-full shrink-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 font-bold text-black shadow-md shadow-yellow-500/10 transition hover:shadow-lg hover:shadow-yellow-400/25"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </article>
              )
            })}
          </div>
        )}
      </section>

      {showApplicationForm && selectedJob && (
        <JobApplicationForm
          job={selectedJob}
          onClose={() => {
            setShowApplicationForm(false)
            setSelectedJob(null)
          }}
          onSuccess={() => {
            setShowApplicationForm(false)
            setSelectedJob(null)
            alert("Application submitted successfully!")
          }}
        />
      )}
    </div>
  )
}
