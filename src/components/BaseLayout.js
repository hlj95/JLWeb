import '../styles/BaseLayout.css'
import Footer from './Footer'
import Navigation from "./Nav"


function BaseLayout(props) {
    return (
        <div id="layout">
            
            <Navigation />
            <div id="children">{props.children}</div>
            <Footer />
        </div>
    )
}

export default BaseLayout

