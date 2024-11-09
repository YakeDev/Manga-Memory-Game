import { useEffect, useState } from 'react';
import Card from './Card';
import Header from './Header';

const CardGrid = (props) => {
	const [imagesList, setImagesList] = useState([]);
	const [imageType, setImageType] = useState('Kuruko');
	const [clickedImages, setClickedImages] = useState([]); // état pour stocker les images cliquées

	const [bestScore, setbestScore] = useState(0);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(false);

	useEffect(() => {
		// Fonction pour récupérer les données d'anime depuis l'API Kitsu
		const fetchAnimeData = async () => {
			try {
				const response = await fetch(
					`https://kitsu.io/api/edge/anime?filter[text]=${imageType}&page[limit]=15`
				);
				const data = await response.json();
				setImagesList(data.data);
			} catch (error) {
				console.error('Error fetching data from Kitsu API:', error);
			}
		};

		fetchAnimeData();
	}, [imageType]);

	// Fonction pour mélanger un tableau de manière aléatoire
	const shuffleArray = (array) => {
		const shuffled = [...array];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // échange les éléments
		}
		return shuffled;
	};

	// Fonction pour gérer le clic sur une image
	const handleImageClick = (imageId) => {
		// Mélange la liste
		setImagesList((prevList) => shuffleArray(prevList));

		if (clickedImages.includes(imageId)) {
			bestScore < score ? bestScore : setbestScore(score);
			if (score > bestScore) {
				setbestScore(score);
			}
			// Si l'image est déjà cliquée, le jeu est terminé
			setGameOver(true);
			setScore(0);
		} else {
			// Ajoute l'image à la liste des images cliquées
			setClickedImages((prevClickedImages) => [...prevClickedImages, imageId]);
			setScore((prevScore) => prevScore + 1);
		}
	};

	// Utiliser un useEffect pour afficher les images cliquées mises à jour
	useEffect(() => {
		console.log('Images cliquées : ', clickedImages);
		console.log('Nouveau Score : ', score);
	}, [clickedImages, score]);

	return (
		<div>
			<div className='shadow-md fixed top-0 left-0 right-0 backdrop-blur-md bg-white/80'>
				<Header gameScore={score} bestScore={bestScore} />
			</div>
			<div className='p-4 pt-44'>
				{gameOver ? (
					<p>Game Over! Vous avez cliqué deux fois sur une même image.</p>
				) : (
					<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center justify-items-center place-items-stretch '>
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
										: image.attributes.titles.en_jp?.slice(0, 36) + '...' ||
										  image.attributes.titles.en?.slice(0, 36) + '...'
								}
								onClick={() => handleImageClick(image.id)} // Ajoute un onClick pour chaque carte
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default CardGrid;
