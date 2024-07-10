import './news.scss'

interface NewsCardParametrs{
    picture:string,
      data:string,
      headerNews: string,
      descriptionNews: string
}
export function NewsCards(parametrs:NewsCardParametrs){
    return(
        <div className="news-card-container">
            <img  className='img-news'src={parametrs.picture}/>
            <div className='img-news'>{parametrs.data}</div>
            <div className="header-news">{parametrs.headerNews}</div>
            <div className="description-news">{parametrs.descriptionNews}</div>
        </div>
    )
}