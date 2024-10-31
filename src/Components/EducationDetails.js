import React from "react";

function EducationDetails({ img, position, JobContent, duration }) {
  return (
    <article className="pt-8 border-b-2 border-dark-content pb-5 dark:border-light-content border-opacity-20 dark:border-opacity-20">
      <img
        src={img}
        alt="Lecture Details"
        className="w-full h-auto"
        style={{ transform: "scale(0.7)", objectFit: "cover"}}
      />
      <div className="flex justify-between items-center">
        <h1 className="text-content md:text-lg lg:text-xl">{position}</h1>
      </div>
      <div className="flex justify-between pt-2">
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center pr-5">
            <p className="text-content text-xs md:text-sm font-light pl-1">{JobContent}</p>
          </div>
        </div>
        <p className="text-content text-xs md:text-sm font-light pl-1 min-w-fit">{duration}</p>
      </div>
    </article>
  );
}

export default EducationDetails;

