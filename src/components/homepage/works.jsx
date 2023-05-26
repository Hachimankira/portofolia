import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./facebook.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Karuna Hospital</div>
							<div className="work-subtitle">
								IT officer
							</div>
							<div className="work-duration">2015 - 2017</div>
						</div>

						<div className="work">
							<img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Photopasal.com</div>
							<div className="work-subtitle">
								FullStack developer and <br/>Graphics Designing
							</div>
							<div className="work-duration">2017 - 2019</div>
						</div>

						<div className="work">
							<img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Software Pasal</div>
							<div className="work-subtitle">
								CEO
							</div>
							<div className="work-duration">2019 - PRESENT</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
