import Layout from '../components/UI/Layout';
import Card from '../components/Card';
import Comment from '../components/Comment';
import { Link } from 'react-router-dom';

import { singleDate } from '../data/card-dates';
import { commentDates } from '../data/comment-dates';
import { locale } from '../data/locale';
import { useContext } from 'react';
import { AppContext } from '../context';

function ItemPage() {
	const { lang, mode } = useContext(AppContext);
	return (
		<>
			<Layout title="Item">
				<div className="py-5 relative">
					<div className="mx-auto max-w-[900px]">
						<div className="max-w-[500px] mx-auto mb-3">
							{singleDate.map((data, index) => <Card key={index} data={data} />)}
						</div>
						<div className="flex justify-center items-center gap-5">
							<Link to="/item/new" title="Add an item" >
								<svg style={{ width: '50px', height: '50px' }} xmlns="http://www.w3.org/2000/svg" fill={mode === "dark" ? "white" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</Link>
							<Link to="" title="Edit an item">
								<svg xmlns="http://www.w3.org/2000/svg" fill={mode === "dark" ? "white" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
								</svg>
							</Link>
						</div>
						<div className="mt-[100px]">
							<h2 className="mb-[30px] font-bold text-[30px]">{locale.comment}</h2>
							{commentDates.map((comment, index) => <Comment key={index} comment={comment} />)}
						</div>
					</div>
				</div>
			</Layout>
		</>
	)
}

export default ItemPage;