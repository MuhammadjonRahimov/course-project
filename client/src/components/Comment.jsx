import { useContext } from 'react';
import { AppContext } from '../context';


function Comment({ comment }) {

	const { mode } = useContext(AppContext);

	const currentStyle = mode === "dark" ? "bg-[#f4f7f6] text-[rgb(20, 21, 21)] before:border-[#f4f7f6]" : "bg-[#444] text-white before:border-[#444]";

	return (
		<div className="mb-5">
			<div className="flex items-center gap-2 mb-4">
				<h3 className="text-[25px] font-bold text-red-400">{comment.name}</h3>
				<p className="text-[16px] text-red-400">
					{comment.time.toLocaleDateString() + ' '}
				</p>
			</div>
			<div>
				<p className={`p-2 rounded-[8px] relative
				before:absolute before:left-[1%] before:top-0 before:w-0 before:h-0
				before:border-b-[15px] before:border-b-[transparent] before:border-l-[25px]
				before:-translate-y-[100%] before:rotate-[-90deg] ${currentStyle}`}>
					{comment.comment}
				</p>
			</div>
		</div>
	)
}
export default Comment;