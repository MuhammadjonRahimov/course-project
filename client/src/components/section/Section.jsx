import Pagination from "../Pagination";
import Card from "../Card";
import styles from './Section.module.css';


import { Link } from 'react-router-dom';


function Section(props) {
	return (
		<section className="relative">
			{/* <Link to="/collection/new" title="Add an item" className="absolute top-5 right-5">
				<svg style={{ width: '50px', height: '50px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
			</Link> */}
			{props.title && <h1 className="text-center my-5 text-[25px] font-bold">{props.title}</h1>}
			<div className={styles['section__row']}>
				{props.dates.map((data, index) => <Card key={index} data={data} />)}
			</div>
			{/* <Pagination pagination={arr} /> */}
		</section>
	)
}

export default Section;