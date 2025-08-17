import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Routes
// Pages
import Home from './pages/Home'
import AddTicket from './pages/AddTicket'

// // Shared components
import Header from './components/Header'
// import Footer from './components/Footer'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-ticket" element={<AddTicket />} />
          </Routes>
          {/* <Footer/> */}
    </BrowserRouter>
    </>
  )
}

export default App
