import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";
import ProjectCard from "./ProjectCard";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						logo1={project.logo1}
						logo2={project.logo2}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
						type={project.type}
						image={project.image}
					/>
					

				</div>
			))}
		</div>
	);
};

export default AllProjects;
