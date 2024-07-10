import './serviceDiscription.scss'

interface ServiceCardParametrs {
  img: string,
  text: string,
}
export function ServiceCard(parametrs: ServiceCardParametrs) {
  return (
    <div className="frame-content-big-container">
      <img  src={parametrs.img} />
      <div className="text-of-frame-content">{parametrs.text}</div>
    </div>
  )
}