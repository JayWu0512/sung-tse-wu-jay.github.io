import React from "react";

function EducationDetails({ img, position, JobContent, duration }) {
  return (
    <article className="pt-4 border-b-2 border-dark-content pb-3 dark:border-light-content border-opacity-20 dark:border-opacity-20">
      <img
        src={img}
        alt="Lecture Details"
        className="w-full h-auto"
        style={{ transform: "scale(0.85)", objectFit: "cover", marginBottom: "-10px" }}
      />
      <div className="flex justify-between items-center mt-2">
        <h1 className="text-content md:text-lg lg:text-xl" style={{ whiteSpace: "pre-line" }}>{position}</h1>
      </div>
      <div className="flex justify-between pt-1">
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center pr-5">
            <p className="text-content text-xs md:text-sm font-light pl-1" style={{ whiteSpace: "pre-line" }}>
              {JobContent}
            </p>
          </div>
        </div>
        <p className="text-content text-xs md:text-sm font-light pl-1 min-w-fit">{duration}</p>
      </div>
    </article>
  );
}

export default EducationDetails;

