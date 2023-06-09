import React from 'react'
import INFO from '../../data/user'

const Hero = () => {
  return (
    <div className='mb-5'>
      <div className="homepage-first-area">
      <div className="homepage-first-area-left-side" style={{ backgroundColor: '#f2f3f6', borderTopLeftRadius: '30 px', borderBottomLeftRadius: '30 px' }}>
        <div className='p-4'>
          <h4>Hello, My name is</h4>
          <div className="title homepage-title">
            {INFO.main.name}
          </div>
          <div className="subtitle homepage-subtitle">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">{INFO.homepage.title}</h1>
            <h4></h4>
          </div>
          <div className="flex justify-left mt-5">
            <a href="/CV.pdf" download="CV.pdf">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Download CV
              </button>
            </a>

          </div>
        </div>
      </div>

      <div className="homepage-first-area-right-side">
        <div className="">
          <div className="">
            <img style={{ borderTopRightRadius: '30 px', borderBottomRightRadius: '30 px', width: '1200px', height: 'auto'}}
              src="code.png"
              alt="about"
              className="homepage-image"
            />
          </div>
        </div>
      </div>
    </div>
    </div>

  )
}

export default Hero