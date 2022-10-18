import Layout from '../UI/Layout';
import Card from '../Card';
import Comment from '../Comment';
import { singleDate } from '../../dates/card-dates';
import { commentDates } from '../../dates/comment-dates';

function ItemPage() {
	return (
		<>
			<Layout title="Item">
				<div className="trapezoid">

				</div>
				<div className="py-5">
					<div className="mx-auto max-w-[900px] px-5">
						<div className="max-w-[500px] mx-auto">
							{singleDate.map((data, index) => <Card key={index} data={data} />)}
						</div>
						<div className="mt-[100px]">
							{commentDates.map((comment, index) => <Comment key={index} comment={comment} />)}
						</div>
					</div>
				</div>
			</Layout>
		</>
	)
}

export default ItemPage;