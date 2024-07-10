import './serviceDiscription.scss'

interface InfoTextServiceParametrs {
  text: string,
  img: string,
}
export function InfoTextButtonService(parametrs: InfoTextServiceParametrs) {
  return (
    <div className="frame-title-service-container">
      <div className="title-service">{parametrs.text}</div>
      <a className="png-file-link" href=""><img className="png" src={parametrs.img} /></a>
    </div>
  )
}