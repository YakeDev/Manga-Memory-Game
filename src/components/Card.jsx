import PropTypes from 'prop-types';

const Card = (props) => {
	return (
		<div
			onClick={props.onClick}
			className='h-full max-w-sm bg-white border border-gray-200 p-2 rounded-3xl  shadow-lg hover:shadow-2xl hover:cursor-pointer transition-shadow delay-300 overflow-hidden '>
			<div className='h-72 overflow-hidden rounded-2xl'>
				<img
					src={props.imgUrl}
					alt={props.imgAlt}
					srcSet=''
					className='rounded-2xl'
				/>
			</div>
			<div className='p-2 pb-2'>
				<p className='mb-2 text-lg leading-tight font-bold text-center '>
					{props.imgName}
				</p>
			</div>
		</div>
	);
};

Card.propTypes = {
	imgName: PropTypes.string.isRequired,
	imgAlt: PropTypes.string.isRequired,
	imgUrl: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default Card;
