"use client"

import HeroGeometric from "@/components/Amenity forge/hero-geometric"
import Service from "@/components/Amenity forge/Services"
import Choose from "@/components/Amenity forge/Choose"
import Project from "@/components/Amenity forge/Projects"
import Result from "@/components/Amenity forge/Results"
import Review from "@/components/Amenity forge/Testimonials"
import Footer from "@/components/Amenity forge/footer"
import Navbar from "@/components/Amenity forge/navbar"

export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroGeometric />
      <Service/>
      <Choose/>
      <Project/>
      <Result/>
      <Review/>
      <Footer/>
    </div>
  );
}
