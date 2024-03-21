import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/feature/Header'
import Main from './pages/Main'
import Pokemon from './pages/Pokemon'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="w-full mt-4 px-4 sm:px-10 lg:max-w-[1000px] md:mx-auto lg:p-0   ">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/pokemon/:id" element={<Pokemon />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
