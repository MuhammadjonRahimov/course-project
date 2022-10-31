import { useContext, useEffect, useRef, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Layout from '../components/UI/Layout';
import MyInput from '../components/UI/MyInput';
import MyButton from '../components/UI/button/MyButton';
import { locale } from '../data/locale';
import { IsShownContext } from '../context';


const scheme = yup.object().shape({
	name: yup.string().trim().required(locale.required),
	role: yup.string().trim().required(locale.required),
	type: yup.string().trim().required(locale.required),
	tags: yup.array().of(yup.string()),
	sth: yup.string().trim().required(locale.required),
});

const ab = 'Hello';

function AddItemPage() {
	const { lang } = useContext(IsShownContext);
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
						{locale['add-item-name']}
						<MyInput
							className="w-full border border-[#dbe0df] border-solid placeholder:text-[#777] py-[10px] rounded-[8px]"
							placeholder={locale['collection-name']} id="name"
							{...register("name", { required: true })}
						/>
					</label>
					{errors.name && <p className="text-red-500">{errors.name.message}</p>}
					<label htmlFor="tag" className="font-bold">
						{locale['tag-name']}
						<div className="flex flex-wrap gap-4 bg-white p-5 border border-[#dbe0df] border-solid rounded-[8px]">
							{tags.map((_, index) =>
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
									<span key={index} className="rounded-[30px] p-2 bg-[rgb(20,21,21)] text-white">
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
							// {...register("tags", { required: true })}
							/>
						</div>
					</label>
					{/* {errors.tags && <p className="text-red-500">{errors.tags.message}</p>} */}
					<h3 className="font-bold text-[25px]">{locale['extra-fields']}</h3>
					<label className="font-bold" htmlFor="role">
						{locale.role}
						<MyInput
							className="w-full border border-[#dbe0df] border-solid placeholder:text-[#777] py-[10px] rounded-[8px]"
							placeholder="Role name" id="role"
							{...register("role", { required: true })}
						/>
					</label>
					{errors.role && <p className="text-red-500">{errors.role.message}</p>}
					<label className="font-bold" htmlFor="type">
						{locale.type}
						<MyInput
							className="w-full border border-[#dbe0df] border-solid placeholder:text-[#777] py-[10px] rounded-[8px]"
							placeholder="Type name" id="type"
							{...register("type", { required: true })}
						/>
					</label>
					{errors.type && <p className="text-red-500">{errors.type.message}</p>}
					<h3 className="font-bold text-[25px]">{locale['colors-title']}</h3>
					<div className="flex gap-3">
						<label htmlFor='check-1'>
							{locale.colors.at(0)}
						</label>
						<MyInput
							{...register("check-1", { required: true })}
							id="check-1"
							value="check-1"
							type="checkbox"
							className="h-[20px] w-[20px] accent-[rgb(20,21,21)]"
						/>
						<label htmlFor="check-2">
							{locale.colors.at(1)}
						</label>
						<MyInput
							{...register("check-2", { required: true })}
							id="check-2"
							value="check-2"
							type="checkbox"
							className="h-[20px] w-[20px] accent-[rgb(20,21,21)]" />
						<label htmlFor="check-3">
							{locale.colors.at(-1)}
						</label>
						<MyInput
							{...register("check-3", { required: true })}
							id="check-3"
							value="check-3"
							type="checkbox"
							className="h-[20px] w-[20px] accent-[rgb(20,21,21)]" />
					</div>
					<MyButton type="submit" variant="dark" className="self-start my-3">
						{locale['add-item']}
					</MyButton>
				</form>
			</div>
		</Layout>
	)
}

export default AddItemPage;