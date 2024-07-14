import '../../pages/CompanyInfoPage/CompanyInfo.scss'

interface RareRequestButtonParam {
    header: string,
    description: string
}
export function RareRequestButton(parametrs: RareRequestButtonParam) {
    return (
        <>
        <div className="rate-request-header">{parametrs.header}</div> 
        <div className="rate-request-description">{parametrs.description}</div>
        </>
    )
}

