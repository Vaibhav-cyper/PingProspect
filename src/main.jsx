import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HeroComponent from './components/Hero/HeroComponent.jsx'
import FeatureComponent from './components/Feature/FeatureComponent';
import PricingComponent from './components/Pricing/PricingComponent';
import FAQComponent from './components/FAQ/FAQComponent';
import PrivacyPolicy from './components/privacy-policy/Privacy-policy.jsx'
import Termnsservice from './components/terms-of-service/Terms-service.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/> }>
      <Route path='home' element={[<HeroComponent/> , <FeatureComponent/>, <PricingComponent/> , <FAQComponent/> ]}/>
      <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
      <Route path='terms-of-service' element={<Termnsservice/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)