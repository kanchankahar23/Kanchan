import photo from "../assets/MyPhoto.jpg";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center
      bg-[#E6F99D] text-[#041122]
      dark:bg-[#041122] dark:text-white transition">

      <img src={photo} className="w-64 h-64 rounded-full shadow-lg mb-6" />

      <h1 className="text-4xl font-bold text-center">
        I'm <span className="text-yellow-500">Kanchan Kahar</span><br />
        Frontend Developer
      </h1>

      <p className="mt-3 text-gray-700 dark:text-gray-400">
        Frontend Developer from Jabalpur, India
      </p>

      <div className="flex gap-4 mt-6">
        <a href="mailto:kaharkanchan884@gmail.com"><Mail /></a>
        <a href="https://github.com/kanchankahar23"><Github /></a>
        <a href="https://linkedin.com"><Linkedin /></a>
        <a href="https://x.com"><Twitter /></a>
      </div>
    </section>
  );
};

export default Hero;
