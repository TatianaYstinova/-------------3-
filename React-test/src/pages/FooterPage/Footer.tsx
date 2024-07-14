import './footer.scss'
import address from '../../assets/img/carbon_location-filled.png'
import logoWhite from '../../assets/img/Vector.png'
import phone from '../../assets/img/Frame 68.png'

function FooterComponent(){
    return(
        <>
        <div className="footer-container">
        <div className="description-footer">
            <div className="address-and-phone-number">
                <div className="addres">
                    <img src={address}/>
                    <div className="text-addres">123456, г. Тавима, ул. Морская, д. 21</div>
                </div>
                <img className="logo-white" src={logoWhite} alt="picture-logo" />
                <img className="phone-and-mail" src={phone}/>
            </div>
            <div className="info-about-the-legal-entity-procurement-shareholders-about-the-company">
                    <div className="legal-entity-information">
                        <div className="header-legal-entity"> Информация о юр. лице</div>
                        <div className="text">ОГРН 1111111111111111</div>
                        <div className="text">ИНН 222222222222</div>
                        <div className="text">КПП 3333333333</div>
                        <div className="text">ОКПО 4444444444</div>
                        <div className="text">ОКТМО 2222222222222222</div>
                    </div>
                    <div className="procurement">
                        <div className="header-procurement">Закупки</div>
                        <a href="" className="text">Нормативные документы</a>
                        <a href="" className="text">Закупки на VISMA Order</a>
                        <a href="" className="text">Закупки на VISMA Tender</a>
                    </div>
                    <div className="shareholders">
                        <div className="header-shareholders">Акционерам</div>
                        <a href="" className="text"> Устав VISMA</a>
                        <a href="" className="text">Свидетельства госрегистрации</a>
                        <a href="" className="text">Список аффилированных лиц</a>
                        <a href="" className="text">Информация</a>
                        <a href="" className="text">Отчеты</a>
                    </div>
                    <div className="about-the-company">
                        <div className="header-about-the-company">Акционерам</div>
                        <a href="" className="text">Порт сегодня</a>
                        <a href="" className="text">Характеристики порта</a>
                        <a href="" className="text">История</a>
                        <a href="" className="text">Дипломы и награды</a>
                        <a href="" className="text">Транспортная безопасность</a>
                        <a href="" className="text">Экология</a>
                        <a href="" className="text">Правовая информация</a>
                    </div>
            </div>
        </div>
    </div>
        </>
    )
}
export default FooterComponent