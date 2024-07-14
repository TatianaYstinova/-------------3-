import '../../pages/NewsPage/New.scss'

interface NewsCardParametrs{
    picture:string,
      data:string,
      headerNews: string,
      descriptionNews: string
}
export function NewsCards(parametrs:NewsCardParametrs){
    return(
        <>
        <div className='new-card'>
            <img  className='img-news'src={parametrs.picture}/>
            <div className='news-date'>{parametrs.data}</div>
            <div className="header-news">{parametrs.headerNews}</div>
            <div className="description-news">{parametrs.descriptionNews}</div>
        </div>
        </>
        
    )
}