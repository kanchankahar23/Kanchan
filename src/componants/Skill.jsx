const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind"];

const Skill = () => {
  return (
    <section className="py-20
      bg-[#E6F99D] dark:bg-[#041122] transition">

      <h2 className="text-center text-5xl font-bold text-[#041122] dark:text-white mb-10">
        My Skills
      </h2>

      <div className="flex justify-center gap-6 flex-wrap">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-6 py-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
