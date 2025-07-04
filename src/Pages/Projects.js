import React, { useState, useEffect, useCallback } from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Components/projectDetails.js";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isFading, setIsFading] = useState(false); // Control fade animation
  const [zoomedImage, setZoomedImage] = useState(null);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false); // Track animation state

  const handleProjectClick = (project) => {
    setIsFading(true); // Start fade-out animation
    setTimeout(() => setSelectedProject(project), 300); // Switch project after fade-out
  };

  const closeProject = useCallback(() => {
    if (!zoomedImage) {
      setIsFading(true);
      setTimeout(() => setSelectedProject(null), 300);
    }
  }, [zoomedImage]);

  // useEffect for fade-in animation on change of selectedProject
  useEffect(() => {
    if (selectedProject !== null || selectedProject === null) {
      setIsFading(false); // Fade-in animation once project is switched
    }
  }, [selectedProject]);

  // Detect clicks outside of the project to close the selected project
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!zoomedImage) {
        closeProject();
      }
    };

    if (selectedProject) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => document.removeEventListener("click", handleOutsideClick);
  }, [selectedProject, zoomedImage, closeProject]);

  const openZoomedImage = (img) => {
    setIsTransitioning(true); // Start transition
    setZoomedImage(img);
    setTimeout(() => {
      setIsImageVisible(true);
      setIsTransitioning(false); // End transition after animation
    }, 500); // Match animation duration
  };

  const closeZoomedImage = (e) => {
    e.stopPropagation(); // Prevent closing the project list
    setIsTransitioning(true); // Start transition
    setIsImageVisible(false);
    setTimeout(() => {
      setZoomedImage(null);
      setIsTransitioning(false); // End transition after animation
    }, 500); // Match animation duration
  };

  return (
    <main className="container mx-auto max-width pt-10 mb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Projects
        </h1>

        {/* Render Focused Project */}
        {selectedProject ? (
          <div
            className="relative flex flex-col md:flex-row gap-8 mt-10"
            style={{
              opacity: isFading ? 0 : 1,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            {/* Left Side (Image, Title, Appendix) */}
            <div className="md:w-1/3">
              <img
                src={selectedProject.image}
                alt="Project Thumbnail"
                loading="lazy"
                className="rounded-xl shadow-xl shadow-slate-300 dark:shadow-slate-900 w-full object-cover"
              />
              <h1 className="dark:text-light-heading font-semibold text-lg pt-4">
                {selectedProject.title}
              </h1>
              {selectedProject.appendix && (
                <div className="mt-4 text-sm text-gray-500 whitespace-pre-line">
                  {selectedProject.appendix.map((item, index) => (
                    <p key={index} className="mb-2">
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Right Side (Description, Links, Additional Images) */}
            <div className="md:w-2/3">
              <div className="mb-4">
                {selectedProject.description?.map((desc, index) => (
                  <p
                    key={index}
                    className="text-content mb-2 text-justify leading-relaxed"
                  >
                    {desc}
                  </p>
                ))}
              </div>
              <div className="md:w-2/3">
                <div className="mb-4">
                  {selectedProject.links && selectedProject.links.length > 0
                    ? selectedProject.links.map((link, index) => (
                        <a
                          key={index}
                          href={link}
                          target="_blank" // Opens the link in a new tab
                          rel="noopener noreferrer" // For security
                          className="text-blue-500 underline block mb-2 hover:text-blue-700"
                        >
                          {link}
                        </a>
                      ))
                    : null}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {selectedProject.imgs?.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Screenshot ${index + 1}`}
                    className="w-full h-auto rounded-md cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering the closeProject click
                      openZoomedImage(img);
                    }}
                    style={{
                      pointerEvents: isTransitioning ? "none" : "auto",
                    }} // Disable clicks during transition
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div
            className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 transition-opacity duration-500"
            style={{
              opacity: isFading ? 0 : 1,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            {React.Children.toArray(
              projectDetails.map((project) => (
                <Project
                  {...project}
                  onClick={() => handleProjectClick(project)}
                />
              ))
            )}
          </div>
        )}
      </section>

      {/* Zoomed Image Overlay */}
      {zoomedImage && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-opacity duration-500 ${
            isImageVisible
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={closeZoomedImage} // Close zoomed image
        >
          <img
            src={zoomedImage}
            alt="Zoomed"
            className={`max-w-6xl max-h-[80vh] object-contain rounded-lg transform transition-transform duration-500 ${
              isImageVisible ? "scale-100" : "scale-90"
            }`}
          />
        </div>
      )}
    </main>
  );
}

export default Projects;