import AddCollections from "./pages/AddCollections"
import AddItemPage from "./pages/AddItemPage"
import Collections from "./pages/Collections"
import Home from "./pages/Home"
import ItemPage from "./pages/ItemPage"

export const publicRoutes = [
	{ path: '/', element: <Home /> },
	{ path: '/single-item', element: <ItemPage /> },
	{ path: '/collections', element: <Collections /> },
	{ path: '/collection/new', element: <AddCollections /> },
	{ path: '/item/new', element: <AddItemPage /> }
]

export const privateRoutes = [
	{},
]