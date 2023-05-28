import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, logo1, logo2, title, description, linkText, link, type, image } = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link}>
					<div className="project-container " >

						<img className="card-img-top" src={image} alt="..." />
						<div className="card-body " style={{ paddingTop: '-10px' }}>
							<div className="project-title">{title}</div>
							<div className="project-logo" style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
								<img src={logo} alt="logo" />
								<img src={logo1} alt="logo" />
								<img src={logo2} alt="logo" />
							</div>

							<div className="project-description">{type}</div>
							<div className="project-link">
								<a href={link} className="btn btn-primary btn-sm ">Live</a>
								<a href={linkText} className="btn btn-outline-primary btn-sm ">Code</a>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
