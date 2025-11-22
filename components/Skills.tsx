import React from "react";
import Section from "./Section";
import { SKILLS } from "../constants";
import { motion } from "framer-motion";

/**
 * Simple mapping from skill name to existing filename in public/assets/skills/
 * Update values here if filenames change.
 */
const SKILL_ICON_MAP: Record<string, string> = {
  ReactJS: "1.svg",
  "Tailwind CSS": "2.svg",
  HTML5: "3.svg",
  CSS3: "4.svg",
  JavaScript: "5.svg",
  "Responsive Design": "6.svg",
  Java: "7.svg",
  SpringBoot: "8.svg", // prefer "Spring Boot" exact match
  Servlet: "9.svg",
  Hibernate: "10.svg",
  JDBC: "11.svg",
  MySQL: "12.svg",
  Oracle: "13.svg",
  Git: "14.svg",
  GitHub: "15.svg",
  VSCode: "16.svg",
  Canva: "17.svg",
  ChatGPT: "18.svg",
  Cursor: "19.svg",
  Gemini: "20.svg",
  Copilot: "21.svg"
};

/** safe slug generator as fallback (reactjs -> reactjs, tailwind css -> tailwind-css) */
const slugify = (s: string) =>
  s
    .toString()
    .toLowerCase()
    .replace(/[.+]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .trim();

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const Skills: React.FC = () => {
  const allSkills = SKILLS.flatMap((category) =>
    category.skills.map((skill) => ({ name: skill, category: category.category }))
  );

  return (
    <Section id="skills" title="Technical Skills" subtitle="My tech stack & tools">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
      >
        {allSkills.map((skill, i) => {
          const slug = slugify(skill.name);
          const fileName = SKILL_ICON_MAP[skill.name] ?? `${slug}.svg`;
          const iconPath = `/assets/skills/${fileName}`;

          return (
            <motion.div
              key={`${skill.name}-${i}`}
              variants={itemVariants}
              whileHover={{y: -8,scale: 1.06,boxShadow: "0 18px 40px -10px rgba(59,130,246,0.35)" }}
              className="bg-slate-800/60 p-5 rounded-xl border border-slate-700 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-default min-h-[160px]"
            >
              <div className="mb-3 h-12 w-12 flex items-center justify-center relative">
                <img
                  src={iconPath}
                  alt={`${skill.name} logo`}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.display = "none";
                    const fallback = img.parentElement?.querySelector(".skill-fallback") as HTMLElement | null;
                    if (fallback) {
                      fallback.classList.remove("hidden");
                      fallback.classList.add("flex");
                    }
                  }}
                />

                <div className="skill-fallback hidden w-10 h-10 md:w-12 md:h-12 bg-slate-700 rounded-full items-center justify-center text-slate-300 font-bold text-lg">
                  {skill.name.charAt(0)}
                </div>
              </div>

              <h3 className="font-medium text-slate-100 text-sm md:text-base">{skill.name}</h3>
              <span className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">
                {skill.category.split(" ")[0]}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
};

export default Skills;
