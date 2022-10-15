import { Link, useSearchParams } from 'react-router-dom';

function Pagination({ pagination, url, id }) {
	const [params] = useSearchParams();
	let page = pagination?.page || params.get('page') || 1;
	// const paginationItems = Array.from({ length: pagination?.totalPages });
	const paginationItems = pagination;

	return (
		<div className="text-center my-5">
			{paginationItems.map((_, i) => {
				const active = +page === i + 1 && 'opacity-100';
				return (
					<Link
						key={i + 1}
						to={id ? `?id=${id}&&page=${i + 1}` : `${url}?page=${i + 1}`}
						className={`inline-block opacity-50 py-[5px] px-[8px] rounded-[5px]
						text-white bg-[rgb(20,21,21)] mr-[10px] last:mr-0 ${active}`}
					>
						{i + 1}
					</Link>
				)
			})}
		</div>
	)
}

export default Pagination;