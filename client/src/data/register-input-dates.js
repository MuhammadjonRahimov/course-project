function sendRegisterInputDates(locale) {
	const registerInputDates = [
		{ placeholder: locale.username },
		{ placeholder: locale.email },
		{ placeholder: locale.password },
	]
	return registerInputDates;
}

export default sendRegisterInputDates;