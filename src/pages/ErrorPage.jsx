import React from 'react';
import ErrorImg from "../assets/App-Error.png"
const ErrorPage = () => {
    return (
        <div className='flex justify-center mt-30'>
            <img src={ErrorImg} alt="" />
        </div>
    );
};

export default ErrorPage;