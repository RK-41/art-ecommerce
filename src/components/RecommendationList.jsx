/* eslint-disable react/prop-types */
import RecommendationCard from './RecommendationCard';
import '../Scrollbar.css';

const RecommendationList = ({ list }) => {
	if (Array.isArray(list)) {
		return (
			<div className='overflow-y-scroll h-[480px] xl:max-h-[660px] scrollbar-custom'>
				{list.map((item, index) => (
					<RecommendationCard
						key={index}
						coverImage={item.coverImage}
						profileImage={item.profileImage}
						name={item.name}
						username={item.username}
						isOnline={item.isOnline}
					/>
				))}
			</div>
		);
	} else {
		return <div>{list}</div>;
	}
};

export default RecommendationList;
