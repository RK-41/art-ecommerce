import { Header, Posts, Recommendations, Sidebar } from '../components';

function Home() {
	return (
		<div className='h-full bg-[#F5F5F5] py-10' style={{ fontFamily: 'Arial' }}>
			<header className='h-20'>
				<Header />
			</header>

			<main className='flex gap-[30px] max-w-[1200px] h-full mx-auto my-5'>
				<section className='w-[260px] h-[80%]'>
					<Sidebar />
					<div className='flex justify-between text-gray-400 text-[0.2rem] text-center mt-2'>
						<p>2022&copy;logo name</p>
						<p>Developed by ivan infotech</p>
					</div>
				</section>

				<section className='w-[620px] h-max'>
					<Posts />
				</section>

				<section className='w-[260px] h-[80%]'>
					<Recommendations />
					<div className='mt-4 flex justify-between text-gray-400 text-[4px] text-center'>
						<p>Privacy</p>
						<p>Terms of Service</p>
						<p>Cookie Notice</p>
					</div>
				</section>
			</main>
		</div>
	);
}

export default Home;
