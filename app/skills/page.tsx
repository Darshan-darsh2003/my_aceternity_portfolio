import { skills } from "@/data";
import React from "react";
import {
  BentoGrid,
  BentoGridItem,
  SkillCard,
} from "../components/ui/bento-grid";

interface WrapperProps {
  children: Skill[];
  title: string;
}

interface Skill {
  logo: string;
  name: string;
  description: string;
}

const Skills = () => {
  const languages = skills.languages;
  const frameworks = skills.frameworks;
  const sourceControl = skills.sourceControl;
  // const architecture = skills.architecture;
  const databases = skills.databases;
  const uiLibraries = skills.uiLibraries;
  const otherTools = skills.otherTools;

  return (
    <div className="py-20">
      <Wrapper title="Programming Languages">{languages}</Wrapper>
      <Wrapper title="Web Development">{frameworks.webDevelopment}</Wrapper>
      <Wrapper title="Mobile Development">{frameworks.android}</Wrapper>
      <Wrapper title="Source Control">{sourceControl}</Wrapper>
      <Wrapper title="Databases">{databases}</Wrapper>
      <Wrapper title="UI Libraries">{uiLibraries}</Wrapper>
      <Wrapper title="Other Tools">{otherTools}</Wrapper>
    </div>
  );
};

const Wrapper = ({ title, children }: WrapperProps) => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl md:text-2xl font-bold dark:text-white text-center">
        {title}
      </h1>
      <div className="mt-5 ">
        <BentoGrid className="max-w-7xl mx-auto">
          {children.map((item, i) => (
            <SkillCard
              key={i}
              title={item.name}
              description={item.description}
              logo={item.logo}
              // className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
};

export default Skills;
