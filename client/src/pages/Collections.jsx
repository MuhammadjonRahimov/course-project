import Layout from "../components/UI/Layout";
import Section from "../components/section/Section";
import cardDates from '../data/card-dates';
import { useContext } from "react";
import { AppContext } from "../context";
import { Link } from 'react-router-dom';

function Collections() {
	const { lang } = useContext(AppContext);
	return (
		<Layout title="Collection-1">
			<Section title="Single Collection" dates={cardDates} />
			<div className="flex justify-center items-center gap-5">
				<Link to="/collection/new" title="Add an item" >
					<svg style={{ width: '50px', height: '50px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</Link>
				<Link to="item/new" title="Edit an item">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
					</svg>
				</Link>
			</div>
		</Layout>
	)
}

export default Collections;