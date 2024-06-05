import { NavLink, Navigate, redirect } from 'react-router-dom';
import {
	home,
	notification,
	conversation,
	wallet,
	subscription,
	profile,
	setting,
	heart,
	logout,
} from '../assets/icons';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { firebaseApp } from '../firebase';
import { useEffect, useState } from 'react';

const auth = getAuth(firebaseApp);

function Sidebar() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
			}
		});
	}, []);

	const logoutUser = () => {
		signOut(auth).then(() => redirect('/'));
	};

	if (!user) {
		return <Navigate to='/' />;
	}
	return (
		<div className='h-[540px] 2xl:h-full py-4 flex flex-col justify-between font-bold bg-white rounded-lg'>
			<div className='mt-4 grow flex flex-col gap-4 2xl:gap-8 text-gray-400'>
				<NavLink to='/'>
					<div className='px-9 box-border border-[3px] border-white border-l-[#88C2BB] border-t-0 border-b-0 border-r-0 text-black flex gap-4'>
						<img src={home} alt='icon' />
						<p>Home</p>
					</div>
				</NavLink>

				<NavLink to='/notification'>
					<div className='px-9  flex gap-4'>
						<img src={notification} alt='' />
						<p>Notification</p>
					</div>
				</NavLink>

				<NavLink to='/shop'>
					<div className='px-9  flex gap-4'>
						<img src={heart} alt='' />
						<p>Shop</p>
					</div>
				</NavLink>

				<NavLink to='/conversation'>
					<div className='px-9  flex gap-4'>
						<img src={conversation} alt='' />
						<p>Conversation</p>
					</div>
				</NavLink>

				<NavLink to='/wallet'>
					<div className='px-9  flex gap-4'>
						<img src={wallet} alt='' />
						<p>Wallet</p>
					</div>
				</NavLink>

				<NavLink to='/subscription'>
					<div className='px-9  flex gap-4'>
						<img src={subscription} alt='' />
						<p>Subscription</p>
					</div>
				</NavLink>

				<NavLink to='/profile'>
					<div className='px-9  flex gap-4'>
						<img src={profile} alt='' />
						<p>My Profile</p>
					</div>
				</NavLink>

				<NavLink to='/setting'>
					<div className='px-9  flex gap-4'>
						<img src={setting} alt='' />
						<p>Setting</p>
					</div>
				</NavLink>
			</div>

			<button
				onClick={logoutUser}
				className='my-4 text-left text-[#88C2BB] px-9 flex gap-4 items-center'
			>
				<img src={logout} alt='' />
				<p>Log out</p>
			</button>
		</div>
	);
}

export default Sidebar;
