import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Base from './components/common/Base'
import Pricing from './pages/Pricing'
import WordPress from './pages/WordPress'
import Cloud from './pages/Cloud'
import VPS from './pages/VPS'
import Dedicated from './pages/Dedicated'
import SemiDedicated from './pages/SemiDedicated'
import Domain from './pages/Domain'
import Affiliates from './pages/Affiliates'
import Company from './pages/Company'


const router = createBrowserRouter([{
  path: "/",
  element: <Base />,
  children: [
    {
      path: "",
      element: <Home />
    },
    {
      path: "/pricing",
      element: <Pricing />
    },
    {
      path: "/wordpress",
      element: <WordPress />
    },
    {
      path: "/cloud",
      element: <Cloud />
    },
    {
      path: "/vps",
      element: <VPS />
    },
    {
      path: "/dedicated",
      element: <Dedicated />
    },
    {
      path: "/semidedicated",
      element: <SemiDedicated />
    },
    {
      path: "/domain",
      element: <Domain />
    },
    {
      path: "/affiliates",
      element: <Affiliates />
    },
    {
      path: "/company",
      element: <Company />
    },

  ]
}])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
