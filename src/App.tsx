import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import NavBar from './components/navbar/NavBar'
import Home from './pages/home/Home'
import ListaCategorias from './components/categoria/listacategorias/ListaCategorias'
import FormularioCategoria from './components/categoria/formcategoria/FormularioCategoria'
import DeleteCategoria from './components/categoria/deletarcategoria/DeletarCategoria'


function App() {

  return (
    <>
      <BrowserRouter>
                    <NavBar />
                    <div className='min-h-[80vh]'>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/categorias" element={<ListaCategorias />} />
                            <Route path="/cadastrarcategoria" element={<FormularioCategoria />} />
                            <Route path="/editarcategoria/:id" element={<FormularioCategoria />} />
                            <Route path="/deletarcategoria/:id" element={<DeleteCategoria />} />
                        </Routes>
                    </div>
                    <Footer />
                </BrowserRouter>
    </>
  )
}

export default App
