import { Link } from 'react-router-dom';

const ProjectCard = () => {
	return (
			<Link to="/projects/single-project" aria-label="Single Project">
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
					<div>
						<img
							src="/project1.jpg"
							className="rounded-t-xl border-none"
							alt="Single Project"
						/>
					</div>
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
							Karuna hospital
						</p>
						<span className="text-lg text-ternary-dark dark:text-ternary-light">
							React, Node
						</span>
					</div>
				</div>
			</Link>
	);
};

export default ProjectCard;