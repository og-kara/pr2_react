import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from './components/header/Header'
import {Banner} from './components/banner/Banner'
import {Catalog} from './components/catalog/Catalog'

function App() {

  return (
    <>
      <Header/>
      <Banner/>
      <Catalog/>
    </>
  )
}

export default App
