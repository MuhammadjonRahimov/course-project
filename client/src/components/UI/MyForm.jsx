import React from 'react';
import { useForm } from 'react-hook-form';


function MyForm(props) {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	return (
		<form {...props}>
			{props.children}
		</form>
	)
}
export default MyForm;