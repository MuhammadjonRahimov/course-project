import styles from './Section.module.css';

import { useContext } from 'react';
import { AppContext } from '../../context';

import Card from "../Card";
import Pagination from "../Pagination";

function Section(props) {
	const { mode } = useContext(AppContext);
	const titleColor = mode === "dark" ? "text-white" : "text-black";
	return (
		<section className="relative">
			{props.title && <h1 className={`text-center my-5 text-[25px] font-bold ${titleColor}`}>{props.title}</h1>}
			<div className={styles['section__row']}>
				{props.dates.map((data, index) => <Card key={index} data={data} />)}
			</div>
			{/* <Pagination pagination={arr} /> */}
		</section>
	)
}

export default Section;