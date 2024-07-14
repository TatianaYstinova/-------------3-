import background from '../../assets/img/Rectangle 23.png'

import frameContentSmallContainerPictureOne from '../../assets/img/5de9345a02f273c052aab067605777a9.jpg'
import frameContentSmallContainerPictureTwo from '../../assets/img/image-1-2022-08-09T164739.218-1280x720.jpg'
import frameContentSmallContainerPictureThree from '../../assets/img/756438816786277.jpg'
import frameContentSmallContainerPictureFour from '../../assets/img/22_amtp.jpg'
import { ServiceCardSmall, ServiceCard } from '../../conponents/ServiceComponents/ServiceCard'

import './FirstScreen.scss'

const serviceCardSmall=[
    {
        img:frameContentSmallContainerPictureOne,
        text:'Погрузочно-разгрузочная деятельность'
    },
    {
        img:frameContentSmallContainerPictureTwo,
        text:'Хранение грузов'
    },
    {
        img:frameContentSmallContainerPictureThree,
        text:'Складские операции'
    },
    {
        img:frameContentSmallContainerPictureFour,
        text:'Швартовые операции'
    },
]

function FirstScreenComponent() {
    return (
        <>
            <div className="first-screen-container ">
                <img className='background' src={background} alt=" " />
                <div className="text-of-company-and-types-of-services-container">
                    <div className="info-text-container">
                        <span className="header-text">Тавимский морской порт VISMA</span>
                        <span className="subheading-text">Vel posuere nibh odio placerat massa vel tellus tortor. Varius eget nunc
                            scelerisque etiam felis facilisi ante viverra sem. Nunc eros elementum.</span>
                        <div className="about-company-button">
                            <button className="text-of-button">О компании</button>
                        </div>
                    </div>
                    <div className="types-services-container">
                        {serviceCardSmall.map((card)=><ServiceCardSmall img={card.img} text={card.text}/>)}
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default FirstScreenComponent