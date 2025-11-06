import React from 'react'
import photo from '../assets/MyPhoto.jpg'
import { Facebook, Instagram, Github, Linkedin, Mail, TwitchIcon, X, XCircleIcon, Twitter } from "lucide-react";

const Hero = () => {
  return (
    <div id='home' className="bg-[#041122] scroll-smooth flex flex-col items-center text-center p-8 min-h-screen justify-center">
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
        <button
         onClick={() => window.open('https://docs.google.com/document/d/14zauZN3uIKa-J8IPAvM3CA3d0jvuqR-_/edit?usp=drive_link&ouid=102829990487948564426&rtpof=true&sd=true', '_blank')} className="border border-[#E6F99D] text-[#E6F99D] px-4 py-2 rounded-lg font-bold hover:bg-[#E6F99D] hover:text-[#041122] transition">My Resume</button>
      </div>
      <div className="flex gap-4 justify-center mt-5 ">
      <a href="mailto:kaharkanchan884@gmail.com" className="btn btn-square btn-outline border-[#E6F99D] text-[#E6F99D] hover:bg-[#c4d389] hover:text-[#041122] transition ">
          <Mail className="w-5 h-5" />
        </a>
      <a href="https://x.com/KanchanKah90265" className="btn btn-square btn-outline border-[#E6F99D] text-[#E6F99D] hover:bg-[#c4d389] hover:text-[#041122] transition">
          <Twitter className="w-5 h-5" />
        </a>
        <a href="https://github.com/kanchankahar23" className="btn btn-square btn-outline border-[#E6F99D] text-[#E6F99D] hover:bg-[#c4d389] hover:text-[#041122] transition">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/kanchan-kahar-096903319" className="btn btn-square btn-outline border-[#E6F99D] text-[#E6F99D] hover:bg-[#c4d389] hover:text-[#041122] transition">
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </div>
  )
}

export default Hero
