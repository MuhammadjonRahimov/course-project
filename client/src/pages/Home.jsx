import Layout from "../components/UI/Layout";
import Section from "../components/section/Section";
import cardDates from "../data/card-dates";
import { tags } from "../data/tag-dates";
import Tags from '../components/Tags';
import { locale } from "../data/locale";
import { useContext, useEffect, useState } from "react";
import { IsShownContext } from "../context";

function Home() {
	const { lang } = useContext(IsShownContext);

	return (
		<Layout title={locale['home-title']}>
			<Section title={locale['last-updates']} dates={cardDates} />
			<Section title={locale['top-big']} dates={cardDates} />
			<Tags dates={tags} />
		</Layout>
	)
}
export default Home;