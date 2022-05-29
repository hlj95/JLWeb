import '../styles/BaseLayout.css'
import Footer from './Footer'
import Navigation from "./Nav"
import Contact from './Contact'

function BaseLayout(props) {
    return (
        <div id="layout">
            
            <Navigation />
            <Contact />
            <div id="children">{props.children}</div>
            <br/>
            
            <Footer />
        </div>
    )
}

export default BaseLayout

