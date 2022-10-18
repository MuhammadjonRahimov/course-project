import Collections from "./pages/Collections"
import Home from "./pages/Home"
import ItemPage from "./pages/ItemPage"

export const publicRoutes = [
	{ path: '/', element: <Home /> },
	{ path: '/single-item', element: <ItemPage /> },
	{ path: '/collection', element: <Collections /> }
]

export const privateRoutes = [
	{},
]