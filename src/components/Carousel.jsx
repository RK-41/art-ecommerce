import { art1, art2, art3, art4 } from '../assets/arts';
import CarouselCard from './CarouselCard';

const carouselData = [
	{
		image: art1,
		description: 'Modern Wall Decor Framed Painting',
		price: '$199.99',
		stars: 5,
	},
	{
		image: art2,
		description: 'Modern Wall Decor Framed Painting',
		price: '$199.99',
		stars: 5,
	},
	{
		image: art3,
		description: 'Modern Wall Decor Framed Painting',
		price: '$199.99',
		stars: 5,
	},
	{
		image: art4,
		description: 'Modern Wall Decor Framed Painting',
		price: '$199.99',
		stars: 5,
	},
];

function Carousel() {
	return (
		<div className='h-max w-full flex rounded-lg overflow-x-scroll'>
			{/* {carouselData.map((index, cData) => (
				<CarouselCard key={index} data={cData} />
			))} */}

			<CarouselCard data={carouselData[0]} />
			<CarouselCard data={carouselData[1]} />
			<CarouselCard data={carouselData[2]} />
			<CarouselCard data={carouselData[3]} />
		</div>
	);
}

export default Carousel;
