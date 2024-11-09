import CardGrid from './components/CardGrid';

function App() {
	return (
		<div className='relative dark:bg-slate-900'>
			<div
				className='min-h-screen'
				style={{
					backgroundImage: `url('./image.png')`,
					backgroundSize: 'cover', // Couvre tout l’espace du conteneur
					backgroundPosition: 'center', // Centre l'image
					backgroundRepeat: 'no-repeat', // Évite la répétition de l'image
				}}>
				<CardGrid />
			</div>
		</div>
	);
}

export default App;
