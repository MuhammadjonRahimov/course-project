import Pagination from "../Pagination";
import Card from "../Card";
import styles from './Section.module.css';


function Section(props) {
	return (
		<section className="">
			{props.title && <h1 className="text-center my-5 text-[35px] font-bold">{props.title}</h1>}
			<div className={styles['section__row']}>
				{props.dates.map((data, index) => <Card key={index} data={data} />)}
			</div>
			{/* <Pagination pagination={arr} /> */}
		</section>
	)
}

export default Section;