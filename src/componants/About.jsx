import profile from "../assets/MyPhoto.jpg";

const AboutMe = () => {
  return (
    <section className="py-20 px-8
      bg-[#E6F99D] text-[#041122]
      dark:bg-[#041122] dark:text-white transition">

      <h2 className="text-5xl font-bold text-center mb-10">
        About <span className="text-yellow-500">Me</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-12">
        <img src={profile} className="w-72 rounded-lg shadow-lg" />

        <p className="max-w-xl text-gray-700 dark:text-gray-300">
          I am a passionate Frontend Developer who loves building
          responsive and modern web applications using React and Tailwind CSS.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
