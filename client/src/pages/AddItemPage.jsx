import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

import Layout from '../components/UI/Layout';
import MyInput from '../components/UI/MyInput';
import MyButton from '../components/UI/button/MyButton';

import { registerInputDates } from '../dates/register-input-dates';


function AddItemPage() {
	const { register } = useForm({ mode: 'onBlur' });
	const [tags, setTags] = useState([]);
	const inputRef = useRef(null);

	function inputActions() {
		const tag = `#${inputRef.current.value.trim()}`;
		setTags(prev => [...prev, tag]);
		inputRef.current.value = '';
		inputRef.current.focus();
	}
	function spaceHandler(e) {
		if (e.code === 'Space' && inputRef.current.value.trim().length > 0) {
			inputActions();
		}
	}

	function enterHandler(e) {
		if (e.code === "Enter" && inputRef.current.value.trim().length > 0) {
			inputActions();
		}
	}

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.addEventListener('keydown', spaceHandler);
			inputRef.current.addEventListener('keyup', enterHandler);
		}
		// return () => {
		// 	inputRef.current.removeEventListener('keydown', spaceHandler);
		// 	inputRef.current.removeEventListener('keyup', enterHandler);
		// };
	}, [])

	return (
		<Layout>
			<div className="h-[calc(100vh-70px)] overflow-y-auto pt-[200px] pb-[20px] md:overflow-y-[none] md:pt-0 md:pb-0 flex items-center justify-center">
				<form className='max-h-[600px] overflow-y-auto flex-1 max-w-[700px] p-[20px] sm:py-[50px] sm:px-[70px]  bg-[#dbe0df]  flex flex-col gap-y-[20px]'>
					<div className="flex flex-wrap gap-4 bg-white p-2">
						{tags.map((tag, index) =>
							<span key={index} className="bg-[#dbe0df] p-2 rounded-[20px]">
								{tag}
							</span>)}
						<MyInput ref={inputRef} id="input" className="flex-1 placeholder:text-[#dbe0d]" placeholder="Add tag" />
					</div>
					{registerInputDates.map(data =>
						<MyInput key={data.placeholder}
							className="border border-[#dbe0df]  placeholder:text-[#dbe0d] py-[15px]"
							placeholder={data.placeholder}
						/>
					)}
					<MyButton variant="green">add item</MyButton>
				</form>
			</div>
		</Layout>
	)
}

export default AddItemPage;