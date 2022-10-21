import { useEffect, useRef, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Layout from '../components/UI/Layout';
import MyInput from '../components/UI/MyInput';
import MyButton from '../components/UI/button/MyButton';


const scheme = yup.object().shape({
	username: yup.string().trim().required('username be filled'),
	password: yup.string().trim().required('password be filled'),
	email: yup.string().trim().required('email be filled'),
	tags: yup.array().of(yup.string())
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
	const { fields: tags, append } = useFieldArray({ control, name: "tags", });

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
		const newContents = contents.filter((_, index) => index !== i);
		setContents(newContents);
	}


	return (
		<Layout title="Add Item">
			<div className="p-5 w-[90%] md:w-[700px] lg:w-[900px] mx-auto my-5">
				<form onSubmit={handleSubmit(formSubmit)} className="flex flex-col gap-y-[15px]">
					<label className="font-bold" htmlFor="name">
						Name:
						<MyInput
							className="w-full border border-[#dbe0df] border-solid placeholder:text-[#777] py-[10px] rounded-[8px]"
							placeholder="Collection name" id="name"
							{...register("name", { required: true })}
						/>
					</label>
					<label htmlFor="tag" className="font-bold">
						Tag name:
						<div className="flex flex-wrap gap-4 bg-white p-5 border border-[#dbe0df] border-solid rounded-[8px]">
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
									<span key={content + index} className="rounded-[30px] p-2 bg-[rgb(20,21,21)] text-white">
										{content}
									</span>
									<sup
										className="grid  place-items-center w-[20px] h-[20px]
									bg-red-500 text-white rounded-[50%] cursor-pointer"
										onClick={removeContent.bind(null, index)}
									>
										x
									</sup>
								</div>
							)}
							<MyInput
								ref={inputRef}
								id="tag"
								className="flex-1 placeholder:text-[#dbe0d] "
								placeholder="Add tag"
							/>
						</div>
					</label>
					<h3 className="font-bold text-[25px]">Extra Fields</h3>
					<label className="font-bold" htmlFor="role">
						Role:
						<MyInput
							className="w-full border border-[#dbe0df] border-solid placeholder:text-[#777] py-[10px] rounded-[8px]"
							placeholder="Role name" id="role"
							{...register("name", { required: true })}
						/>
					</label>
					<label className="font-bold" htmlFor="type">
						Type:
						<MyInput
							className="w-full border border-[#dbe0df] border-solid placeholder:text-[#777] py-[10px] rounded-[8px]"
							placeholder="Type name" id="type"
							{...register("name", { required: true })}
						/>
					</label>
					<label className="font-bold" htmlFor="sth">
						Sth:
						<MyInput
							className="w-full border border-[#dbe0df] border-solid placeholder:text-[#777] py-[10px] rounded-[8px]"
							placeholder="Sth" id="sth"
							{...register("name", { required: true })}
						/>
					</label>
					<div className="flex gap-3">
						<label htmlFor='red'>
							Red
						</label>
						<MyInput id="red" value="red" type="checkbox" className="h-[20px] w-[20px] accent-[rgb(20,21,21)]" />
						<label htmlFor="green">
							Green
						</label>
						<MyInput id="green" value="green" type="checkbox" className="h-[20px] w-[20px] accent-[rgb(20,21,21)]" />
						<label htmlFor="yellow">
							Yellow
						</label>
						<MyInput id="yellow" value="yellow" type="checkbox" className="h-[20px] w-[20px] accent-[rgb(20,21,21)]" />
					</div>
					<MyButton type="submit" variant="dark" className="self-start">
						save
					</MyButton>
				</form>
			</div>
		</Layout>
	)
}

export default AddItemPage;