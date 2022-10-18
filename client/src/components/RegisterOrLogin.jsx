import Modal from "./UI/Modal";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/MyInput";

import { useState, useContext } from 'react';
import { IsShownContext } from "../context";
import { loginInputDates } from "../dates/login-input-dates";
import { registerInputDates } from "../dates/register-input-dates";
import MyForm from "./UI/MyForm";

function RegisterOrLogin() {
	const { hideAuthFormHandler } = useContext(IsShownContext);
	const [isAuth, setIsAuth] = useState(false);
	const textStyles = 'text-[14px] md:text-[16px]';

	function authHandler() {
		setIsAuth(!isAuth);
	}

	return (
		<Modal isReg={true}>
			<MyButton variant="light" onClick={hideAuthFormHandler} className="bg-white absolute z-[3] right-0 top-0">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</MyButton>
			<div className="absolute  bottom-0 sm:bottom-[50%] sm:translate-y-1/2 left-[50%] -translate-x-1/2
				p-[20px] sm:py-[50px] sm:px-[70px] z-[2] bg-[white] overflow-y-auto">
				{isAuth ?
					<>
						<div className={`flex justify-between items-center mb-[25px] w-[250px] sm:w-[430px] gap-[15px] ${textStyles}`}>
							<p className="font-bold mr-[10px] ">Are you a member ?</p>
							<button onClick={authHandler} className=" text-[#49c5b1] font-bold">Login now</button>
						</div>
						<MyForm className='flex flex-col gap-y-[20px]'>
							{registerInputDates.map(data =>
								<MyInput key={data.placeholder} className="border border-[#dbe0df] border-solid  p-[10px]" placeholder={data.placeholder} />
							)}
							<MyButton variant="green">register now</MyButton>
						</MyForm>
					</> :
					<>
						<div className={`flex justify-between items-center mb-[25px] w-[250px] sm:w-[430px] gap-[15px] ${textStyles}`}>
							<p className="font-bold mr-[10px]">Not a member yet?</p>
							<button onClick={authHandler} className=" text-[#49c5b1] font-bold">Register now</button>
						</div>
						<MyForm className='flex flex-col gap-y-[20px]'>
							{loginInputDates.map(data =>
								<MyInput key={data.placeholder} className="border border-[#dbe0df] border-solid  p-[10px]" placeholder={data.placeholder} type={data.type || 'text'} />
							)}
							<MyButton variant="green">login now</MyButton>
						</MyForm>
					</>
				}
			</div>
		</Modal>
	)
}

export default RegisterOrLogin;