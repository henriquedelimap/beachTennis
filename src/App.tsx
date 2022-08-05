import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DefaultLayout, EmBreve, Home, RaquetesPage, SobreNos } from './Pages'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<DefaultLayout />} />
        <Route path='/*' element={<DefaultLayout />} >
          <Route index element={<Home />} />
          <Route path='raquetes' element={<RaquetesPage />} />
          <Route path='emBreve' element={<EmBreve />} />
          <Route path='sobreNos' element={<SobreNos />} />
        </Route>
      </Routes>
      
    </Router>
  )
}

export default App
