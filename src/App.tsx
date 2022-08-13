import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './Utils'
import { DefaultLayout, EmBreve, Home, RaquetesPage, SobreNos } from './Pages'
import { RotasRaquetes } from './Pages/Raquetes/rotasRaquetes'
import { NotFoundRoute } from './Pages/NotFound/routeNotFound'
import { CarrinhoProvider } from './Common/Context/Carinho'
import { RotasCarrinho } from './Pages/Carrinho/routesCarrinho'
import { CarrinhoPage } from './Pages/Carrinho'
function App() {

  return (
    <Router>
      <ScrollToTop>

        <CarrinhoProvider>
          <Routes>

            <Route path='/' element={<DefaultLayout cart={true} />} >
              <Route path='/' element={<Home />} />
              <Route path='raquetes' element={<RaquetesPage />} />
              <Route path='emBreve' element={<EmBreve />} />
              <Route path='sobreNos' element={<SobreNos />} />
            </Route>
            <Route path='raquetes/:id' element={<RotasRaquetes />} />
            <Route path='carrinho' element={<RotasCarrinho />} />
            <Route path='*' element={<NotFoundRoute />} />
          </Routes>
        </CarrinhoProvider>
      </ScrollToTop>

    </Router>
  )
}

export default App
