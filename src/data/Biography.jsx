import React from 'react'
import INFO from './user'
import Progress from "./Progress";
import Socials from '../components/about/socials';
import Popup from '../components/Popup';



const Biography = () => {
    const dob = "1999-01-01"
    const today = new Date();
    const birthDate = new Date(dob);

    let age = today.getFullYear() - birthDate.getFullYear();

    // Check if the birthday has already occurred this year
    if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return (
        <section className="text-gray-600 body-font mt-5" style={{ backgroundColor: '#f2f3f6' }}>
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/4 w-25 mb-10 md:mb-0">
                    <img class="object-cover object-center rounded" alt="hero" src="logo.png" width="300px" height="auto" style={{ borderRadius: '30px' }} />
                    <div className='text-center mt-2'>
                        <p >Full Stack Developer</p>
                        <h4 className='font-bold'>{INFO.main.name}</h4>
                        {/* social icon */}
                        <Socials />

                        <Popup />
                    </div>
                </div>

                <div class="lg:flex-grow md:w-3/4 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-left">
                    <div className="container">
                        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">About me</h1>
                        <p class="mb-8 leading-relaxed">{INFO.homepage.description}</p>
                        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">My Skill level</h1>
                       <Progress />


                       {/* <div className="row">
                            <div className="col-sm">
                                <ul style={{ listStyleType: 'disc' }}>
                                    <li className='mb-4'><span style={{ fontWeight: 'bold' }}>Name:</span> {INFO.main.name}</li>
                                    <li className='mb-4'><span style={{ fontWeight: 'bold' }}>Date of birth:</span> {INFO.main.dob}</li>
                                    <li className='mb-4'><span style={{ fontWeight: 'bold' }}>Age:</span> {age} </li>
                                    <li className='mb-4'><span style={{ fontWeight: 'bold' }}>Address:</span> {INFO.main.address}</li>

                                </ul>
                            </div>
                            <div className="col-sm">
                                <ul style={{ listStyleType: 'disc', padding: 0 }}>
                                    <li className='mb-4'><span style={{ fontWeight: 'bold' }}>Phone:</span> {INFO.main.phone}</li>
                                    <li className='mb-4'><span style={{ fontWeight: 'bold' }}>Email:</span> {INFO.main.email}</li>
                                    <li className='mb-4'><span style={{ fontWeight: 'bold' }}>Interest:</span> {INFO.main.intrest}</li>
                                    <li className='mb-4'><span style={{ fontWeight: 'bold' }}>Freelance:</span> {INFO.main.freelance}</li>
                                </ul>

                            </div>
                        </div> */}

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Biography