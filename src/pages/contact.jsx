import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import "./styles/contact.css";
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
const getContactData = () => {
	return [
		{
			name: 'Phone',
			contact1: "9851185981",
			contact2: "9851185981"
		},
		{
			name: 'Email',
			contact1: "Sabin.sth444@gmail.com",
			contact2: "Sabin.sth444@gmail.com"
		},
		{
			name: 'Address',
			contact1: "Kathmandu, Nepal",
			contact2: "Kathmandu, Nepal"
		},
	];
}

const Contact = () => {
	

	const contactValue = getContactData();
	return (
		<React.Fragment>
			<div className="page-content mt-20">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<Typography variant="h2" component="div" align='center' className='pt-8'>
							Contact
						</Typography>
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div style={{ display: 'flex', flexDirection: 'row' }} >
						{contactValue.map((val, key) => {
							return (
								<>
									<Grid container spacing={2}>
										<Grid item xs={3}>
											<Card sx={{ minWidth: 275 }} className='mt-2 hover:shadow-xl border-l-2 border-gray-200 border-opacity-75 bg-gray-100 bg-opacity-75 px-10 pt-8 pb-8'>
												<CardContent>
													<div style={{ display: 'flex', justifyContent: 'center' }}> {val.name}</div>
													<Typography variant="h5" component="div" align='center' className='pt-8'>
														{val.contact1}
													</Typography>
													<Typography variant="h5" component="div" align='center' className='pt-8'>
														{val.contact2}
													</Typography>
												</CardContent>
											</Card>
										</Grid>

									</Grid>

								</>
							)
						})}

					</div >

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
