import styles from './MyButton.module.css';

function MyButton({ children, variant, fullWidth, fullHeight, className, ...rest }) {
	const option = styles[variant] || "bg-[transparent]"
	// const width = fullWidth ? "w-full" : "";
	const height = fullHeight ? "h-full" : "h-[70px]";
	return (
		<button {...rest} className={`uppercase text-[14px] px-[25px] ${option}  ${height} ${className}`}>
			{children}
		</button>
	)
}
export default MyButton;