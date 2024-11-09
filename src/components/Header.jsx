import PropTypes from 'prop-types';

const Header = ({
	gameTitle = 'Manga Memory Game',
	gameDescription = `Get points by clicking on an image but don't click on any more than once!`,
	gameScore = 0,
	bestScore = 0,
}) => {
	return (
		<div className='p-4 grid grig-cols-1 md:grid-cols-2 mb-2'>
			<div>
				<h2 className='text-lg md:text-5xl text-orange-900 tracking-tighter font-bold mb-2'>
					{gameTitle}
				</h2>
				<p className='text-lg text-orange-950 w-2/3 tracking-tighter leading-tight'>
					{gameDescription}
				</p>
			</div>
			<div className='text-end text-2xl align-middle font-semibold uppercase'>
				<p className='items-center'>
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
};

export default Header;
