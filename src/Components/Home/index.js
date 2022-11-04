import { useEffect, useState } from 'react';
import AnimatedLetters from '../Animations';
import './index.scss';
const Home = () => {
const [letterClass, setLetterClass] = useState('text-animate');
const roArray = ['R','O','H','I','T',' ','N','A','I','R'];  
    return(
        <div className="home-page">
            <div className="text-zone">
            <h1>  
            <span className={letterClass}>H</span> 
            <span className={letterClass}>i</span>    
            <span className={letterClass}>,</span>    
            <span className={letterClass}> </span>    
            <span className={letterClass}>I</span>    
            <span className={letterClass}>'</span>    
            <span className={letterClass}>m</span>   
             </h1>
            <h2>
            <AnimatedLetters letterClass={letterClass}
            strArray={roArray}
            index={15}/>
            </h2>    
            <br/>
            <h3> COMPUTER SCIENCE STUDENT / INNOVATOR / DEVELOPER</h3>
            </div>
        </div>
    )
}

export default Home