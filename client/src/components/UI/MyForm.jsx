function MyForm(props) {
	return (
		<form {...props}>
			{props.children}
		</form>
	)
}

export default MyForm;