import '../../pages/HomePage/Home.scss'

interface MenuNavigationParams {
    title: string;
    onClick?: () => void
}

export function MenuNavigationComponent(parametrs: MenuNavigationParams) {

    return (
        <a className="enumeration-menu-navigation" href="" onClick={(e) => {
            e.preventDefault();

            if (parametrs.onClick) {
                parametrs.onClick();
            }
        }}>{parametrs.title}</a>
    )
}