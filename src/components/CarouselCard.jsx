/* eslint-disable react/prop-types */

import { star } from '../assets/icons';

function CarouselCard({ data }) {
	return (
		<div className='flex flex-col gap-4 m-2 max-h-full'>
			<div className='w-max'>
				<img
					className='object-cover w-[252px] h-[180px] rounded-lg'
					src={data.image}
					alt='img'
				/>
			</div>
			<div className='flex flex-col gap-4 justify-center items-start px-4 pb-4'>
				<h4 className='text-sm text-[#101010] font-semibold w-full'>
					{data.description}
				</h4>

				<div className='flex justify-between items-center w-full'>
					<p className='text-[#101010] text-xl font-bold w-full'>
						{data.price}
					</p>
					<div className='flex w-[50%]'>
						<img src={star} alt='' className='h-4' />
						<img src={star} alt='' className='h-4' />
						<img src={star} alt='' className='h-4' />
						<img src={star} alt='' className='h-4' />
						<img src={star} alt='' className='h-4' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default CarouselCard;
