import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import WebsiteCapComponent from '../src/pages/HomePage/HomePage';
import FirstScreenComponent from './pages/FirstScreenPage/FirstScreen';
import ServiceDiscriptionComponent from './pages/ServiceDescriptionPage/Description';
import CompanyInfoComponent from './pages/CompanyInfoPage/CompanyInfo';
import NewsComponent from './pages/NewsPage/NewsStories';
import FooterComponent from './pages/FooterPage/Footer';
import { Route, Routes } from 'react-router-dom';



import './pages/HomePage/Home.scss'
import ApplicationAndListOfDocumentsForTheConclusionContracts from './pages/ApplicationAndListOfDocumentsForTheConclusionContracts/ApplicationAndListOfDocumentsForTheConclusionContracts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <WebsiteCapComponent />
      <Routes>
        <Route path='/' element={
          <>
            <FirstScreenComponent />
            <ServiceDiscriptionComponent />
            <CompanyInfoComponent />
            <NewsComponent />
          </>
        } />
        <Route path='another-path' element={<ApplicationAndListOfDocumentsForTheConclusionContracts />} />
        
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  </React.StrictMode>,
)
