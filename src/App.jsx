import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ScrollToHash from "./components/ScrollToHash"
import HomePage from "./pages/HomePage"
import AboutUsPage from "./pages/AboutUsPage"
import ServicesPage from "./pages/ServicesPage"

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToHash />
    </>
  )
}

export default App
