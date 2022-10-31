import BeatLoader from 'react-spinners/BeatLoader';


const override = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%. -50%)",
}

function Spinner() {
	return (
		<BeatLoader color="#141515" cssOverride={override} />
	)
}

export default Spinner;