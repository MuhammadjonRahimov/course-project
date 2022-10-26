import { useState } from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
	const [counter, setCounter] = useState(0);
	return (
		<Link to="/item">
			<div className="bg-black uppercase grid place-items-center text-white  min-h-[150px]">
				item
			</div>
			<div className=" flex items-center justify-between p-2  bg-[#f4f7f6]">
				<div>
					<h4>Author: <span>{props.data.author}</span></h4>
					<h5>Published:{props.data.time.toLocaleDateString()}</h5>
					<h5>Collection: <span>{props.data.collection}</span></h5>
				</div>
				<div className="flex items-center gap-[5px]">
					<button >
						<svg xmlns="http://www.w3.org/2000/svg" fill={props.data.liked ? "red" : "none"} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
						</svg>
					</button>
					<span className="font-bold">{counter}</span>
				</div>
			</div>
		</Link>
	)
}

export default Card;