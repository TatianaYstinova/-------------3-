import React from 'react';
import ReactDOM from 'react-dom/client';

import WebsiteCapComponent from '../src/pages/HomePage/HomePage';
import FirstScreenComponent from './pages/FirstScreenPage/FirstScreen';
import ServiceDiscriptionComponent from './pages/ServiceDescriptionPage/Description';
import CompanyInfoComponent from './pages/CompanyInfoPage/CompanyInfo';
import NewsComponent from './pages/NewsPage/NewsStories';
import FooterComponent from './pages/FooterPage/Footer';


import './pages/HomePage/Home.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <WebsiteCapComponent />
      <FirstScreenComponent />
      <ServiceDiscriptionComponent />
      <CompanyInfoComponent />
      <NewsComponent />
      <FooterComponent />
  </React.StrictMode>,
)
