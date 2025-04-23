import { Outlet } from 'react-router-dom'
import MobileMenu from './components/MobileMenu'
import './App.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className='flex items-center justify-between py-4'>
        <p className='text-xl'>Hi, Yagel Salazar Reyes</p>
        <MobileMenu />
      </header>

      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>

      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-center text-gray-600">
          © {new Date().getFullYear()} MediApp - All Rights <a href="https://yagel-salazar-dev.vercel.app/">Yagel Salazar</a>
        </div>
      </footer>
    </div>

  )
}

export default App
