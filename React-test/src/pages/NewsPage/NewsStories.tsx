import './New.scss'
import {NewsCards} from '../../conponents/NewsComponents/NewsCard'


const newCards = [
  {
      picture: 'https://i.1.creatium.io/14/59/2d/7a1c484a5de50e5c436b26554e2ad9cb70/nastol.com_.ua-223487.jpg',
      data: '01/03/2024',
      headerNews: 'Semper eu pulvinar eget integer',
      descriptionNews: 'Pretium duis phasellus netus ac. Nunc nibh nunc integer feugiat et aliquam cras. Amet pharetra montes ipsum gravida tellus tellus.',

  },
  {
      picture: 'https://flagman-news.ru/news/2022050411_cover.jpg',
      data: '25/06/2024',
      headerNews: 'Semper eu pulvinar eget integer',
      descriptionNews: 'Pretium duis phasellus netus ac. Nunc nibh nunc integer feugiat et aliquam cras. Amet pharetra montes ipsum gravida tellus tellus.',

  },
  {
      picture: 'https://www.infranews.ru/wp-content/uploads/2016/04/port.jpg',
      data: '25/03/2023',
      headerNews: 'Semper eu pulvinar eget integer',
      descriptionNews: 'Pretium duis phasellus netus ac. Nunc nibh nunc integer feugiat et aliquam cras. Amet pharetra montes ipsum gravida tellus tellus.',

  },
  {
      picture: 'https://prognosist.ru/wp-content/uploads/2023/05/nmtp-4.jpg',
      data: '25/03/2023',
      headerNews: 'Semper eu pulvinar eget integer',
      descriptionNews: 'Pretium duis phasellus netus ac. Nunc nibh nunc integer feugiat et aliquam cras. Amet pharetra montes ipsum gravida tellus tellus.',

  }
];




function NewsComponent() {
  return (
    <>
      <div className="news-container">
        <div className="description-of-company-news-container">
          <div className="header-and-jump-button">
            <div className="header-company-news-container">Новости</div>
            <a className="all-news-button" href="">все новости</a>
          </div>
          <div className='new-card-container'>
          {newCards.map((card)=><NewsCards picture={card.picture} data={card.data} headerNews={card.headerNews} descriptionNews={card.descriptionNews}/>)}
          </div>
        </div>
      </div>
    </>
  )
}
export default NewsComponent