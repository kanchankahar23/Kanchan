import React from 'react'
import photo from '../assets/MyPhoto.jpg'
import { Facebook, Instagram, Github, Linkedin, Mail, TwitchIcon, X, XCircleIcon, Twitter } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-[#041122] flex flex-col items-center text-center p-8 min-h-screen justify-center">
      <img
        src={photo}
        alt="Kanchan Kahar"
        className="w-72 h-72 rounded-full object-cover mb-4 shadow-lg"
      />

      <h1 className="text-4xl font-bold text-white">
        <span className="text-[#E6F99D] ">I'm Kanchan Kahar,</span> Frontend Developer based in India
      </h1>

      <p className="text-gray-400 mt-3 max-w-md">
        I am a frontend developer from Jabalpur, India with 1 year of experience.
      </p>

      <div className="flex gap-4 mt-5">
        <button className="bg-[#d2e38e] text-[#041122] font-bold px-4 py-2 rounded-lg hover:bg-[#E6F99D] transition">Explore my Work</button>
        <button className="border border-[#E6F99D] text-[#E6F99D] px-4 py-2 rounded-lg font-bold hover:bg-[#E6F99D] hover:text-[#041122] transition">My Resume</button>
      </div>
      <div className="flex gap-4 justify-center mt-5 ">
      <a href="https://facebook.com" className="btn btn-square btn-outline border-[#E6F99D] text-[#E6F99D] hover:bg-[#c4d389] hover:text-[#041122] transition ">
          <Mail className="w-5 h-5" />
        </a>
      <a href="https://instagram.com" className="btn btn-square btn-outline border-[#E6F99D] text-[#E6F99D] hover:bg-[#c4d389] hover:text-[#041122] transition">
          <Twitter className="w-5 h-5" />
        </a>
        <a href="https://github.com" className="btn btn-square btn-outline border-[#E6F99D] text-[#E6F99D] hover:bg-[#c4d389] hover:text-[#041122] transition">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://github.com" className="btn btn-square btn-outline border-[#E6F99D] text-[#E6F99D] hover:bg-[#c4d389] hover:text-[#041122] transition">
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </div>
  )
}

export default Hero
