import { useState } from 'react';
import '../CSS/pages.css';

function Homepage() {

    const [clicked,setClicked] = useState(false);

    const handleClick = () => {
        setClicked(prev => !prev);
    }
    
    return (
        <div>
            <h1 className="title">Home</h1>
            <div className="grid-parent" onClick={handleClick}>
                <div className={`container size-1 ${clicked ? "containerCenter" : ""}`} >
                {console.log(clicked) || null}  
                    <p className="text">Hello i am Digo a Student in Universidade do Minho neste momento no segundo ano com uma imensa curiosidade a aprender ainda mais sobre programas</p>
                </div>
                <div className="container size-2">
                    <p className="text">Hello i am Diogo a Student in Universidade do Minho neste momento no segundo ano com uma imensa curiosidade a aprender ainda mais sobre programas</p>
                </div>
                <div className="container size-3">
                    <p className="text">Hello i am Diogo a Student in Universidade do Minho neste momento no segundo ano com uma imensa curiosidade a aprender ainda mais sobre programas</p>
                </div>
                <div className="container">
                    <p className="text">Hello i am Diogo a Student in Universidade do Minho neste momento no segundo ano com uma imensa curiosidade a aprender ainda mais sobre programas</p>
                </div>
                <div className="container size-1">
                    <p className="text">Hello i am Diogo a Student in Universidade do Minho neste momento no segundo ano com uma imensa curiosidade a aprender ainda mais sobre programas</p>
                </div>
                <div className="container size-2">
                    <p className="text">Hello i am Diogo a Student in Universidade do Minho neste momento no segundo ano com uma imensa curiosidade a aprender ainda mais sobre programas</p>
                </div>
                <div className="container size-3">
                    <p className="text">Hello i am Diogo a Student in Universidade do Minho neste momento no segundo ano com uma imensa curiosidade a aprender ainda mais sobre programas</p>
                </div>
                <div className="container">
                    <p className="text">Hello i am Diogo a Student in Universidade do Minho neste momento no segundo ano com uma imensa curiosidade a aprender ainda mais sobre programas</p>
                </div>
                <div className="container size-1">
                    <p className="text">Hello i am Diogo a Student in Universidade do Minho neste momento no segundo ano com uma imensa curiosidade a aprender ainda mais sobre programas</p>
                </div>
                <div className="container size-2">
                    <p className="text">Hello i am Diogo a Student in Universidade do Minho neste momento no segundo ano com uma imensa curiosidade a aprender ainda mais sobre programas</p>
                </div>
                <div className="container size-3">
                    <p className="text">Hello i am Diogo a Student in Universidade do Minho neste momento no segundo ano com uma imensa curiosidade a aprender ainda mais sobre programas</p>
                </div>
                <div className="container">
                    <p className="text">Hello i am Diogo a Student in Universidade do Minho neste momento no segundo ano com uma imensa curiosidade a aprender ainda mais sobre programas</p>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
