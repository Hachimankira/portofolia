import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import INFO from '../user';
import EducationCard from './Components/EducationCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faGraduationCap } from '@fortawesome/free-solid-svg-icons';




const Education = () => {

    return (
        <div >
            <div className="d-flex gap-3 pb-5">
                <div className="p-2 flex-fill border border-secondary-subtle rounded-lg border-opacity-50 border-3 rounded-3 p-3">
                    <div className=' border-bottom gap-4' style={{display: 'flex', flexDirection: 'row'}}>
                        <FontAwesomeIcon icon={faGraduationCap} />
                        <h3>Education</h3>
                    </div>
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

                <div className=' border-bottom gap-4' style={{display: 'flex', flexDirection: 'row'}}>
                        <FontAwesomeIcon icon={faCogs} />
                        <h3>Software Skills</h3>
                    </div>
                    <div className='mt-2'>
                        <div className='d-flex'>
                            <div className='p-8 flex-fill'><h5>{INFO.software.skill1}</h5></div>
                        </div>
                        <br />
                        <div className='d-flex'>
                            <div className='p-8 flex-fill'><h5>{INFO.software.skill2}</h5></div>
                        </div>
                        <br />
                        <div className='d-flex'>
                            <div className='p-8 flex-fill'><h5>{INFO.software.skill3}</h5></div>
                        </div>
                        <br />
                        <div className='d-flex'>
                            <div className='p-8 flex-fill'><h5>{INFO.software.skill4}</h5></div>
                        </div>
                        <br />
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