function Comment({ comment }) {
	return (
		<div className="mb-5">
			<div className="flex items-center gap-2 mb-2">
				<h3 className="text-[25px] font-bold text-red-900">{comment.name}</h3>
				<p className="text-[16px] text-[rgb(20, 21, 21)]">{comment.time.toLocaleDateString()}</p>
			</div>
			<div>
				<p className="bg-[#f4f7f6] text-[rgb(20, 21, 21)] p-2 rounded-[8px]">
					{comment.comment}
				</p>
			</div>
		</div>
	)
}
export default Comment;