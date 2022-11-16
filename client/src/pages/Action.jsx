import { useEffect, useContext } from "react";
import Table from "../components/table/Table";
import Layout from "../components/UI/Layout";
import { AppContext } from "../context";

function Action() {
	const { lang } = useContext(AppContext);

	return (
		<Layout>
			<Table />
		</Layout>
	)
}

export default Action;