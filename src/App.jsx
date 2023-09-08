import React from 'react'
import { Footer, Navbar } from './components'

import { Hero, Blogs , Possibilities} from './contents'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Blogs />
      <Possibilities />
      <Footer />

    </div>
  )
}

export default App
