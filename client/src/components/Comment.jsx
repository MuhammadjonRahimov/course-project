function Comment({ comment }) {
	return (
		<div className="mb-5">
			<div className="flex items-center gap-2 mb-2">
				<h3 className="text-[25px] font-bold text-red-900">{comment.name}</h3>
				<p className="text-[16px] text-[rgb(20, 21, 21)]">
					{comment.time.toLocaleDateString() + ' '}
					{comment.time.toLocaleTimeString()}
				</p>
			</div>
			<div>
				<p className="bg-[#f4f7f6] text-[rgb(20, 21, 21)] p-2 rounded-[8px] relative
				before:absolute before:left-[1%] before:top-0 before:w-0 before:h-0
				before:border-b-[15px] before:border-b-[transparent] before:border-l-[25px]
				before:border-[#f4f7f6] before:-translate-y-[100%] before:rotate-[-90deg]">
					{comment.comment}
				</p>
			</div>
		</div>
	)
}
export default Comment;