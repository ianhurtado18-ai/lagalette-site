import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { MenuPage } from './pages/MenuPage'
import { SimplePage } from './pages/SimplePage'
import { homeSections, menuPages, simplePages } from './siteData'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home sections={homeSections} />} />

        {menuPages.map((page) => (
          <Route
            key={page.path}
            path={page.path}
            element={<MenuPage page={page} />}
          />
        ))}

        {simplePages.map((page) => (
          <Route
            key={page.path}
            path={page.path}
            element={<SimplePage page={page} />}
          />
        ))}
      </Route>
    </Routes>
  )
}

export default App
