import React from 'react'
import WebIcon from '@mui/icons-material/Web';
import INFO from "../data/user";
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';

const WhatIDo = (props) => {
    const { icon, title } = props;

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-2 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">What I DO</h1>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }} >
                    {INFO.whatIDo.map((val, key) => {
                        return (
                            <>
                                <Grid container spacing={2}>
                                    <Grid item xs={3}>
                                        <Card sx={{ minWidth: 275 }} className='mt-2 hover:shadow-xl border-l-2 border-gray-200 border-opacity-75 bg-gray-100 bg-opacity-75 px-10 pt-8 pb-8'>
                                            <CardContent>
                                                <div style={{ display: 'flex', justifyContent: 'center' }}> {val.icon}</div>
                                                <Typography variant="h5" component="div" align='center' className='pt-8'>
                                                    {val.title}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <div className='flex  cursor-pointer' style={{alignItems: 'center'}}>
                                                    <Button size="small">Learn More</Button>
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" >
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </div>
                                            </CardActions>
                                        </Card>
                                    </Grid>

                                </Grid>

                                {/* <div className="xl:w-1/3 lg:w-1/3 md:w-full px-8 pt-8 pb-8 ml-2 rounded-lg overflow-hidden text-center relative border-l-2 border-gray-200 border-opacity-75 bg-gray-100 bg-opacity-75 hover:shadow-xl">
                                    <div className="xl:w-1/3 lg:w-1/3 md:w-full" >
                                        <div style={{ transform: "scale(2)" }}>{val.icon}</div>
                                        <div className='pt-4'>
                                            <h1 className="text-lg sm:text-xl text-gray-900 font-bold title-font mb-2"> {val.title} </h1>
                                            <a className="text-indigo-500 inline-flex items-center cursor-pointer text-decoration-none">Learn More
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div> */}
                            </>
                        )
                    })}

                </div >
            </div>
        </section>

    )

}

export default WhatIDo

