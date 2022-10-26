import Action from "./pages/Action"
import AddCollections from "./pages/AddCollections"
import AddItemPage from "./pages/AddItemPage"
import Collections from "./pages/Collections"
import Home from "./pages/Home"
import ItemPage from "./pages/ItemPage"

export const publicRoutes = [
	{ path: '/', element: <Home /> },
	{ path: '/item', element: <ItemPage /> },
	{ path: '/collections', element: <Collections /> },
	{ path: '/collection/new', element: <AddCollections /> },
	{ path: '/item/new', element: <AddItemPage /> },
	{ path: '/action', element: <Action /> }
]

export const privateRoutes = [
	{},
]