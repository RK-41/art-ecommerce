/* eslint-disable react/prop-types */

const RecommendationCard = ({
	coverImage,
	profileImage,
	name,
	username,
	isOnline,
}) => {
	return (
		<div className='w-full h-[126px] mb-4 rounded-lg overflow-hidden'>
			<div
				className='h-full bg-cover bg-center flex items-end'
				style={{ backgroundImage: `url(${coverImage})` }}
			>
				<div className='p-4 w-full flex items-center'>
					<div className='relative flex-shrink-0'>
						<img
							src={profileImage}
							alt='Profile'
							className='w-12 h-12 rounded-xl border-[1px] border-white'
						/>
						{isOnline && (
							<div className='absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-[3px] border-white rounded-full'></div>
						)}
					</div>
					<div className='ml-4 text-white'>
						<h2 className='text-lg font-bold'>{name}</h2>
						<p className='text-sm font-semibold'>@{username}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecommendationCard;
