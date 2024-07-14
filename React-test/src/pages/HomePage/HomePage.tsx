
import logo from '../../assets/img/Vectorlogo.png'
import { MenuNavigationComponent } from '../../conponents/HomeComponents/MenuNavigation';
import './Home.scss';
import { Language } from '../../conponents/HomeComponents/Language';

const navigationMenuLinkName = [
    {
        title: 'О компании'
    },
    {
        title: 'Типы услуг'
    },
    {
        title: 'Для клиентов'
    },
    {
        title: 'Новости'
    }
];
const language = [
    {
        value: '1',
        title: 'RU'
    },
    {
        value: '2',
        title: 'ENG'
    },

]


function WebsiteCapComponent() {

    return (
        <>
            <div className="apex">
                <div className='info-container'>
                    <img className="logo" src={logo} alt="picture-logo" />
                    <div className="menu-navigation">
                    {navigationMenuLinkName.map((element) => <MenuNavigationComponent title={element.title} />)}
                        <input type="text" className="input-with-icon " />
                        <section>
                            <select className="language ">
                            {language.map((element) => <Language value={element.value} title={element.title} />)}
                            </select>
                        </section>
                    </div>
                </div>
            </div>

        </>
    )
}

export default WebsiteCapComponent