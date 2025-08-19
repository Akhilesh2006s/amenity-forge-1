import React from 'react';
import {
  Crown, Sparkles, Users, Target, Star, Award, Zap,
  Globe, BookOpen, Briefcase
} from 'lucide-react';

function App() {
  const teamMembers = [
    {
      name: "Vanshika Chauhan",
      role: "AI Engineer & Head of Service Crew",
      description: "Leading our AI initiatives and service excellence with innovation and precision.",
      education: "B-Tech Bennett University (Times of India)",
      photo: "/images/vanshika.jpg"
    },
    {
      name: "Chelluri Bhavya Madhav",
      role: "CTO",
      description: "Orchestrating our technological infrastructure and data-driven solutions.",
      education: "B-Tech Bennett University (Times of India)",
      photo: "/images/bhavya.jpg"
    },
    {
      name: "Akhilesh Samyamanthula",
      role: "Head of Web & App Development",
      description: "Crafting exceptional digital experiences and scalable applications.",
      education: "B-Tech from VIT",
      photo: "/Akhilesh.jpg"
    },
    {
      name: "Kalyan Reddy",
      role: "HR & SDE",
      description: "Managing strategic coordination and ensuring seamless team operations.",
      education: "B-Tech from IIT",
      photo: "/images/kalyan.jpg"
    }
  ];

  const advisors = [
    {
      name: "Amit Soni",
      role: "Product Co-ordinator",
      description: "Dr. Amit Soni offers invaluable guidance in product development, drawing upon his extensive academic background and research expertise to support the strategic formulation and refinement of our product initiatives.",
      education: "PhD IIT, UH",
      photo: "/amit'.jpg",
    },
    {
      name: "Vinod Shastri",
      role: "Co-ordinator",
      description: "Mr. Vinod Shastri provides strategic mentorship, leveraging his profound experience in entrepreneurship and leadership to facilitate informed decision-making and scalable business growth.",
      education: "PhD Entrepreneurship MoC, MBA",
      photo: "/vinod sir.jpg",
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-yellow-400/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-yellow-400/20 rounded-full border border-amber-500/30">
              <Crown className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 font-medium">About Our Vision</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent mb-6">
              Elevating Excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transforming visions into reality through innovative AI and software solutions that serve humanity
            </p>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-yellow-400/20 rounded-full border border-amber-500/30">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span className="text-amber-400 font-medium">Visionary Leader</span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-6">
                Shri <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Yasaswi</span>
              </h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  <span className="text-amber-400 font-semibold">Founder & Visionary</span> behind our transformative journey,
                  Shri Yasaswi brings a unique blend of entrepreneurial spirit and technological innovation.
                </p>
                <p>
                  As the founder of <span className="text-amber-400 font-medium">Adorable Aroma</span> (event management),
                  he has demonstrated exceptional leadership in creating memorable experiences and building lasting relationships.
                </p>
                <p>
                  His vision extends beyond traditional boundaries - <span className="text-amber-400 font-medium">making things better</span>
                  for people through cutting-edge AI and software products that truly serve humanity.
                </p>
              </div>
              <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-amber-500/10 to-transparent rounded-xl border border-amber-500/20">
                <Target className="w-8 h-8 text-amber-400" />
                <div>
                  <h3 className="text-xl font-semibold text-amber-400 mb-1">Mission</h3>
                  <p className="text-gray-300">Building products for people, by people - with purpose and passion</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-amber-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-black p-8 rounded-3xl border border-amber-500/30 backdrop-blur-sm">
                <div className="text-center space-y-6">
                  <div className="w-40 h-40 mx-auto rounded-2xl border-2 border-amber-500/40 overflow-hidden">
                    <img 
                      src="/ceo.jpg" 
                      alt="Shri Yasaswi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-amber-400 mb-2">Leadership Excellence</h3>
                    <p className="text-gray-300">Dual expertise in event management and technology innovation</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-6">
                    <div className="text-center p-4 bg-amber-500/10 rounded-xl border border-amber-500/20">
                      <div className="text-2xl font-bold text-amber-400">3+</div>
                      <div className="text-sm text-gray-400">Years Experience</div>
                    </div>
                    <div className="text-center p-4 bg-amber-500/10 rounded-xl border border-amber-500/20">
                      <div className="text-2xl font-bold text-amber-400">100+</div>
                      <div className="text-sm text-gray-400">Projects Delivered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="relative py-20">
        <div className="absolute inset-0 bg-black"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-yellow-400/20 rounded-full border border-amber-500/30">
              <Users className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 font-medium">Elite Team</span>
            </div>
            <h2 className="text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Leadership</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the exceptional minds driving innovation and excellence in every project we undertake
            </p>
          </div>

          {/* Team Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative bg-black p-8 rounded-3xl border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-amber-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl overflow-hidden border border-amber-500/30">
                      <img 
                        src={member.photo} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-amber-400 font-semibold text-sm uppercase tracking-wide">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300 mb-4">
                    {member.description}
                  </p>
                  <div className="mt-6 pt-6 border-t border-amber-500/20">
                    <div className="flex items-center gap-2 text-amber-400 group-hover:text-amber-300 transition-colors duration-300">
                      <BookOpen className="w-4 h-4" />
                      <span className="text-sm font-medium">{member.education}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Advisors - Modified Section */}
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">
              Strategic <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Growth Mentors</span>
            </h3>
            <p className="text-lg text-gray-300">
              Experienced mentors guiding our journey with their invaluable expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="group relative bg-black p-8 rounded-3xl border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-amber-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-amber-500/40 relative">
                      <img 
                        src={advisor.photo} 
                        alt={advisor.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-amber-500 p-1 rounded-full">
                        {advisor.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                        {advisor.name}
                      </h3>
                      <p className="text-amber-400 font-semibold text-sm uppercase tracking-wide mb-3">
                        {advisor.role}
                      </p>
                      <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300 mb-4">
                        {advisor.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-amber-500/20">
                    <div className="flex items-center gap-2 text-amber-400 group-hover:text-amber-300 transition-colors duration-300">
                      <BookOpen className="w-4 h-4" />
                      <span className="text-sm font-medium">{advisor.education}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="relative py-20">
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="bg-black p-12 rounded-3xl border border-amber-500/30 backdrop-blur-sm">
            <Crown className="w-16 h-16 mx-auto mb-8 text-amber-400" />
            <h2 className="text-4xl font-bold mb-8">
              Our <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Commitment</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We believe in the power of technology to transform lives. Every product we build,
              every solution we create, is designed with one purpose: to make things better for people.
              Through AI innovation and thoughtful software development, we're not just building products -
              we're building a better future.
            </p>
            <div className="flex justify-center items-center gap-2 text-amber-400">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Serving People Through Innovation</span>
              <Sparkles className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-amber-500/20 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Crown className="w-6 h-6 text-amber-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Excellence in Every Endeavor
            </span>
          </div>
          <p className="text-gray-400">
            Building tomorrow's solutions with today's innovation
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;