import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo,logo1, logo2, title, description, linkText, link, type,image } = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link}>
					<div className="project-container card" >
						<div className="card-body">
							<img src={image} className="card-img-top" alt="..." />
							<div className="project-title">{title}</div>
							<div className="project-logo" style={{display: 'flex', flexDirection: 'row', gap: '15px'}}>
								<img src={logo} alt="logo" />
								<img src={logo1} alt="logo" />
								<img src={logo2} alt="logo" />
							</div>
							
							<div className="project-description">{type}</div>
							<div className="project-link">
								<div className="d-inline">
									<a href={linkText} className="btn btn-primary btn-sm mr-2">Live</a>
									<a href={link} className="btn btn-outline-primary btn-sm ml-2">Code</a>
								</div>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
