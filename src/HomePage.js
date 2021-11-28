import "./styles/homepage.css"
import {FeaturedArticle, FeaturedListItem, ListItem} from "./components/ArticleItems";

const ARTICLES = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet consectetur adipiscing elit etiam",
        content: "",
        author: "",
        cover: "https://via.placeholder.com/600",
        date: "Aujourdhui",
        opened: false,
        featured: true,
        listFeatured: false,
        videoCover: false
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet consectetur adipiscing elit etiam",
        content: "",
        author: "",
        cover: "https://via.placeholder.com/600",
        date: "Aujourdhui",
        opened: false,
        featured: true,
        listFeatured: false,
        videoCover: true,
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet consectetur adipiscing elit etiam",
        content: "",
        author: "",
        cover: "https://via.placeholder.com/200",
        date: "Aujourdhui",
        opened: false,
        featured: false,
        listFeatured: false,
        videoCover: false,
    },
    {
        id: 4,
        title: "Lorem ipsum dolor sit amet consectetur adipiscing elit etiam",
        content: "",
        author: "",
        cover: "https://via.placeholder.com/200",
        date: "Hier",
        opened: true,
        featured: false,
        listFeatured: false,
        videoCover: false,
    },
    {
        id: 5,
        title: "Lorem ipsum dolor sit amet consectetur adipiscing elit etiam",
        content: "",
        author: "",
        cover: "https://via.placeholder.com/200",
        date: "Aujourdhui",
        opened: false,
        featured: false,
        listFeatured: false,
        videoCover: false,
    },
    {
        id: 6,
        title: "Lorem ipsum dolor sit amet consectetur adipiscing elit etiam",
        content: "",
        author: "",
        cover: "https://via.placeholder.com/200",
        date: "Il y a 5j.",
        opened: true,
        featured: false,
        listFeatured: false,
        videoCover: false,
    },
    {
        id: 7,
        title: "Lorem ipsum dolor sit amet consectetur adipiscing elit etiam",
        content: "",
        author: "",
        cover: "https://via.placeholder.com/600",
        date: "Il y a 3j.",
        opened: true,
        featured: false,
        listFeatured: true,
        videoCover: false,
    },
    {
        id: 8,
        title: "Lorem ipsum dolor sit amet consectetur adipiscing elit etiam",
        content: "",
        author: "",
        cover: "https://via.placeholder.com/200",
        date: "Hier",
        opened: false,
        featured: false,
        listFeatured: false,
        videoCover: false,
    },
    {
        id: 9,
        title: "Lorem ipsum dolor sit amet consectetur adipiscing elit etiam",
        content: "",
        author: "",
        cover: "https://via.placeholder.com/200",
        date: "Hier",
        opened: false,
        featured: false,
        listFeatured: false,
        videoCover: false,
    },
    {
        id: 10,
        title: "Lorem ipsum dolor sit amet consectetur adipiscing elit etiam",
        content: "",
        author: "",
        cover: "https://via.placeholder.com/200",
        date: "Hier",
        opened: false,
        featured: false,
        listFeatured: false,
        videoCover: false,
    },
    {
        id: 11,
        title: "Lorem ipsum dolor sit amet consectetur adipiscing elit etiam",
        content: "",
        author: "",
        cover: "https://via.placeholder.com/200",
        date: "Hier",
        opened: false,
        featured: false,
        listFeatured: false,
        videoCover: false,
    },
    {
        id: 12,
        title: "Lorem ipsum dolor sit amet consectetur adipiscing elit etiam",
        content: "",
        author: "",
        cover: "https://via.placeholder.com/200",
        date: "Hier",
        opened: false,
        featured: false,
        listFeatured: false,
        videoCover: false,
    },
    {
        id: 13,
        title: "Lorem ipsum dolor sit amet consectetur adipiscing elit etiam",
        content: "",
        author: "",
        cover: "https://via.placeholder.com/200",
        date: "Hier",
        opened: false,
        featured: false,
        listFeatured: false,
        videoCover: false,
    },
    {
        id: 14,
        title: "Lorem ipsum dolor sit amet consectetur adipiscing elit etiam",
        content: "",
        author: "",
        cover: "https://via.placeholder.com/200",
        date: "Hier",
        opened: false,
        featured: false,
        listFeatured: false,
        videoCover: false,
    },
    {
        id: 15,
        title: "Lorem ipsum dolor sit amet consectetur adipiscing elit etiam",
        content: "",
        author: "",
        cover: "https://via.placeholder.com/200",
        date: "Hier",
        opened: false,
        featured: false,
        listFeatured: false,
        videoCover: false,
    },
]
const HomePage = () => {
    return(
        <main>
           <div className="intro">
               <div className="intro-articles">
                   {
                       ARTICLES.map(item => {
                           if (item.featured){
                               return <FeaturedArticle key={item.id} title={item.title} cover={item.cover} date={item.date} videoCover={item.videoCover} />
                           }
                           return null
                       })
                   }
               </div>
           </div>
            <div className="content">
                <div className="articles">
                    {
                        ARTICLES.map(item => {
                            if (item.id > 11){
                                return  null
                            }
                            if (item.featured){
                                return null
                            }
                            if (item.listFeatured){
                                return <FeaturedListItem key={item.id} title={item.title} cover={item.cover} date={item.date} videoCover={item.videoCover} opened={item.opened}/>
                            }
                            return<ListItem key={item.id} title={item.title} cover={item.cover} date={item.date} videoCover={item.videoCover} opened={item.opened}/>
                        })
                    }
                </div>
                <div className="newsletter">
                   Hello there
                </div>
                <div className="articles">
                    {
                        ARTICLES.map(item => {
                            if (item.id < 12){
                                return  null
                            }
                            if (item.featured){
                                return null
                            }
                            if (item.listFeatured){
                                return <FeaturedListItem key={item.id} title={item.title} cover={item.cover} date={item.date} videoCover={item.videoCover} opened={item.opened}/>
                            }
                            return<ListItem key={item.id} title={item.title} cover={item.cover} date={item.date} videoCover={item.videoCover} opened={item.opened}/>
                        })
                    }
                </div>
            </div>
        </main>
    )
}

export default HomePage