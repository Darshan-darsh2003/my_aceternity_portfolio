import React from "react";
import { SparklesCore } from "../components/ui/sparkles";

const ProjectsPage = () => {
  return (
    <div>
      <div className="w-full absolute inset-0 h-full pointer-events-none">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
