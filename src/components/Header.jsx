import PropTypes from 'prop-types';
import MangaImageType from './MangaImageType';

const Header = ({
	gameTitle = 'Manga Card Memory',
	gameDescription = `Click on the cards to score points! Don't click the same one twice, or the game ends!`,
	gameScore = 0,
	bestScore = 0,
	imageTypeValue,
	setImageType,
}) => {
	return (
		<div className='flex flex-col lg:flex-row justify-between items-center gap-10 p-4 '>
			<div className=' p-2 lg:w-3/6  text-center md:text-start rounded-xl'>
				<img
					src='./Manga-MemoryCardlogo.svg'
					alt={gameTitle}
					className='h-24'
				/>
				<p className='text-sm md:w-3/4 text-orange-950  tracking-tighter leading-tight'>
					{gameDescription}
				</p>
			</div>

			<div className='text-center lg:w-3/6'>
				<MangaImageType
					value={imageTypeValue}
					onChange={(e) => setImageType(e.target.value)}
				/>
			</div>
			<div className='lg:w-2/6 text-end text-2xl align-middle font-semibold uppercase '>
				<p className='items-center '>
					<span className='text-lg font-normal me-3 '>Score: </span> {gameScore}
				</p>
				<p className='items-center'>
					<span className='text-lg font-normal me-3'>Best score: </span>
					{bestScore}
				</p>
			</div>
		</div>
	);
};

Header.propTypes = {
	gameTitle: PropTypes.string,
	gameDescription: PropTypes.string,
	gameScore: PropTypes.number,
	bestScore: PropTypes.number,
	imageTypeValue: PropTypes.string,
	setImageType: PropTypes.func,
};

export default Header;
