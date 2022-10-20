import { useEffect, useRef, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Layout from '../components/UI/Layout';
import MyInput from '../components/UI/MyInput';
import MyButton from '../components/UI/button/MyButton';

import { registerInputDates } from '../dates/register-input-dates';

const scheme = yup.object().shape({
	username: yup.string().trim().required('username be filled').min(4, 'kamida 4 ta').max(10, "ko'pi bilan 10 ta"),
	password: yup.string().trim().required('password be filled').min(3, 'kamida 4 ta').max(5, "ko'pi bilan 10 ta"),
	email: yup.string().trim().required('email be filled').min(4, 'kamida 4 ta').max(6, "ko'pi bilan 10 ta"),
	tags: yup.array().of(yup.string()).min(1, 'should be included at least one character')
});


function AddItemPage() {

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.addEventListener('keyup', keyPressHandler);
		}
		return () => inputRef.current?.removeEventListener('keyup', keyPressHandler);
	}, []);

	const [contents, setContents] = useState([]);
	const inputRef = useRef(null);
	const { register, handleSubmit, control, formState: { errors } } = useForm({ resolver: yupResolver(scheme), mode: "onBlur" });
	const { fields: tags, append, remove } = useFieldArray({ control, name: "tags", });

	function keyPressHandler(e) {
		if ((e.code === "Enter" || e.code === 'Space') && inputRef.current.value.trim().length > 0) {
			const tag = `#${inputRef.current.value.trim().replaceAll(' ', '')}`;
			append(tag);
			inputRef.current.value = '';
			inputRef.current.focus();
			changeHandler(tag);
		}
	}

	function formSubmit(data) {
		console.log(data);
	}

	function changeHandler(value) {
		setContents(prev => [...prev, value]);
	}

	function removeContent(i) {
		const newContents = contents.filter((content, index) => index !== i);
		setContents(newContents);
	}


	return (
		<Layout>
			<div className="h-[calc(100vh-70px)] overflow-y-auto pt-[200px] pb-[20px] md:overflow-y-[none] md:pt-0 md:pb-0 flex items-center justify-center">
				<form
					onSubmit={handleSubmit(formSubmit)}
					className='max-h-[600px] overflow-y-auto flex-1 max-w-[700px]
					p-[20px] sm:py-[50px] sm:px-[70px]  bg-[#dbe0df]  flex flex-col gap-y-[20px]'
				>
					<div className="flex flex-wrap gap-4 bg-white p-5 ">
						{tags.map((tag, index) =>
							<input
								type="text"
								key={index}
								disabled
								{...register(`tags.${index}`)}
								className="hidden w-0"
							/>

						)}
						{contents.map((content, index) =>
							<div className="flex">
								<span key={content + index} className="rounded-[20px] p-2 bg-[rgb(20,21,21)] text-white">
									{content}
								</span>
								<sup
									className="grid  place-items-center w-[15px] h-[15px]
									bg-red-500 text-white rounded-[50%] cursor-pointer"
									onClick={removeContent.bind(null, index)}
								>
									x
								</sup>
							</div>
						)}
						<MyInput
							ref={inputRef}
							id="input"
							className="flex-1 placeholder:text-[#dbe0d] "
							placeholder="Add tag"
						/>
					</div>
					{errors.tags && <p className="text-red-500">{errors.tags.message}</p>}
					{registerInputDates.map(data =>
						<>
							<MyInput
								key={Date.now()}
								className="border border-[#dbe0df]  placeholder:text-[#dbe0d] py-[15px]"
								placeholder={data.placeholder}
								{...register(data.placeholder.toLowerCase())}
							/>
							{errors[data.placeholder.toLowerCase()] && <p className="text-red-500">
								{errors[data.placeholder.toLowerCase()].message}
							</p>}
						</>
					)}
					<MyButton type="submit" variant="green">add item</MyButton>
				</form>
			</div>
		</Layout>
	)
}

export default AddItemPage;