import React from 'react';
import '../App.css';

class Modal extends React.Component {

	constructor(props) {
		super(props);

		this.outerStyle = {
			position: "fixed",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			overflow: "auto",
			zIndex: 1
		};

		// default style
		this.style = {
			modal: {
				position: "relative",
				width: "90%",
				padding: 20,
				boxSizing: "border-box",
				backgroundColor: "#fff",
				margin: "40px auto",
				borderRadius: 3,
				zIndex: 1,
				textAlign: "left",
				boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
			},

		};
	}

	// render modal
	render() {
		return (
			<div style={{ ...this.outerStyle, display: this.props.isModalOpen ? "block" : "none"}}>
				<div className="modalStyle-overlay" onClick={this.props.closeModal} />
				<div onClick={this.props.closeModal} />
				<div className="modalStyle-modalReal">{this.props.children}</div>
			</div>
		);
	}
}

export default Modal;