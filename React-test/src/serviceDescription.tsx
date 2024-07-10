import './serviceDiscription.scss'
import linkToPNG from './assets/img/Frame 50.svg'
import frameContentBigContainerPictureOne from './assets/img/poronajsk-lim.jpg'
import frameContentBigContainerPictureTwo from './assets/img/22_amtp.jpg'
import frameContentBigContainerPictureThree from './assets/img/razvitie-podyezdnoy-infrastruktury-v-portu-vladivostok.webp'
import frameContentBigContainerPictureFour from './assets/img/2404721.webp'
import frameContentBigContainerPictureFive from './assets/img/756438816786277.jpg'
import frameContentBigContainerPictureSix from './assets/img/po_vl_20_10.jpg'
import { ServiceCard } from './ServiceCard'
import { InfoTextButtonService } from './InfoTextService'

const serviceCards = [
  {
    img: frameContentBigContainerPictureOne,
    text: 'Хранение грузов'
  },
  {
    img: frameContentBigContainerPictureTwo,
    text: 'Складские операции'
  },
  {
    img: frameContentBigContainerPictureThree,
    text: 'Буксировка / сопровождение судов'
  },
  {
    img: frameContentBigContainerPictureFour,
    text: 'Швартовые операции'
  },
  {
    img: frameContentBigContainerPictureFive,
    text: 'Агентское обслуживание судов'
  },
  {
    img: frameContentBigContainerPictureSix,
    text: 'Погрузочно-разгрузочная деятельность'
  }
];
const infoTextButtonCard = [
  {
    text: 'Тарифы на услуги по обеспечению контроля доступа на территорию VISMA на 2022 год',
    img: linkToPNG
  },
  {
    text: 'Условия определения цены договора и тарифы на работы',
    img: linkToPNG
  },
  {
    text: 'Договор перевалки (типовая форма)',
    img: linkToPNG
  }
]

function ServiceDiscriptionComponent() {
  return (
    <>
      <div className="service-description-container">
        <div className="description-services-and-service-cards-container">
          <div className="info-text-service-container">
            <div className="header-service">Услуги</div>
            {infoTextButtonCard.map((card) => <InfoTextButtonService img={card.img} text={card.text} />)}
          </div>
          <div className="types-services-container-big">
            {serviceCards.map((card) => <ServiceCard img={card.img} text={card.text} />)}
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceDiscriptionComponent