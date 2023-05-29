import React from 'react';
import ProgressBar from 'react-customizable-progressbar';


const App = () => {
    return (
        <div>
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700 dark:text-black">React</span>
                <span className="text-sm font-medium text-blue-700 dark:text-black">85%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-4 dark:bg-gray-700 mb-4" >
                <div className="bg-blue-600 h-4 rounded-full" style={{ width: '85%', backgroundColor: '#89e1f7' }}></div>
            </div>

            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700 dark:text-black">Node.js</span>
                <span className="text-sm font-medium text-blue-700 dark:text-black">90%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-4 dark:bg-gray-700 mb-4">
                <div className="bg-blue-600 h-4 rounded-full" style={{ width: '90%', backgroundColor: '#75AD63' }}></div>
            </div>

            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700 dark:text-black">PHP</span>
                <span className="text-sm font-medium text-blue-700 dark:text-black">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-4 dark:bg-gray-700 mb-4">
                <div className="bg-blue-600 h-4 rounded-full" style={{ width: '75%', backgroundColor: '#4f5b93' }}></div>
            </div>

            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700 dark:text-black">Python</span>
                <span className="text-sm font-medium text-blue-700 dark:text-black">70%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-4 dark:bg-gray-700 mb-4">
                <div className="bg-blue-600 h-4 rounded-full" style={{ width: '70%', backgroundColor: '#3771a2' }}></div>
            </div>

            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700 dark:text-black">Ruby</span>
                <span className="text-sm font-medium text-blue-700 dark:text-black">60%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-4 dark:bg-gray-700 mb-4">
                <div className="bg-blue-600 h-4 rounded-full" style={{ width: '60%', backgroundColor: '#b50e00' }}></div>
            </div>

        </div>
    );
};

export default App;
