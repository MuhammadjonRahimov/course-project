import Card from "../Card";
import styles from './Section.module.css';
import cardDates from "../../dates/card-dates";

function Section(props) {
	return (
		<section>
			<h1 className="text-center my-5 text-[35px] font-bold">{props.title}</h1>
			<div className={styles['section__row']}>
				{cardDates.map((data, index) => <Card key={index} data={data} />)}
			</div>
		</section>
	)
}

export default Section;