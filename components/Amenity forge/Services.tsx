import { CardSpotlight } from "@/components/card-spotlight"

const services = [
  {
    title: "AI & Automation Solutions",
    description:
      "Leverage AI to automate workflows, customer support, and predictive analytics for efficiency and growth.",
  },
  {
    title: "Custom Software Development",
    description:
      "Tailor-made software that aligns with your business needs using modern frameworks and robust architecture.",
  },
  {
    title: "Web & Mobile App Development",
    description:
      "Build high-performance websites and mobile applications across platforms with seamless user experience.",
  },
  {
    title: "UI/UX Design",
    description:
      "Craft intuitive and engaging interfaces focused on usability, accessibility, and delightful interactions.",
  },
  {
    title: "Digital Marketing",
    description:
      "Boost your online presence with SEO, PPC, content marketing, and social media strategies that convert.",
  },
  {
    title: "Cloud Deployment & DevOps",
    description: "Deploy scalable cloud infrastructure with CI/CD pipelines and DevOps practices for faster delivery.",
  },
  {
    title: "Video Editing",
    description:
      "Professional video production, cutting, and enhancements for marketing, training, and content creation.",
  },
  {
    title: "Quality Assessments",
    description: "Comprehensive QA services including manual and automated testing for bug-free product delivery.",
  },
  {
    title: "Blockchain",
    description: "Build secure and transparent decentralized apps with blockchain integration and smart contracts.",
  },
  {
    title: "PowerPoint / Pitch deck",
    description: "Stunning presentations and pitch decks that communicate your ideas with clarity and impact.",
  },
  {
    title: "Data Analytics",
    description: "Turn raw data into insights using dashboards, business intelligence tools, and predictive models.",
  },
  {
    title: "Customer Support",
    description:
      "Scalable customer service with chat, email, and voice support to maintain satisfaction and retention.",
  },
  {
    title: "Audio/ Video Support",
    description: "Manage AV setup, troubleshooting, and remote assistance for smooth virtual and in-person events.",
  },
  {
    title: "Freelance/Employment Support",
    description: "Match skilled professionals with opportunities, and support hiring through digital platforms.",
  },
  {
    title: "Start-up Executions",
    description: "End-to-end execution for startups—from idea validation to product launch and scaling.",
  },
]

export default function ServicesGrid() {
  return (
    <div className="py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* Pure black background */}
      <div className="absolute inset-0 pointer-events-none">
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 lg:mb-20 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
              Our Services
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed pt-2">
            Comprehensive solutions to transform your business with cutting-edge technology and expert execution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative bg-gradient-to-br from-gray-800/90 via-gray-700/90 to-gray-800/90 backdrop-blur-md p-6 rounded-2xl border border-gray-700/50 hover:border-yellow-400/70 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20 overflow-hidden h-full">
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="relative z-10 h-full flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed flex-1 group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const ArrowIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  )
}
