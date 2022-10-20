import { Link, NavLink } from 'react-router-dom'
import './index.scss'


import myPhoto from '../../assets/IMG-3865-modified.png'
import myPhoto2 from '../../assets/unnamed-modified.png'
import myPhoto3 from '../../assets/unnamed1-modified.png'
import myPhoto4 from '../../assets/rohit sut-modified.png'
import myLogo from '../../assets/ROHIT NAIR-modified.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEnvelopeSquare, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
    <Link className="pics" to='/'>
        <img src={myPhoto} alt="pics" />
    </Link>
    <Link className="pics" to='/'>
        <img src={myPhoto2} alt="pics" />
    </Link>
    <Link className="pics" to='/'>
        <img src={myPhoto3} alt="pics" />
    </Link>
    <Link className="pics" to='/'>
        <img src={myPhoto4} alt="pics" />
    </Link>
    <Link className="logo" to='/'>
        <img src={myLogo} alt="logo" />
    </Link>
    <ul>
        <li>
            <a target = "_blank" rel="noreferrer" href='https://www.linkedin.com/in/rohit-n-345957192/'>
                <FontAwesomeIcon icon={faLinkedin} color="#1e1919" />
            </a>
        </li>
        <li>
            <a target = "_blank" rel="noreferrer" href='https://github.com/rohitNair21'>
                <FontAwesomeIcon icon={faGithub} color="#1e1919" />
            </a>
        </li>
        <li>
            <a target = "_blank" rel="noreferrer" href='https://www.youtube.com/channel/UCUEa1pcJZyCDFhatBQivJhw/featured'>
                <FontAwesomeIcon icon={faYoutube} color="#1e1919" />
            </a>
        </li>
        <li>
            <a target = "_blank" rel="noreferrer" href='https://form.jotform.com/222915820871256'>
                <FontAwesomeIcon icon={faEnvelopeSquare} color="#1e1919" />
            </a>
        </li>
    </ul>
    <nav>
    </nav>
</div>   
) 

export default Sidebar