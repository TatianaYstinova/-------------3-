import '../../pages/HomePage/Home.scss'

interface MenuNavigationParams {
    title: string
}

export function MenuNavigationComponent(parametrs: MenuNavigationParams) {

    return (
        <a className="enumeration-menu-navigation" href="">{parametrs.title}</a>
    )
}