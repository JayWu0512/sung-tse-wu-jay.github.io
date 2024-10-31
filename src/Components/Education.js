import React, { useState, useRef, useEffect } from "react";
import EducationDetails from "./EducationDetails.js";

function Education({ position, company, location, duration, item }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    setHeight(isExpanded ? contentRef.current.scrollHeight : 0);
  }, [isExpanded]);

  return (
    <article className="pt-8 border-b-2 border-dark-content pb-5 dark:border-light-content border-opacity-20 dark:border-opacity-20">
      <div className="flex justify-between items-center">
        <h1 className="text-content md:text-lg lg:text-xl">{position}</h1>
        <button
          onClick={toggleExpand}
          className="btn bg-greenbg text-green-text text-xs inline-block rounded-3xl px-3 py-1 min-w-fit"
        >
          {isExpanded ? "Hide Details" : "Details..."}
        </button>
      </div>
      <div className="flex justify-between pt-2">
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center pr-5">
            <p className="text-content text-xs md:text-sm font-light pl-1">
              {company}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-content text-xs md:text-sm font-light pl-1">
              {location}
            </p>
          </div>
        </div>
        <p className="text-content text-xs md:text-sm font-light pl-1 min-w-fit">
          {duration}
        </p>
      </div>
      <div
        ref={contentRef}
        style={{
          height: `${height}px`,
          overflow: "hidden",
          transition: "height 0.3s ease-in-out",
        }}
      >
        <div>
          {React.Children.toArray(
            item.map(({ img, Position, Duration, JobContent }) => (
              <EducationDetails
                img={img}
                position={Position}
                duration={Duration}
                JobContent={JobContent}
              />
            ))
          )}
        </div>
      </div>
    </article>
  );
}

export default Education;
