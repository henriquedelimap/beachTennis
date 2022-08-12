import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './Utils'
import { DefaultLayout, EmBreve, Home, RaquetesPage, SobreNos } from './Pages'
import { RotasRaquetes } from './Pages/Raquetes/rotasRaquetes'
import { NotFoundRoute } from './Pages/NotFound/routeNotFound'
import { CarrinhoProvider } from './Common/Context/Carinho'
function App() {

  return (
    <Router>
      <ScrollToTop>

        <CarrinhoProvider>
          <Routes>

            <Route path='/' element={<DefaultLayout />} >
              <Route path='/' element={<Home />} />
              <Route path='raquetes' element={<RaquetesPage />} />
              <Route path='emBreve' element={<EmBreve />} />
              <Route path='sobreNos' element={<SobreNos />} />

            </Route>
            <Route path='*' element={<NotFoundRoute />} />
            <Route path='raquetes/:id' element={<RotasRaquetes />} />
          </Routes>
        </CarrinhoProvider>
      </ScrollToTop>

    </Router>
  )
}

export default App
