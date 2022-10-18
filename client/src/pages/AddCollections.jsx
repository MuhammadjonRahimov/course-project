import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/MyInput';
import Layout from '../components/UI/Layout';

import { Editor } from '@tinymce/tinymce-react';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
const labelClass = "font-bold"

function AddCollections() {
	const { register, reset, handleSubmit, watch, setValue, formState: { errors } } = useForm({ mode: "onBlur" });
	const [initialDesc, setInitialDesc] = useState('');
	const editorRef = useRef();

	function formSubmit(data) {
		console.log(data);
		setInitialDesc('');
		reset({
			name: '',
			topic: '',
			"user-pic": '',
			desc: '',
		});
	}
	return (
		<Layout>

			<div className="p-5">
				<form onSubmit={handleSubmit(formSubmit)} className="flex flex-col gap-[15px]">
					<label className={labelClass} htmlFor="name">
						Name:
						<MyInput
							className="w-full border border-[#dbe0df] border-solid placeholder:text-[#777] py-[10px] rounded-[8px]"
							placeholder="Collection name" id="name"
							{...register("name", { required: true })}
						/>
						{errors['name'] && <p className="text-red-500">This field is required</p>}
					</label>
					<label className={labelClass} >
						Description:
						<Editor
							value={initialDesc}
							apiKey='87sdhktm3lv6ev797loxuebuzcbv97w0kdrofgwbujanwogv'
							onInit={(evt, editor) => editorRef.current = editor}
							{...register('desc', { required: true })}
							onChange={e => setValue('desc', e.level.content)}
						/>
						{errors['desc'] && <p className="text-red-500">This field is required</p>}
					</label>
					<label className={labelClass} htmlFor="topic">
						Topic:
						<MyInput
							className="w-full border border-[#dbe0df] border-solid placeholder:text-[#777] py-[10px] rounded-[8px]"
							placeholder="Topic name" id="topic"
							{...register("topic", { required: true })}
						/>
						{errors['topic'] && <p className="text-red-500">This field is required</p>}
					</label>
					<div className="sm:flex sm:items-center">
						<label htmlFor="user-pic" className="cursor-pointer">
							<svg style={{ width: '50px', height: '50px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
						</label>
						<MyInput
							type="file"
							id="user-pic"
							{...register("user-pic", { required: true })}
						/>
						{/* {errors['user-pic'] && <p className="text-red-500">This field is required</p>} */}
					</div>
					<MyButton variant="dark" className="self-start">
						Add field
					</MyButton>
				</form>
			</div>
		</Layout>
	)
}
export default AddCollections;