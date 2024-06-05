import { search, filter } from '../assets/icons';

function Search() {
	return (
		<div className='flex gap-4 p-[30px]'>
			<div className='grow flex gap-2'>
				<img src={search} alt='' />
				<input
					type='text'
					name='search'
					placeholder='Search here...'
					className='grow text-sm outline-none'
				/>
			</div>
			<div className='w-[70px] mr-4 flex justify-between gap-2'>
				<img src={filter} alt='' />
				<p>Filters</p>
			</div>
		</div>
	);
}

export default Search;
