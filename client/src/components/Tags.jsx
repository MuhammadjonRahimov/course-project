import { Link } from 'react-router-dom';

function Tags(props) {
	return (
		<div className="my-5 max-w-[992px] mx-auto p-3 flex flex-wrap gap-3">
			{props.dates.map((data, index) =>
				<Link
					key={index}
					className="font-bold text-[20px] bg-[#666] even:bg-[#999]
					rounded-[20px] py-[15px] px-[40px]"
					to="/"
				>
					{data.tag}
				</Link>
			)}
		</div>
	)
}

export default Tags;