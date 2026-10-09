import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'
import Home from './pages/Home'
import Academics from './pages/Academics'
import Opportunities from './pages/Opportunities'
import Team from './pages/Team'
import BlogDetail from './pages/BlogDetail'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/team" element={<Team />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </BrowserRouter>
  )
}

export default App
