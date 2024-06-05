import Carousel from './Carousel';
import PostCard from './PostCard';
import { lara_leones, thomas_j } from '../assets/users';
import { post1, post2 } from '../assets/posts';

const postData = [
	{
		name: 'Lara Leones',
		username: 'thewallart',
		profileImage: lara_leones,
		caption:
			'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
		postImage: post1,
		likes: '9.8k',
		comments: '8.6k',
		shares: '7.2k',
	},
	{
		name: 'Thomas J',
		username: 'thecustomercreater',
		profileImage: thomas_j,
		caption:
			'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
		postImage: post2,
		likes: '9.8k',
		commensts: '8.6k',
		shares: '7.2k',
	},
];

function Posts() {
	return (
		<div className='h-max'>
			<div className=' flex flex-col gap-[30px]'>
				<PostCard data={postData[0]} />
				<PostCard data={postData[1]} />
				<Carousel />
			</div>
		</div>
	);
}

export default Posts;
