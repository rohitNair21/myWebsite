import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import About from '../About'
import './index.scss'

const Layout = () => {
    return (
        <div className='App'>
            <Sidebar />
            <div className ='page'>
                <span className='tags top-tags'>&lt;body&gt;</span>
            <Outlet />
            <span className ='tags bottom-tags'>
                &lt;/body&gt;
            <br />
            <span className='bottom-tag-html'>&lt;/html&gt;</span>
            </span>
            </div>
            <About />
        </div>
    )
}
export default Layout