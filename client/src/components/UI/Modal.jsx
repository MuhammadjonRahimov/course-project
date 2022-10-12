import ReactDOM from 'react-dom';


const portalElement = document.getElementById('modal');

function Backdrop() {
	return (
		<div
			className="bg-[rgba(0,0,0,0.8)] absolute top-0 left-0 bottom-0 right-0 z-[1]">
		</div>
	)
}
function Overlay(props) {
	return (
		<div className="absolute top-0 left-0 bottom-0 right-0 border ">
			{props.children}
		</ div>
	)
}
function Modal(props) {
	return (
		<>
			{ReactDOM.createPortal(<Backdrop />, portalElement)}
			{ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, portalElement)}
		</>
	)
}
export default Modal;