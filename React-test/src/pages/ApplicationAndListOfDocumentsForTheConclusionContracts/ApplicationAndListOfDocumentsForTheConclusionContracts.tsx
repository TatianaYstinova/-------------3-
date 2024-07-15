import { Header } from '../../conponents/ApplicationAndListOfDocumentsForTheConclusionContractsComponents/header';
import FooterComponent from '../FooterPage/Footer';
import WebsiteCapComponent from '../HomePage/HomePage';
import './ApplicationAndListOfDocumentsForTheConclusionContracts.scss';



function ApplicationAndListOfDocumentsForTheConclusionContracts() {
  return (
    <>
      <div className='container'>
        <Header>Заявка и перечень документов для заключения договоров</Header>
        <div className='info-text-container-description'>
          <div className='headline'>Для рассмотрения возможности заключения договора контрагент должен предоставить следующие документы:</div>
          <ul className='listing'>
                  <li className="numbering" itemType="disc">заявку (оферту) на имя генерального директора VISMA Technology, которая подается на фирменном бланке организации и должна содержать сведения о виде работ и услуг, на которые контрагент предлагает заключить договор, номенклатуре груза и общем объеме на год с разбивкой по месяцам.</li>
          </ul>
          <div className='headline'>Для резидентов РФ (документы должны быть заверены подписью руководителя и печатью организации):</div>
          <ul className='listing'>
                  <li className="numbering" >копию выписки из ЕГРЮЛ (выданной не позднее одного месяца до даты заключения договора);</li>
                  <li className="numbering" itemType="disc">копии учредительных документов (устава, положения);</li>
                  <li className="numbering" itemType="disc">копию протокола или выписки из протокола о назначении исполнительного органа;</li>
                  <li className="numbering" itemType="disc">копию свидетельства о государственной регистрации;</li>
                  <li className="numbering" itemType="disc">копию приказа о назначении лица, действующего на основании положения;</li>
                  <li className="numbering" itemType="disc">копию доверенности представителя;</li>
                  <li className="numbering" itemType="disc">копию свидетельства о постановке на учет в качестве налогоплательщика;</li>
                  <li className="numbering" itemType="disc">заполненную карточку контрагента, заверенную подписью и печатью руководителя организации и главного бухгалтера и содержащую следующую информацию:</li>
                <ol>
                  <li className="numbering" itemType="disc">Юридический адрес контрагента;</li>
                  <li className="numbering" itemType="disc">Фактический адрес контрагента;</li>
                  <li className="numbering" itemType="disc">Банковские реквизиты контрагента;</li>
                  <li className="numbering" itemType="disc">Контактная информация: номер факса, адрес электронной почты и контактные лица с указанием номеров телефонов.</li>
                </ol>
          </ul>
          <div className='headline'>Для нерезидентов РФ (документы должны быть предоставлены с нотариально заверенным переводом на русский язык):</div>
          <ul className='listing'>
                  <li className="numbering" itemType="disc">выписка из Торгового реестра страны происхождения компании-контрагента (о благонадежности компании);</li>
                  <li className="numbering" itemType="disc">учредительные документы и документы регистрации фирмы (копии);</li>
                  <li className="numbering" itemType="disc">подтверждение полномочий лица на право подписания договора, нотариально заверенная доверенность с апостилем, либо выписка из протокола о назначении (избрании) на должность;</li>
                  <li className="numbering" itemType="disc">заполненную карточку контрагента, заверенную подписью и печатью руководителя организации и содержащую следующую информацию:</li>
                <ol>
                  <li className="numbering" itemType="disc">Юридический адрес контрагента;</li>
                  <li className="numbering" itemType="disc">Фактический адрес контрагента;</li>
                  <li className="numbering" itemType="disc">Банковские реквизиты контрагента;</li>
                  <li className="numbering" itemType="disc">Контактная информация: номер факса, адрес электронной почты и контактные лица с указанием номеров телефонов.</li>
                </ol>
          </ul>
        </div>
      </div>
    </>
  )
}
export default ApplicationAndListOfDocumentsForTheConclusionContracts