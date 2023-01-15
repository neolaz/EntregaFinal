import InstagramLogo from "../../img/instagramLogo.svg";
import TwitterLogo from "../../img/twitterLogo.svg";
import FacebookLogo from "../../img/facebookLogo.svg";

const Footer = () => {
    return (
        <footer className="bgHeaderFooter containerFooter">
            <a href="https://instagram.com/" target="_blank">
                <img className="imgSocialMedia" src={InstagramLogo} alt="Logo Instagram" />
            </a>
            <a href="https://twitter.com/" target="_blank">
                <img className="imgSocialMedia" src={TwitterLogo} alt="Logo Twitter" />
            </a>
            <a href="https://facebook.com/" target="_blank">
                <img className="imgSocialMedia" src={FacebookLogo} alt="Logo Facebook" />
            </a>
      </footer>
    );
}

export default Footer