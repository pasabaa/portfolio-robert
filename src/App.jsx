import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ContainerFluid } from './layout/container'
import { Navbar } from './layout/nav'
import { AboutPage, HomePage, WorkPage } from './pages'

function App() {

  return (
    <BrowserRouter>
      <ContainerFluid>
        <Navbar/>
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/work'} element={<WorkPage />} />
        </Routes>
      </ContainerFluid>
    </BrowserRouter>
  )
}

export default App
