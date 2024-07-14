import '../../pages/FirstScreenPage/FirstScreen.scss'
import '../../pages/ServiceDescriptionPage/Service.scss'

interface ServiceCardParametrs {
  img: string,
  text: string,
}
export function ServiceCard(parametrs: ServiceCardParametrs) {
  return (
    <div className="frame-content-big-container">
      <img src={parametrs.img} />
      <div className="text-of-frame-content">{parametrs.text}</div>
    </div>
  )
}
export function ServiceCardSmall(parametrs: ServiceCardParametrs) {
  return (
    <div className="frame-content">
      <img className="shipment" src={parametrs.img} />
      <div className="text-of-frame-content">{parametrs.text}</div>
    </div>
  )
}