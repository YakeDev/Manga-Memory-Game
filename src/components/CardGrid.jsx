import { useEffect, useState } from 'react';
import Card from './Card';
import Header from './Header';
import Confetti from 'react-confetti';

const CardGrid = () => {
	const [imagesList, setImagesList] = useState([]);
	const [clickedImages, setClickedImages] = useState([]);
	const [gameOver, setGameOver] = useState(false);
	const [score, setScore] = useState(0);

	const [imageType, setImageType] = useState(() => {
		const savedImageType = localStorage.getItem('imageType');
		return savedImageType ? JSON.parse(savedImageType) : 'Naruto';
	});

	const [bestScore, setBestScore] = useState(() => {
		const savedBestScore = localStorage.getItem('bestScore');
		return savedBestScore ? JSON.parse(savedBestScore) : 0;
	});

	// Nouvel état pour afficher les confettis
	const [showConfetti, setShowConfetti] = useState(false);

	useEffect(() => {
		// Récupération des données d'anime
		const fetchAnimeData = async () => {
			try {
				const response = await fetch(
					`https://kitsu.io/api/edge/anime?filter[text]=${imageType}&page[limit]=15`
				);
				const data = await response.json();
				setImagesList(data.data);
			} catch (error) {
				console.error(
					'Erreur lors de la récupération des données Kitsu API:',
					error
				);
			}
		};

		fetchAnimeData();
	}, [imageType]);

	// Mélange aléatoire du tableau
	const shuffleArray = (array) => {
		const shuffled = [...array];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	};

	// Fonction pour gérer le clic sur une image
	const handleImageClick = (imageId) => {
		setImagesList((prevList) => shuffleArray(prevList));

		if (clickedImages.includes(imageId)) {
			// Jeu terminé si une image est cliquée deux fois
			setGameOver(true);
			// Mettre à jour le meilleur score si le score actuel est plus élevé
			if (score > bestScore) {
				setBestScore(score);
				localStorage.setItem('bestScore', JSON.stringify(score));
			}
		} else {
			// Ajouter l'image cliquée et augmenter le score
			setClickedImages((prevClickedImages) => [...prevClickedImages, imageId]);
			setScore((prevScore) => prevScore + 1);
		}
	};

	// Affiche les confettis lorsqu'un nouveau bestScore est atteint
	useEffect(() => {
		if (score > bestScore) {
			setBestScore(score);
			localStorage.setItem('bestScore', JSON.stringify(score));
			setShowConfetti(true);

			// Cache les confettis après 2 secondes
			setTimeout(() => setShowConfetti(false), 4000);
		}
	}, [score, bestScore]);

	// Sauvegarde le type d'image en local lorsqu'il change
	useEffect(() => {
		localStorage.setItem('imageType', JSON.stringify(imageType));
	}, [imageType]);

	const resetGame = () => {
		setGameOver(false);
		setScore(0);
		setClickedImages([]);
	};

	return (
		<div className='backdrop-blur-md bg-white/90 min-h-screen'>
			{showConfetti && <Confetti />}
			<div className='fixed top-0 left-0 right-0 backdrop-blur-md bg-white/80'>
				<Header
					gameScore={score}
					bestScore={bestScore}
					imageType={imageType}
					setImageType={setImageType}
				/>
			</div>
			<div className='p-4 md:pt-44'>
				{gameOver ? (
					<div className='flex flex-col justify-center items-center text-center border md:w-1/3 min-h-96 mx-auto mt-24 rounded-3xl bg-white shadow-2xl'>
						<div>
							<p className='text-4xl mb-2 font-bold'>Game Over!</p>
							<p className='text-slate-500'>
								You have clicked twice on the same image.
							</p>
							<div className='flex flex-row justify-center text-slate-600 mt-4'>
								<p>
									Your Score:
									<span className='font-bold ml-2 text-lg text-slate-800'>
										{score}
									</span>
								</p>
							</div>
							<button
								onClick={resetGame}
								className='mt-8 p-2 px-14 bg-blue-500 text-white rounded-full'>
								Restart
							</button>
						</div>
					</div>
				) : (
					<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center justify-items-center place-items-stretch min-h-96'>
						{shuffleArray(imagesList).map((image) => (
							<Card
								key={image.id}
								imgUrl={image.attributes.posterImage.medium}
								imgAlt={image.attributes.titles.en_jp || 'Anime Image'}
								imgName={
									(image.attributes.titles.en_jp?.length ||
										image.attributes.titles.en?.length) <= 36
										? image.attributes.titles.en_jp ||
										  image.attributes.titles.en
										: (
												image.attributes.titles.en_jp ||
												image.attributes.titles.en
										  )?.slice(0, 36) + '...'
								}
								onClick={() => handleImageClick(image.id)}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default CardGrid;
