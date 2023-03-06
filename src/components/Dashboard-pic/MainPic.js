import React from 'react';
import './MainPic.css';
import mainPic from './image/mainPic.jpg';


const MainPic = () => {

return (
    <div>
        <div className='picture'>
            <div>
                <img src={mainPic} alt=''/>
            </div>
        </div>
    </div>
)
}

export default MainPic