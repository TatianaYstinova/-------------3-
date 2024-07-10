import React from 'react'
import ReactDOM from 'react-dom/client'

import WebsiteCapComponent from './websiteСapСomponent.tsx'
import FirstScreenComponent from './firstScreen.tsx'
import ServiceDiscriptionComponent from './serviceDescription.tsx'
import CompanyInfoComponent from './CompanyInfo.tsx'
import NewsComnonent from './news.tsx'

import './websiteCap.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WebsiteCapComponent />
    <FirstScreenComponent />
    <ServiceDiscriptionComponent/>
    <CompanyInfoComponent/>
    <NewsComnonent/>
  </React.StrictMode>,
)
