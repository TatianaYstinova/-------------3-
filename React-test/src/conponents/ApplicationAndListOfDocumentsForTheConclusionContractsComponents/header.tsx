import '../../pages/ApplicationAndListOfDocumentsForTheConclusionContracts/ApplicationAndListOfDocumentsForTheConclusionContracts.scss'

interface HeaderParam {
    children: React.ReactNode
}
export function Header(parametrs: HeaderParam) {
    return (
        <div className='header-container'>{parametrs.children}</div>
    )
}