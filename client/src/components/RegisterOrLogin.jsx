import Modal from "./UI/Modal";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/MyInput";

import { useState, useContext } from 'react';
import { AppContext } from "../context";
import { loginInputDates } from "../data/login-input-dates";
import { registerInputDates } from "../data/register-input-dates";
import MyForm from "./UI/MyForm";

import { locale } from '../data/locale';

function RegisterOrLogin() {
	const { hideAuthFormHandler } = useContext(AppContext);
	const [isAuth, setIsAuth] = useState(false);
	const textStyles = 'text-[14px] md:text-[16px]';

	function authHandler() {
		setIsAuth(!isAuth);
	}

	return (
		<Modal>
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
							<p className="font-bold mr-[10px] ">{locale.member}</p>
							<button onClick={authHandler} className=" text-[#49c5b1] font-bold">{locale.login}</button>
						</div>
						<MyForm className='flex flex-col gap-y-[20px]'>
							{registerInputDates.map(data =>
								<MyInput key={data.placeholder}
									className="border border-[#dbe0df] border-solid placeholder:text-[#dbe0df] py-[10px]"
									placeholder={data.placeholder} />
							)}
							<MyButton variant="green">{locale.register}</MyButton>
						</MyForm>
					</> :
					<>
						<div className={`flex justify-between items-center mb-[25px] w-[250px] sm:w-[430px] gap-[15px] ${textStyles}`}>
							<p className="font-bold mr-[10px]">{locale['not-member']}</p>
							<button onClick={authHandler} className=" text-[#49c5b1] font-bold">{locale.register}</button>
						</div>
						<MyForm className='flex flex-col gap-y-[20px]'>
							{loginInputDates.map(data =>
								<MyInput key={data.placeholder}
									className="border border-[#dbe0df] border-solid placeholder:text-[#dbe0df] py-[10px]"
									placeholder={data.placeholder} type={data.type} />
							)}
							<MyButton variant="green">{locale.login}</MyButton>
						</MyForm>
					</>
				}
			</div>
		</Modal >
	)
}

export default RegisterOrLogin;