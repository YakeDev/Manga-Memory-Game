import PropTypes from 'prop-types';

const MangaImageType = ({ value, onChange }) => {
	return (
		<div>
			<label
				htmlFor='image-type'
				className='block mb-2 text-lg font-medium text-gray-900  dark:text-slate-400'>
				Play with your favorite Manga
			</label>
			<input
				id='image-type'
				type='text'
				value={value}
				onChange={onChange}
				placeholder='e.g., Naruto, Dragon Ball, Fullmetal Alchemist, Avatar...'
				className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-slate-600  dark:text-slate-00 dark:focus:ring-orange-500 dark:focus:border-orange-500'
			/>
			<span className='text-slate-200  dark:text-slate-700'>@YakeDev</span>
		</div>
	);
};

MangaImageType.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
};

export default MangaImageType;
