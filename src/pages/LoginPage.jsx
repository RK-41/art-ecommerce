import { useEffect, useState } from 'react';
import { useFirebase } from '../context/Firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { firebaseApp } from '../firebase';
import { Navigate } from 'react-router-dom';

const auth = getAuth(firebaseApp);

function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState(null);

	const firebase = useFirebase();

	const loginUser = () => {
		firebase.loginWithEmailAndPassword(email, password).then(() => {
			setEmail('');
			setPassword('');
		});
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
			}
		});
	}, []);

	if (user) {
		return <Navigate to='/home' />;
	}

	return (
		<div className='h-screen pb-16'>
			<div>
				<div className='text-3xl sm:text-4xl md:text-5xl py-10 font-bold text-center drop-shadow-lg'>
					Login Page
				</div>
				<div className='max-w-[600px] m-4 mx-auto flex flex-col gap-1 bg-gray-100 rounded-md shadow-md px-4 py-6'>
					<label htmlFor='email' className='text-gray-700'>
						Email
					</label>
					<input
						type='text'
						name='email'
						placeholder='email'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						className='text-black border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500'
					/>
					<label htmlFor='Password' className='text-gray-700'>
						Password
					</label>
					<input
						type='password'
						name='password'
						placeholder='password'
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						className='text-black border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500'
					/>
					<button
						className='w-[120px] text-white bg-blue-600 hover:bg-blue-700 rounded-md mt-4 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-700 shadow-md'
						onClick={loginUser}
					>
						Login
					</button>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
