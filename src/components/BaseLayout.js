import '../styles/BaseLayout.css'
import Footer from './Footer'
import Navigation from "./Nav"
import Contact from './Contact'
import Services from './Services'

function BaseLayout(props) {
    return (
        <div className="layout">
            
            <Navigation />
            <div className='blContact'><Contact /></div>
            
            
            <div className="children">{props.children}</div>
            <br/>
            
            <Footer />
        </div>
    )
}

export default BaseLayout

