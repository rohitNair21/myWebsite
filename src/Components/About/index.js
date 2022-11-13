import './index.scss';
import myResume from '../../assets/Resume.pdf';
const About = () => {
    return(
        <div className='About'>
            I'm currently enrolled at the
            <h1>
            University of Calgary
            </h1>
            where I am studying for my BSc in Computer Science. I am very interested in Human-Computer interactions! I am also interested in:
            <ul>
                <li>
                    Working out 💪🏽
                </li>
                <li>
                    Developing personal projects 👨🏽‍💻
                </li>
                <li>
                    Volunteering 🤝
                </li>
                <li>
                    Entrepreneurship and innovation 📈
                </li>
                <li>
                    Blockchain networks ⛓
                </li>
            </ul>
            <a href={myResume} 
            download={myResume}>
                <div className='Button'>
                    <button>
                     &#x3e;My resume&#60;
                    </button>
                </div>
            </a>
        </div>
    )
}


export default About