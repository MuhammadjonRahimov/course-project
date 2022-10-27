import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/MyInput';
import Layout from '../components/UI/Layout';
import MySelect from '../components/UI/MySelect';

import { Editor } from '@tinymce/tinymce-react';
import { useRef, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { topics } from '../data/topics';
import { locale } from '../data/locale';

const labelClass = "font-bold"

function AddCollections() {
	const { register, handleSubmit, setValue, control, formState: { errors } } = useForm({ mode: "onSubmit", });
	const { fields: extraFields, append, remove } = useFieldArray({ control, name: "extraFields", });

	const editorRef = useRef();
	const navigate = useNavigate();

	const [isError, setIsError] = useState(false);

	function addExtraFieldHandler() {
		append({ name: '', type: '' });
	}

	function removeExtraField(e) {
		const index = e.target.dataset.id;
		if (index === 'all') {
			remove();
		} else remove(+index);
	}

	function formSubmit(data) {
		const numberOfTypes = data.extraFields.reduce((acc, e) => {
			const keys = Object.keys(acc);
			keys.forEach(key => {
				if (key === e.type) {
					acc[key] += 1;
				}
			})
			return acc;
		}, { number: 0, string: 0, date: 0, textarea: 0, checkbox: 0 });

		const values = Object.values(numberOfTypes);
		if (values.some(value => value > 3)) setIsError(true);
		else {
			setIsError(false);
			// navigate(-1);
			console.log(data);
		};
	}
	return (
		<Layout title="Add collection">
			<div className="p-5 max-w-[900px] mx-auto">
				<form onSubmit={handleSubmit(formSubmit)} className="flex flex-col gap-y-[15px]">
					<label className={labelClass} htmlFor="name">
						{locale['add-col-name']}
						<MyInput
							className="w-full border border-[#dbe0df] border-solid placeholder:text-[#777] py-[10px] rounded-[8px]"
							placeholder={locale['collection-name']} id="name"
							{...register("name", { required: true })}
						/>
						{errors['name'] && <p className="font-normal text-red-500">{locale.required}</p>}
					</label>
					<label className={labelClass} >
						{locale.desc}
						<Editor
							apiKey='87sdhktm3lv6ev797loxuebuzcbv97w0kdrofgwbujanwogv'
							onInit={(evt, editor) => editorRef.current = editor}
							{...register('desc', { required: true })}
							onChange={e => setValue('desc', e.level.content)}
						/>
						{errors['desc'] && <p className="font-normal text-red-500">{locale.required}</p>}
					</label>
					<label className={labelClass} htmlFor="topic">
						<MySelect
							defaultValue={locale.topic}
							data={locale.topics}
							register={register.bind(null, 'topic')}
							error={errors.topic && locale.required}
						/>
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
							className="hidden"
						/>
						{errors['user-pic'] && <p className="text-red-500">{locale.required}</p>}
					</div>
					<div>
						<h2 className={`my-3 font-bold text-[25px] ${isError && "text-red-500 uppercase"}`}>
							{isError ? locale['extra-limit'] : locale.extra}
						</h2>
						{
							extraFields.map((field, index) => (
								<div
									key={field.id}
									className="mb-2 last:mb-0 flex flex-col gap-2 lg:flex-row lg:items-center bg-[#dbe0df] p-2 rounded-[8px] lg:bg-transparent lg:p-0 lg:rounded-none"
								>
									<MyInput {...register(`extraFields.${index}.name`, { required: locale.req })}
										className="border border-[#dbe0df] border-solid placeholder:text-[#777] py-[10px] rounded-[8px] mr-2"
									/>
									{errors?.extraFields?.length > 0 && errors.extraFields[index]?.name && <p className="text-center text-red-500">{errors.extraFields[index].name.message}</p>}
									<select {...register(`extraFields.${index}.type`, { required: locale.selected })}
										className="border border-[#dbe0df] border-solid placeholder:text-[#777] p-[10px] rounded-[8px] mr-2"
									>
										<option value="">{locale['field-empty-option']}</option>
										<option value="string">String</option>
										<option value="number">Number</option>
										<option value="date">Date</option>
										<option value="textarea">Text</option>
										<option value="checkbox">Checkbox</option>
									</select>
									{errors?.extraFields?.length > 0 && errors.extraFields[index]?.type && <p className="text-center text-red-500">{errors.extraFields[index].type.message}</p>}
									<MyButton
										data-id={index}
										onClick={removeExtraField}
										variant="red"
										className="min-h-[20px] rounded-[20px] px-0 -order-1 self-end lg:order-[0] lg:self-center"
									>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
											<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
										</svg>
									</MyButton>
								</div>
							))
						}
					</div>
					<div className="flex items-center gap-2 self-start">
						<MyButton
							onClick={addExtraFieldHandler}
							variant="dark"
							className="disabled:opacity-[0.8] disabled:cursor-not-allowed"
							disabled={extraFields.length >= 15}
						>
							{locale['add-field']}
						</MyButton>
						{
							extraFields.length > 1 &&
							<MyButton
								data-id='all'
								onClick={removeExtraField}
								variant="red"
							>
								{locale['remove-all']}
							</MyButton>
						}
					</div>
					<MyButton type="submit" variant="dark" className="self-start">
						{locale.save}
					</MyButton>
				</form>
			</div>
		</Layout>
	)
}
export default AddCollections;