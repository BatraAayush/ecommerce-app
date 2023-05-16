import { Link } from "react-router-dom"
import "./footer.css"

export const Footer = () => {
    return <div className="footer">
        <strong>Shoes Mart</strong>
        <div>&#169; Developed By Aayush Batra</div>
        <div className="social-media">
            <Link>LinkedIn</Link>||
            <Link>Twitter</Link>||
            <Link>Github</Link>||
        </div>
    </div>
}