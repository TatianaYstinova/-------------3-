
import logo from './assets/img/Vectorlogo.png'
import './websiteCap.scss'

function WebsiteCapComponent() {

    return (
        <>
            <div className="apex">
                <div className='info-container'>
                    <img className="logo" src={logo} alt="picture-logo" />
                    <div className="menu-navigation">
                        <a className="enumeration-menu-navigation" href="">О компании</a>
                        <a className="enumeration-menu-navigation" href="">Типы услуг</a>
                        <a className="enumeration-menu-navigation" href="">Для клиентов</a>
                        <a className="enumeration-menu-navigation" href="">Новости</a>
                        <a className="enumeration-menu-navigation" href="">О компании</a>
                        <input type="text" className="input-with-icon " />
                        <section>
                            <select className="language ">
                                <option value="1">RU</option>
                                <option value="2">ENG</option>
                            </select>
                        </section>
                    </div>
                </div>
            </div>

        </>
    )
}

export default WebsiteCapComponent
