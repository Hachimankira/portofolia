import React from 'react'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkIcon from '@mui/icons-material/Work';
import GroupIcon from '@mui/icons-material/Group';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { Icon } from '@mui/material';

const Statics = () => {
    return (
        <section className="text-gray-600 body-font mt-5">
            <div className="container ">
                <div className="flex flex-wrap -m-4 text-center">
                <div className="p-4 md:w-1/2 lg:w-1/4">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <WorkIcon fontSize='large'/>
                            <h2 className="title-font font-medium text-3xl text-gray-900">5+ years</h2>
                            <p className="leading-relaxed">Experience</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/2 lg:w-1/4">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <BusinessCenterIcon fontSize='large' />
                            <h2 className="title-font font-medium text-3xl text-gray-900">20+</h2>
                            <p className="leading-relaxed">Projects</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/2 lg:w-1/4">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <GroupIcon fontSize='large' />
                            <h2 className="title-font font-medium text-3xl text-gray-900">1.3K+</h2>
                            <p className="leading-relaxed">Happy Customer</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/2 lg:w-1/4">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <EmojiEventsIcon fontSize='large'/>
                            <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
                            <p className="leading-relaxed">Awards</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Statics