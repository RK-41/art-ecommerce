import { Link } from 'react-router-dom';
import Search from './Search';

function Header() {
	return (
		<div className='flex gap-[30px] max-w-[1200px] h-20 mx-auto mb-'>
			<div className='w-[260px]'>
				<Link to='/' className='w-full h-full text-center'>
					<p
						className='bg-white pl-10 flex justify-start items-center h-full rounded-lg text-4xl'
						style={{ fontFamily: 'Mongolian Baiti' }}
					>
						LOGO
					</p>
				</Link>
			</div>
			<div className='bg-white w-[620px] rounded-lg'>
				<Search />
			</div>
			<div className=' w-[260px] text-center h-full'>
				<Link to='/seller/signup'>
					<button className='bg-[#88C2BB] w-full h-full rounded-lg text-white font-semibold'>
						Become a seller
					</button>
				</Link>
			</div>
		</div>
	);
}

export default Header;
