import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import INFO from '../user';
import EducationCard from './Components/EducationCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Works from '../../components/homepage/works';




const Education = () => {

    return (
        <div >
            <div className="d-flex gap-3 pb-5 mt-5">
                <div className="p-2 flex-fill border border-secondary-subtle rounded-lg border-opacity-50 border-3 rounded-3 p-3">
                    <div className=' border-bottom gap-4' style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#f7f7f7' }}>
                        <FontAwesomeIcon icon={faGraduationCap} />
                        <h3>Education</h3>
                    </div>
                    <div className='d-flex ' style={{ display: 'flex', flexDirection: 'column' }}>
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

                <div>
                    <div className="p-2 flex-fill border border-secondary-subtle rounded-lg border-opacity-50 border-3 rounded-3 p-3 mb-4" style={{ textAlign: 'left' }}>
                        <div className="border-bottom gap-4 d-flex flex-row m-2" style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#f7f7f7' }}>
                            <FontAwesomeIcon icon={faCogs} />
                            <h3>Knowledge</h3>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{INFO.knowledge.skill1}</li>
                            <li className="list-group-item">{INFO.knowledge.skill2}</li>
                            <li className="list-group-item">{INFO.knowledge.skill3}</li>
                            <li className="list-group-item">{INFO.knowledge.skill4}</li>
                            <li className="list-group-item">{INFO.knowledge.skill5}</li>
                            <li className="list-group-item">{INFO.knowledge.skill6}</li>
                        </ul>
                    </div>


                    <Works />
                </div>

            </div>
        </div>



    )
}

export default Education