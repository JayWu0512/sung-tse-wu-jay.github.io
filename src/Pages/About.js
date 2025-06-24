import React from "react";
import Work from "../Components/Work";
import Education from "../Components/Education";
import Certification from "../Components/Certification";
import { personalDetails, workDetails, eduDetails, certificationDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p
          className="text-content py-8 lg:max-w-3xl"
          style={{ whiteSpace: "pre-line" }}
          dangerouslySetInnerHTML={{ __html: personalDetails.about }}
        />
      </section>
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration, Link}) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
              link={Link}
            />
          ))
        )}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Duration, EducationDetails, Link }) => (
            <Education
              position={Position}
              company={Company}
              location={Location}
              duration={Duration}
              item={EducationDetails}
              link={Link}
            />
          ))
        )}
      </section>
      <section style={{ marginTop: '3rem' }}> 
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Certifications
        </h1>
        {React.Children.toArray(
          certificationDetails.map(({ Name, Issued_institution, Issued_time, Credential_ID, Classification, Link }) => (
            <Certification
              name={Name}
              issued_institution={Issued_institution}
              issued_time={Issued_time}
              credential_id={Credential_ID}
              classification={Classification}
              link={Link}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;

