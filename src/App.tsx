import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './Utils'
import { DefaultLayout, EmBreve, Home, RaquetesPage, SobreNos } from './Pages'
import { Overflow } from './styles'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <ScrollToTop>
        <Overflow>
          
        <Routes>
          <Route path='/' element={<DefaultLayout />} />
          <Route path='/*' element={<DefaultLayout />} >
            <Route index element={<Home />} />
            <Route path='raquetes' element={<RaquetesPage />} />
            <Route path='emBreve' element={<EmBreve />} />
            <Route path='sobreNos' element={<SobreNos />} />
          </Route>
        </Routes>
        </Overflow>
      </ScrollToTop>

    </Router>
  )
}

export default App
