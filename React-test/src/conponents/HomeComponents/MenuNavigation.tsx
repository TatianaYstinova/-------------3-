import { Link } from 'react-router-dom';
import '../../pages/HomePage/Home.scss'

interface MenuNavigationParams {
    title: string;
  
}

export function MenuNavigationComponent(parametrs: MenuNavigationParams) {

    return (
        <Link to='another-path' className="enumeration-menu-navigation">Для клиентов</Link>
        
          
        
    )
}

