import { useContext } from "react";
import Table from "../components/table/Table";
import Layout from "../components/UI/Layout";
import { IsShownContext } from "../context";

function Action() {
	const { lang } = useContext(IsShownContext);
	return (
		<Layout>
			<Table />
		</Layout>
	)
}

export default Action;