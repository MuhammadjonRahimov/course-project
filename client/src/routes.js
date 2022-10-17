import Collections from "./components/pages/Collections"
import Home from "./components/pages/Home"
import ItemPage from "./components/pages/ItemPage"

export const publicRoutes = [
	{ path: '/', element: <Home /> },
	{ path: '/single-item', element: <ItemPage /> },
	{ path: '/collection', element: <Collections /> }
]

export const privateRoutes = [
	{},
]