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

	const live = (props) => {
		window.open(link, '_blank');
	};
	const github = (props) => {
		window.open(linkText, '_blank');
	};

	return (
		<React.Fragment>
			<div className="project">
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
							<Button size="small" variant="contained" onClick={live}>Live</Button>
							<Button size="small" variant="outlined" onClick={github}>Code</Button>
						</CardActions>
					</Card>
			</div>
		</React.Fragment>
	);
};

export default Project;
