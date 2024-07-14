import video from '../../assets/img/Морской порт Санкт-Петербург (Saint Petersburg seaport 4k).mp4'
import './CompanyInfo.scss'
import {RareRequestButton} from '../../conponents/CompanyInfoComponents/RateRequesr'

function CompanyInfoComponent() {
  return (
    <>
      <div className="company-information-and-rate-request-container">
        <div className="company-description-and-rate-request-and-video">
          <div className="text-of-company-container">
            <div className="header-text-of-company-container">О компании</div>
            <div className="info-text-company-description">
              <div className="subtitle">Tristique orci consectetur sit felis. Sed ac auctor tellus lobortis. Enim non turpis nulla nec a sapien sit amet molestie. Et id malesuada gravida sit volutpat. Volutpat sed lectus elementum diam neque facilisis in. Convallis nibh sem in viverra quis. Interdum pharetra.</div>
              <div className="subtitle paragraph ">Libero nunc porttitor id mi convallis ultricies convallis erat. At sagittis nisi at in diam sit.</div>
              <div className="subtitle">
                <ol>
                  <li className="numbering" itemType="disc">Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                  <li className="numbering" itemType="disc">Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                  <li className="numbering" itemType="disc">Vivamus tincidunt non lectus odio magna semper odio risus.
                    Vivamus tincidunt non lectus odio magna semper odio risus.Vivamus tincidunt non lectus odio magna semper odio risus.
                  </li>
                  <li className="numbering" itemType="disc">Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                  <li className="numbering" itemType="disc">Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                </ol>
                <div className="subtitle paragraph">Quam accumsan mauris enim quam. A commodo ultrices urna vitae nibh rhoncus at nisl. Duis nibh libero ut enim. Metus aliquam cursus molestie sapien risus. Suspendisse volutpat.</div>
                <div className="subtitle">
                  <ol>
                    <li className="numbering" itemType="disc">Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                    <li className="numbering" itemType="disc">Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                    <li className="numbering" itemType="disc">Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                    <li className="numbering" itemType="disc">Vivamus tincidunt non lectus odio magna semper odio risus.</li>

                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="video-and-rate-request-container">
            <div className="video-container">
              <video className="video" controls>
                <source src={video} type="video/mp4"/>
              </video>
            </div>
             <RareRequestButton/>
          </div>
        </div>
      </div>
    </>
  )
}
export default CompanyInfoComponent