import {twitterIcon, instaIcon} from "../img/svgIcons";

const SocialLinks = () => (
    <ul className="social-links">
        <li className={"intagram-links"}><a href="/">{instaIcon}</a></li>
        <li className={"twitter-links"}><a href="/">{twitterIcon}</a></li>
    </ul>
)

export default SocialLinks