// eslint-disable-next-line react/prop-types
function Tab({ label, onClick, isActive }) {
	return (
		<button
			onClick={onClick}
			className={`px-4 text-sm font-bold ${
				isActive ? 'text-black' : 'text-gray-400'
			}`}
		>
			{label}
		</button>
	);
}

export default Tab;
