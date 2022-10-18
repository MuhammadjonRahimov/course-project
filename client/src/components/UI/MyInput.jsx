import React from 'react';

const MyInput = React.forwardRef(({ className, ...props }, ref) => {
	return (
		<input
			type={props.type || 'text'}
			ref={ref}
			className={`px-[10px] py-[5px]
			placeholder:text-inherit tracking-[1px] font-normal sm:tracking-[2px] ${className}`}
			{...props}
		/>
	)
})
export default MyInput;