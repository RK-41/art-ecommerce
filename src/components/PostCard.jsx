import { Link } from 'react-router-dom';
import { comment, heart1, share } from '../assets/icons';

/* eslint-disable react/prop-types */
function PostCard({ data }) {
	return (
		<div className='w-full h-[600px] bg-white flex flex-col justify-between rounded-xl'>
			<div className='flex justify-between mt-[30px] px-[30px] bg-white h-12'>
				<div className='w-12 h-12'>
					<img src={data.profileImage} alt='pic' />
				</div>

				<div className='grow ml-4'>
					<p className='font-bold text-xl text-[#101010]'>{data.name}</p>
					<p className='text-[#8D8D8D]'>@{data.username}</p>
				</div>

				<div className='w-8 font-bold text-2xl flex flex-col gap-1 items-end cursor-pointer'>
					<p className='h-1'>.</p>
					<p className='h-1'>.</p>
					<p className='h-1'>.</p>
				</div>
			</div>

			<div className='bg-white h-10 text-sm px-[30px]'>
				{data.caption}
				<Link to='/' className='ml-1 text-[#FF5E8A]'>
					Read More
				</Link>
			</div>

			<div className='w-full h-[306px] px-[30px]'>
				<img src={data.postImage} alt='' />
			</div>

			<div className='h-[90px] py-[30px] px-[30px] border-t-2 flex justify-start gap-4 font-bold text-lg text-[#101010]'>
				<div className='flex items-center gap-2'>
					<img src={heart1} alt='' className='w-5' />
					<p>{data.likes}</p>
				</div>
				<div className='flex items-center gap-2'>
					<img src={comment} alt='' className='w-5' />
					<p>{data.comments}</p>
				</div>
				<div className='flex items-center gap-2'>
					<img src={share} alt='' className='w-5' />
					<p>{data.shares}</p>
				</div>
			</div>
		</div>
	);
}

export default PostCard;
