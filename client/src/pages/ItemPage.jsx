import Layout from '../components/UI/Layout';
import Card from '../components/Card';
import Comment from '../components/Comment';
import { singleDate } from '../data/card-dates';
import { commentDates } from '../data/comment-dates';
import { locale } from '../data/locale';

function ItemPage() {
	return (
		<>
			<Layout title="Item">
				<div className="py-5">
					<div className="mx-auto max-w-[900px]">
						<div className="max-w-[500px] mx-auto">
							{singleDate.map((data, index) => <Card key={index} data={data} />)}
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