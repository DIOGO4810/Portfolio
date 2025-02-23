import { useState } from 'react';
import '../CSS/pages.css';

function Projetos() {

    const [clicked,setClicked] = useState(false);

    const handleClick = () => {
        setClicked(prev => !prev);
    }
    
    return (
        <div className='body' onClick={handleClick}>
            <h1 className="title">Home</h1>
            <div className="grid-parent" >
                <div className={`container size-1 ${clicked ? "containerCenter" : ""}`} >
                    <p className="text">projeots</p>
                </div>

                

            </div>
        </div>
    );
}

export default Projetos;
