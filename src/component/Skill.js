import { useState } from 'react';

const SkillsSection = () => {
  const [showMore, setShowMore] = useState({
    hardSkills: false,
    softSkills: false,
    additionalExpertise: false,
  });

  const toggleShowMore = (section) => {
    setShowMore(prevState => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <section id="skills" className="py-12">
      <div className="container mx-auto px-6 text-white pt-5">
        <h2 className="text-4xl font-bold text-center mb-8 pb-4">Skills</h2>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Hard Skills */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Hard Skills</h3>
            <p className="">
              {showMore.hardSkills
                ? `As a full-stack developer and electrical & computer engineer, I bring extensive expertise in programming languages including C++, Java, TypeScript,and JavaScript. My proficiency spans front-end frameworks like Tailwind CSS, React.js, React-Native, NextJS, Vue.js, and Flutter, as well as back-end technologies such as Node.js, ExpressJS,Nest.js and TypeScript. I am experienced with databases including PostgreSQL, MariaDB, MongoDB, and MySQL, and have hands-on experience with APIs and query languages like GraphQL. My skills extend to the customization and maintenance of ERPNext software and integrating software solutions with hardware systems using Multism, MATLAB, and CISCO.`
                : `As a full-stack developer and electrical & computer engineer, I have extensive expertise in programming languages like C++, Java, TypeScript, JavaScript,and JavaScript.`
              }
            </p>
            <div className='flex justify-end mt-4'>
                <button
                onClick={() => toggleShowMore('hardSkills')}
                className="text-blue-400 hover:underline"
                >
                {showMore.hardSkills ? 'Show Less' : 'See More'}
                </button>
            </div>
          </div>

            {/* Soft Skills */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
                <p className="">
                    {showMore.softSkills
                        ? `My technical abilities are complemented by a range of soft skills that have proven invaluable throughout my career. I excel in crafting detailed documentation, including proposals and user manuals, particularly for ERPNext systems. I provide effective training and ongoing support for users, and I am adept at collaborating with cross-functional teams to drive project success. My strong problem-solving skills enable me to swiftly identify and resolve issues, ensuring smooth project execution. Additionally, I have honed my communication skills to convey technical information clearly to both technical and non-technical stakeholders.`
                        : `My technical abilities are complemented by a range of soft skills that have been invaluable throughout my career. I excel in crafting detailed documentation, including proposals and user manuals, particularly for ERPNext systems.`
                    }
                </p>
                <div className='flex justify-end mt-4'>
                    <button
                        onClick={() => toggleShowMore('softSkills')}
                        className="text-blue-400 hover:underline"
                    >
                        {showMore.softSkills ? 'Show Less' : 'See More'}
                    </button>
                </div>
            </div>

          {/* Additional Expertise */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Additional Expertise</h3>
            <p className="">
              {showMore.additionalExpertise
                ? `In addition to core software development, I possess significant expertise in cybersecurity, networking, and system configurations. This broad knowledge base allows me to address a variety of challenges and implement secure, efficient solutions. My commitment to continuous learning ensures I stay abreast of industry trends, enabling me to deliver innovative and user-friendly solutions that meet evolving client needs.`
                : `In addition to core software development, I possess significant expertise in cybersecurity, networking, and system configurations.`
              }
            </p>
            <div className='flex justify-end mt-4'>
                <button
                    onClick={() => toggleShowMore('additionalExpertise')}
                    className="text-blue-400 hover:underline"
                >
                    {showMore.additionalExpertise ? 'Show Less' : 'See More'}
                </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
