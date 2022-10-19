import styles from './MyButton.module.css';

function MyButton({ children, variant, fullHeight, className, type = 'button', ...rest }) {
	const mode = styles[variant] || "bg-[transparent]"
	const height = fullHeight ? "h-full" : "min-h-[70px]";
	return (
		<button type={type}  {...rest} className={`uppercase text-[14px] px-[25px] ${mode} ${height} ${className}`}>
			{children}
		</button>
	)
}
export default MyButton;