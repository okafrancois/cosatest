import "../styles/article-items.css"
import {playIcon} from "../img/svgIcons";

export const FeaturedArticle = props => {
    const {cover, date, title, videoCover} = props
    return(
        <div className={`featured-item ${videoCover ? "video-cover" : ""}`}>
            {
                videoCover &&
                <label className="commands">
                    <button>{playIcon}</button>
                    PLay
                </label>
            }
            <div className="cover">
                <img src={cover} alt=""/>
            </div>
            <div className="details">
                <h2 className="title">
                    <span className={"underline-effect"}>{title}</span>
                </h2>
                <div className="meta">
                    <a href="/">Rutrum</a>
                    {!videoCover && <span className="date">{date}</span>}
                </div>
            </div>
        </div>
    )
}

export  const FeaturedListItem = props => {
    const {cover, date, title, videoCover, opened} = props
    return(
        <div className={"featured-list-item"}>
            <div className="details">
                <h2 className="title">
                    <span className={"underline-effect"}>{title}</span>
                </h2>
                <div className="meta">
                    <a href="/">Rutrum</a>
                    <span className="date">{date} {opened && <div className={"opened-icon"}/>}</span>
                </div>
            </div>
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
        </div>
    )
}

export const ListItem = props => {
    const {cover, date, title, videoCover, opened} = props
    return(
        <div className={"list-item"}>
            <div className="details">
                <h2 className="title">
                    <span className={"underline-effect"}>{title}</span>
                </h2>
                <div className="meta">
                    <a href="/">Rutrum</a>
                    <span className="date">{date} {opened && <div className={"opened-icon"}/>}</span>
                </div>
            </div>
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
        </div>
    )
}
