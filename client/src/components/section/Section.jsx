import Pagination from "../Pagination";
import Card from "../Card";
import styles from './Section.module.css';
import cardDates from "../../dates/card-dates";

const arr = [1, 2, 3, 4, 5];

function Section(props) {
	return (
		<section className="">
			<h1 className="text-center my-5 text-[35px] font-bold">{props.title}</h1>
			<div className={styles['section__row']}>
				{cardDates.map((data, index) => <Card key={index} data={data} />)}
			</div>
			{/* <Pagination pagination={arr} /> */}
		</section>
	)
}

export default Section;