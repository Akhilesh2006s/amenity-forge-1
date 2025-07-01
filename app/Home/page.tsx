"use client"

import HeroGeometric from "@/components/Amenity forge/hero-geometric"
import Service from "@/components/Amenity forge/Services"
import Choose from "@/components/Amenity forge/Choose"
import Project from "@/components/Amenity forge/Projects"
import Result from "@/components/Amenity forge/Results"
import Navbar from "@/components/Amenity forge/navbar"

export default function Page() {
  return (
    <>
    <Navbar />
    <HeroGeometric />
    <Service/>
    <Choose/>
    <Project/>
    <Result/>
    </>
  );
}
