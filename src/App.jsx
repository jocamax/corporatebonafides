import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './App.css'
import Header from './components/Header'
import Product from './components/Products'
import Example from './components/Contact'
import Footer from './components/Footer'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
function App() {
  const [count, setCount] = useState(0)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  return (
    <>
    <Header/>
    <Product/>
    <Example/>
    <Footer/>
    </>
  )
}

export default App
