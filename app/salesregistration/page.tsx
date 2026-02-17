"use client"

import Navbar from "@/components/Amenity forge/navbar"
import Footer from "@/components/Amenity forge/footer"
import SalesRegistrationForm from "@/components/Amenity forge/SalesRegistrationForm"

export default function SalesRegistrationPage() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <SalesRegistrationForm />
      <Footer />
    </div>
  )
}
