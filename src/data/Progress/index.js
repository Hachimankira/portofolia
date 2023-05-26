import React from 'react';
import ProgressBar from 'react-customizable-progressbar';

const App = () => {
    return (

        <div>
            <div className='text-center'>
            <h1>Progress Bar</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <ProgressBar progress={60} radius={100} children='React'strokeColor='#89e1f7' initialAnimation= 'True' initialAnimationDelay={20}/>
                <ProgressBar progress={60} radius={100} children='Node'strokeColor='#75AD63' initialAnimation= 'True' initialAnimationDelay={20}/>
                <ProgressBar progress={80} radius={100} children='PHP'strokeColor='#4f5b93' initialAnimation= 'True' initialAnimationDelay={20}/>
                <br/>
                <br/>
                <ProgressBar progress={60} radius={100} children='PhotoShop'strokeColor='#2DAAFF' initialAnimation= 'True' initialAnimationDelay={20}/>
                <ProgressBar progress={60} radius={100} children='Illustrator'strokeColor='#FF9B00' initialAnimation= 'True' initialAnimationDelay={20}/>
                
                {/* Add more ProgressBar instances as needed */}
            </div>

        </div>
    );
};

export default App;
