import { Link } from "react-router-dom";
import "./footer.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";

export const Footer = () => {
    return (
        <div className="footer" style={{justifyContent:'end'}}>
            <strong>&copy;ShoesMart.in</strong>
            {/* <div>&#169; Developed By Aayush Batra</div> */}
            {/* <div className="social-media">
                <Link
                    to={"https://www.linkedin.com/in/aayush-batra-475ab9201/"}
                    target="_blank"
                >
                    <AiOutlineLinkedin />
                </Link>
                <Link
                    to={
                        "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=aayushbatra33@gamil.com"
                    }
                    target="blank"
                >
                    <CgMail />
                </Link>
                <Link to={"https://github.com/BatraAayush"} target="_blank">
                    <AiFillGithub />
                </Link>
            </div> */}
        </div>
    );
};
