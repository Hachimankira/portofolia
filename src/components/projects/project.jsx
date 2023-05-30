import React from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import "./styles/project.css";

const Project = (props) => {
	const { logo, logo1, logo2, title, description, linkText, link, type, image } = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link}>

					<Card sx={{ maxWidth: 445 }} className="mb-5 hover:shadow-xl pb-4">
						<CardMedia
							sx={{ height: 345 }}
							image={image}
							title="green iguana"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								{title}
							</Typography>
							<div className="project-logo" style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
								<img src={logo} alt="logo" />
								<img src={logo1} alt="logo" />
								<img src={logo2} alt="logo" />
							</div>

						</CardContent>
						<CardActions>
							<Button size="small" variant="contained" href={link}>Live</Button>
							<Button size="small" variant="outlined" href={linkText}>Code</Button>
						</CardActions>
					</Card>

					{/* <div className="project-container hover:shadow-xl" >
							<img className="card-img-top" src={image} alt="..." />
							<div className="card-body " style={{ paddingTop: '-10px' }}>
								<div className="project-title">{title}</div>
								<div className="project-logo" style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
									<img src={logo} alt="logo" />
									<img src={logo1} alt="logo" />
									<img src={logo2} alt="logo" />
								</div>

								<div className="project-description" >{type}</div>
								<div className="project-link" >
									<a href={link} className="btn btn-primary btn-sm ">Live</a>
									<a href={linkText} className="btn btn-outline-primary btn-sm ">Code</a>
								</div>
						</div>
					</div> */}
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
