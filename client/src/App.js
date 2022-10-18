import AppRouter from "./components/AppRouter";

function App() {
	return (
<<<<<<< HEAD
		<IsShownContext.Provider value={{ showSidebar, setShowSidebar, showAuthForm, showAuthFormHandler, hideAuthFormHandler }}>
			<Header />
			{showAuthForm && <RegisterOrLogin />}
			{showSidebar && <Sidebar />}
			<Section title='Last updates ' />
			<Section title="Top 5 big collections" />
		</IsShownContext.Provider>
=======
		<AppRouter />
>>>>>>> f1bf60f447faccaaab65c87f23560b30b37aae66
	);
}
export default App;