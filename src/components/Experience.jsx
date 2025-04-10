import { EXPERIENCES } from "../constants";

export default function Experience() {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">Experience</h2>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-12 flex flex-wrap lg:justify-center"> {/* Reduced margin-bottom here */}
                        <div className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-1 font-semibold"> {/* Reduced margin-bottom here */}
                                {experience.role} -{" "}
                                <span className="text-sm text-purple-100">
                                    {experience.company}
                                </span>
                            </h6>
                            <ul className="list-disc list-outside pl-8">
                                {experience.description.map((item, index) => (
                                    <li key={index} className="list-item mb-2 text-neutral-400">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            {experience.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
