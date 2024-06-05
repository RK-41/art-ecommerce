import { useState } from 'react';
import Tab from './Tab';
import RecommendationList from './RecommendationList';
import {
	cover1,
	cover2,
	cover3,
	cover4,
	cover5,
	profile_img1,
	profile_img2,
	profile_img3,
	profile_img4,
	profile_img5,
} from '../assets/artists';

const artistRecommendations = [
	{
		coverImage: cover1,
		profileImage: profile_img1,
		name: 'Thomas Edward',
		username: 'thewildwithyou',
		isOnline: true,
	},
	{
		coverImage: cover2,
		profileImage: profile_img2,
		name: 'Chris Doe',
		username: 'thewildwithyou',
		isOnline: true,
	},
	{
		coverImage: cover3,
		profileImage: profile_img3,
		name: 'Emily Jones',
		username: 'thewildwithyou',
		isOnline: true,
	},
	{
		coverImage: cover4,
		profileImage: profile_img4,
		name: 'Jessica Williams',
		username: 'thewildwithyou',
		isOnline: true,
	},
	{
		coverImage: cover5,
		profileImage: profile_img5,
		name: 'John Doe',
		username: 'thewildwithyou',
		isOnline: true,
	},
];

const photographersRecommendations = [
	{
		coverImage: cover5,
		profileImage: profile_img5,
		name: 'Tia Edward',
		username: 'thewildwithyou',
		isOnline: true,
	},
	{
		coverImage: cover4,
		profileImage: profile_img4,
		name: 'Jessica Williams',
		username: 'thewildwithyou',
		isOnline: true,
	},
	{
		coverImage: cover3,
		profileImage: profile_img3,
		name: 'Emily Jones',
		username: 'thewildwithyou',
		isOnline: true,
	},
	{
		coverImage: cover2,
		profileImage: profile_img2,
		name: 'Chris Doe',
		username: 'thewildwithyou',
		isOnline: true,
	},
	{
		coverImage: cover1,
		profileImage: profile_img1,
		name: 'John Doe',
		username: 'thewildwithyou',
		isOnline: true,
	},
];

function Tabs() {
	const [activeTab, setActiveTab] = useState(0);

	const tabs = [
		{ label: 'Artists', content: artistRecommendations },
		{ label: 'Photographers', content: photographersRecommendations },
	];

	return (
		<div className='w-full max-w-md mx-auto mt-2'>
			<div className='flex'>
				{tabs.map((tab, index) => (
					<Tab
						key={index}
						label={tab.label}
						onClick={() => setActiveTab(index)}
						isActive={activeTab === index}
					/>
				))}
			</div>

			<div className='pt-4 h-full'>
				<RecommendationList list={tabs[activeTab].content} />
			</div>
		</div>
	);
}

export default Tabs;
