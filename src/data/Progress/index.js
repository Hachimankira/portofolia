import React from 'react';
import ProgressBar from 'react-customizable-progressbar';


const App = () => {
    return (
        <div>
            <div className="text-center container">
                <h1>Progress Bar</h1>
            </div>
            <div className='row justify-content-center' style={{ display: 'flex', justifyContent: 'center' }}>
                <div className='col-lg-4 col-md-6 mb-4'>
                    <ProgressBar now={60} label="React" variant="info"
                        progress={60}
                        radius={70}
                        strokeColor="#89e1f7"
                        initialAnimation={true}
                        initialAnimationDelay={20}

                    >
                        <div className="progressbar-content">
                            <span className="progressbar-text">React</span>
                        </div>
                    </ProgressBar >
                </div>

                <div className='col-lg-4 col-md-6 mb-4'>
                    <ProgressBar
                        progress={60}
                        radius={70}
                        strokeColor="#75AD63"
                        initialAnimation={true}
                        initialAnimationDelay={20}
                    >
                        <div className="progressbar-content">
                            <span className="progressbar-text">Node</span>
                        </div>
                    </ProgressBar>
                </div>

                <div className='col-lg-4 col-md-6 mb-4'>
                    <ProgressBar
                        progress={80}
                        radius={70}
                        strokeColor="#4f5b93"
                        initialAnimation={true}
                        initialAnimationDelay={20}
                    >
                        <div className="progressbar-content">
                            <span className="progressbar-text">PHP</span>
                        </div>
                    </ProgressBar>
                </div>

                <div className='col-lg-4 col-md-6 mb-4'>
                    <ProgressBar
                        progress={60}
                        radius={70}
                        strokeColor="#2DAAFF"
                        initialAnimation={true}
                        initialAnimationDelay={20}
                    >
                        <div className="progressbar-content">
                            <span className="progressbar-text">PhotoShop</span>
                        </div>
                    </ProgressBar>
                </div>

                <div className='col-lg-4 col-md-6 mb-4'>
                    <ProgressBar
                        progress={60}
                        radius={70}
                        strokeColor="#FF9B00"
                        initialAnimation={true}
                        initialAnimationDelay={20}
                    >
                        <div className="progressbar-content">
                            <span className="progressbar-text">Illustrator</span>
                        </div>
                    </ProgressBar>
                </div>
                
                {/* Add more ProgressBar instances as needed */}
            </div>
        </div>
    );
};

export default App;
