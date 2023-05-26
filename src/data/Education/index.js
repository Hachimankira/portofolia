import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import INFO from '../user';
import EducationCard from './Components/EducationCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Education = () => {

    return (
        <div >
            <div className="d-flex gap-3 pb-5">
                <div className="p-2 flex-fill border border-secondary-subtle rounded-lg border-opacity-50 border-3 rounded-3 p-3">
                <i class="fa fa-graduation-cap"></i>
                    <h3 className=' border-bottom'>Education</h3>
                    <div className='d-flex' style={{ display: 'flex', flexDirection: 'column' }}>
                        {
                            INFO.education.map((data => {
                                return (
                                    <EducationCard data={data} name={data.name} />

                                )
                            }))
                        }

                    </div>
                </div>
                {/* <div className="p-2 flex-fill">
                    <h1>Experience</h1>
                    <div className='d-flex' style={{ display: 'flex', flexDirection: 'column' }}>
                        {
                            INFO.experience.map((data => {
                                return (
                                    <ExprienceCard data={data} name={data.name} />

                                )
                            }))
                        }

                    </div>
                </div> */}

                <div className="p-2 flex-fill border border-secondary-subtle rounded-lg border-opacity-50 border-3 rounded-3 p-3" style={{ textAlign: 'left' }}>
                    <h3 className='border-bottom'>Software skills</h3>
                    <div className='mt-2'>
                    <div className='d-flex'>
                        <div className='p-8 flex-fill'><h5>{INFO.software.skill1}</h5></div>
                    </div>
                    <br/>
                    <div className='d-flex'>
                        <div className='p-8 flex-fill'><h5>{INFO.software.skill2}</h5></div>
                    </div>
                    <br/>
                    <div className='d-flex'>
                        <div className='p-8 flex-fill'><h5>{INFO.software.skill3}</h5></div>
                    </div>
                    <br/>
                    <div className='d-flex'>
                        <div className='p-8 flex-fill'><h5>{INFO.software.skill4}</h5></div>
                    </div>
                    <br/>
                    <div className='d-flex'>
                        <div className='p-8 flex-fill'><h5>{INFO.software.skill5}</h5></div>
                    </div>
                    </div>
                </div>

            </div>
        </div>



    )
}

export default Education