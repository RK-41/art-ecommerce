import { useState, useEffect } from 'react';
import { firebaseApp } from './firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { Home } from './pages';

const auth = getAuth(firebaseApp);

function App() {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
			}
			setLoading(false);
		});
		return () => unsubscribe();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<>
			{!user ? (
				<div className='h-screen pb-16'>
					<div className='text-3xl sm:text-4xl md:text-5xl py-10 font-bold text-center drop-shadow-lg'>
						Welcome to Art Ecommerce
					</div>

					<div className='my-10 py-4 flex justify-center flex-wrap gap-4 font-semibold text-xl'>
						<Link
							to='/login'
							className='w-[200px] px-2 py-2 rounded-md bg-blue-600 text-white text-center hover:bg-blue-700 shadow-md'
						>
							Go to Login
						</Link>
						<Link
							to='/register'
							className='w-[200px] px-2 py-2 rounded-md bg-orange-500 text-white text-center hover:bg-orange-700 shadow-md'
						>
							Go to Registration
						</Link>
					</div>
				</div>
			) : (
				<Home />
			)}
		</>
	);
}

export default App;
