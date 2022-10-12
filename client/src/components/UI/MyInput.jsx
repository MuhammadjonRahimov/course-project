import React from 'react';

const MyInput = React.forwardRef((props, ref) => {
	return (
		<input
			type={props.type || 'text'}
			ref={ref}
			className="w-full flex-1 bg-transparent px-[10px] py-[5px]
			placeholder:text-inherit tracking-[1px] sm:tracking-[2px]"
			{...props}
		/>
	)
})
export default MyInput;