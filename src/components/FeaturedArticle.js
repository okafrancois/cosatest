import {playIcon} from "../img/svgIcons";
import "../styles/featured-article.css"

const FeaturedArticle = props => {
    const {cover, date, title, videoCover} = props
    return(
        <div className={"featured-item"}>
            <div className="cover">
                {
                    videoCover &&
                    <label className="commmands">
                        <button>{playIcon}</button>
                        PLay
                    </label>
                }
                <img src={cover} alt=""/>
            </div>
            <div className="details">
                <h2 className="title">
                    {title}
                </h2>
                <div className="meta">
                    <a href="/">Rutrum</a>
                    <span className="date">{date}</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedArticle