import background from './assets/img/Rectangle 23.png'
import pictureOne from './assets/img/5de9345a02f273c052aab067605777a9.jpg'
import pictureTwo from './assets/img/image-1-2022-08-09T164739.218-1280x720.jpg'
import pictureThree from './assets/img/756438816786277.jpg'
import pictureFour from './assets/img/22_amtp.jpg'
import './firstScreen.scss'

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
                        <div className="frame-content">
                            <img className="shipment" src={pictureOne} />
                            <div className="text-of-frame-content">Погрузочно-разгрузочная деятельность</div>
                        </div>
                        <div className="frame-content">
                            <img className="shipment" src={pictureTwo} />
                            <div className="text-of-frame-content storage-of-goods">Хранение грузов</div>
                        </div>
                        <div className="frame-content">
                            <img className="shipment" src={pictureThree} />
                            <div className="text-of-frame-content">Складские операции</div>
                        </div>
                        <div className="frame-content">
                            <img className="shipment" src={pictureFour} />
                            <div className="text-of-frame-content">Швартовые операции</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FirstScreenComponent