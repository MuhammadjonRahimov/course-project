import Home from "./components/pages/Home"
import ItemPage from "./components/pages/ItemPage"

export const publicRoutes = [
	{ path: '/', element: <Home /> },
	{ path: '/single-item', element: <ItemPage /> }
]

export const privateRoutes = [
	{},
]