import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import AlzheimersSignsAndSymptoms from './pages/AlzheimersSignsAndSymptoms'
import CaregiverStories from './pages/CaregiverStories'
import SupportOurCause from './pages/SupportOurCause'
import AboutUs from './pages/AboutUs'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="alzheimers-signs-and-symptoms" element={<AlzheimersSignsAndSymptoms />} />
          <Route path="caregiver-stories" element={<CaregiverStories />} />
          <Route path="support-our-cause" element={<SupportOurCause />} />
          <Route path="about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
