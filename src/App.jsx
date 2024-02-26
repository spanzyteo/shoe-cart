import React, { createContext, useState } from 'react'
import { Box } from '@mui/material'
import { Route, Routes, useLocation } from 'react-router-dom'
export const Context = createContext()

import NavBar from './components/NavBar'
import MenShoe from './pages/MenShoe'
import SideBar from './components/SideBar'
import { useCart } from './Context'
import ShoeModal from './components/shoeModal'
import Home from './pages/Home'
import WomenShoe from './pages/WomenShoe'
import KidsShoe from './pages/KidsShoe'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import RefundPolicy from './components/policies/RefundPolicy'
import PrivacyPolicy from './components/policies/PrivacyPolicy'
import TermsOfService from './components/policies/TermsOfService'
import ShippingPolicy from './components/policies/ShippingPolicy'
import ContactInformation from './components/policies/ContactInformation'
import SubscriptionPolicy from './components/policies/SubscriptionPolicy'
import Faq from './components/pages/Faq'
import ResellerPolicy from './components/pages/ResellerPolicy'
import SizeDetails from './components/pages/SizeDetails'
import DigitalGiftCard from './components/gift-card/DigitalGiftCard'
import Product from './components/Product'
import Checkout from './pages/checkout/Checkout'

const App = () => {
  const { state } = useCart()
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const location = useLocation()

  const toggleSideBar = () => {
    setIsSideBarOpen((prevIsOPen) => !prevIsOPen)
  }

  const isCheckoutPage = location.pathname === '/checkout'

  return (
    <Box>
      <Box
        width="400px"
        height="100vh"
        sx={{ width: { xl: '1488px' } }}
        m="auto"
        position="relative"
      >
        <ShoeModal />
        <Box sx={{ px: { lg: '120px', xs: '0px' } }}>
          {!isCheckoutPage && <NavBar toggleSideBar={toggleSideBar} />}
          <SideBar
            isSideBarOpen={isSideBarOpen}
            toggleSideBar={toggleSideBar}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/male" element={<MenShoe />} />
            <Route path="/female" element={<WomenShoe />} />
            <Route path="/kids" element={<KidsShoe />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/policies/refund-policy" element={<RefundPolicy />} />
            <Route
              path="/policies/privacy-policy"
              element={<PrivacyPolicy />}
            />
            <Route
              path="/policies/terms-of-service"
              element={<TermsOfService />}
            />
            <Route
              path="/policies/shipping-policy"
              element={<ShippingPolicy />}
            />
            <Route
              path="/policies/contact-information"
              element={<ContactInformation />}
            />
            <Route
              path="/policies/subscription-policy"
              element={<SubscriptionPolicy />}
            />
            <Route path="/pages/faqs" element={<Faq />} />
            <Route path="/pages/reseller-policy" element={<ResellerPolicy />} />
            <Route path="/pages/size-details" element={<SizeDetails />} />
            <Route
              path="/products/sneakers-digital-gift-card"
              element={<DigitalGiftCard />}
            />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
          {!isCheckoutPage && <Footer />}
        </Box>
      </Box>
    </Box>
  )
}

export default App
