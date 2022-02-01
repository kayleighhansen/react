import Modal from './Modal';
import React, { Component } from 'react';

class Article extends React.Component {
	constructor(props) {
		super(props);

        this.mainStyle = {
            article: {
                margin: "40px 40px",
                border: "1px solid gray"
            },
            allEventDetails: {
                display: "grid",
                gridTemplateColumns: "80% 20%"
            },
            activeEventsButtonsRow: {
                display: "flex"
            },
            shareBtnContainer: {
                marginLeft: "auto"
            },
            eventsButtonsRow: {
                backgroundColor: "lightgray",
                display: "flex"
            },
            eventDescription: {
                padding: "0px 20px",
                borderRight: "1px solid gray"
            },
            eventDetails: {
                padding: "0px 20px"
            },
            eventDescriptionTitle: {
                color: "black",
                textDecoration: "none",
                cursor: "pointer",
                fontSize: "40px",
                fontWeight: "100",
            },
            button: {
                backgroundColor: "white",
                border: 0,
                padding: "12px 15px",
                margin: "10px 10px",
                color: "black",
                display: "block",
                borderRadius: 3
            }
        };

        this.modalStyle = {
            overlay: {
                backgroundColor: "rgba(0, 0, 0,0.5)"
            },
            whiteButton: {
                backgroundColor: "gray",
                border: 0,
                padding: "12px 15px",
                color: "white",
                display: "block",
                borderRadius: 3
            },
            preferredButton: {
                backgroundColor: "black",
                border: 0,
                padding: "12px 15px",
                color: "white",
                display: "block",
                borderRadius: 3,
                marginRight: "10px",
            },
            totalEventDetails: {
                display: "grid",
                gridTemplateColumns: "70% 30%"
            },
            modalLink: {
                color: "blue",
                textDecoration: "none",
                fontStyle: "italic"
            },
            buttonRow: {
                display: "flex",
            },
            closeBtn: {
                backgroundColor: "black",
                border: 0,
                padding: "12px 15px",
                color: "white",
                display: "block",
                borderRadius: 3,
                marginLeft: "auto",
            },
            generalDetails: {
                marginTop: "60px",
                marginLeft: "10px",
            },
            specializedDetails: {
                marginRight: "30px"
            },
            modalTitle: {
                fontWeight: "100",
            },
            infoBox: {
                backgroundColor: "rgb(244 244 244)",
                padding: "5px 10px",
                margin: "10px 5px",
            },
            infoBoxTitle: {
                marginBottom: "0",
            marginLeft: "10px",
                fontSize: "15px"
            },
            infoBoxText: {
                marginTop: "10px",
            marginLeft: "10px",
                fontSize: "12px"
            }
        };
		

		// set initial state
		this.state = {
			isModalOpen: false,
			isInnerModalOpen: false
		};
		

		// bind functions
		this.closeModal = this.closeModal.bind(this);
		this.openModal = this.openModal.bind(this);
	}

	// close modal (set isModalOpen, true)
	closeModal() {
		this.setState({
			isModalOpen: false
		});
	}

	// open modal (set isModalOpen, false)
	openModal() {
		this.setState({
			isModalOpen: true
		});
	}

	// render app
	render() {
		return (
			<div>
				<article style={this.mainStyle.article}>
					<div style={this.mainStyle.allEventDetails}>
						<div style={this.mainStyle.eventDescription}>
							<h2>
								<a onClick={this.openModal} style={this.mainStyle.eventDescriptionTitle}>
									{this.props.name}
								</a>
							</h2>
							<p className="description">
								{this.props.description}
							</p>
						</div>
						<div style={this.mainStyle.eventDetails}>
							<p>
								<b>{this.props.day} {this.props.month}</b>
							</p>
							<p className="detail">{this.props.time} {this.props.timeZone}</p>
							<p className="detail">
								<b> {this.props.location}</b>
							</p>
							<p className="detail location">{this.props.addressStreet} {this.props.addressCity} {this.props.addressState}</p>
						</div>
					</div>
					<div style={this.mainStyle.eventsButtonsRow}>
						<div style={this.mainStyle.activeEventsButtonsRow}>
							<div >
								<button style={this.mainStyle.button} onClick={this.openModal}>
									{" "}
									View Details
								</button>
							</div>
							<div>
								<button style={this.mainStyle.button}> Register</button>
							</div>
						</div>
						<div style={this.mainStyle.shareBtnContainer}>
							<div>
								<button style={this.mainStyle.button}>Share</button>
							</div>
						</div>
					</div>
				</article>

				<Modal
					isModalOpen={this.state.isModalOpen}
					closeModal={this.closeModal}
					style={this.modalStyle}
				>
					<div style={this.modalStyle.totalEventDetails}>
						<div style={this.modalStyle.specializedDetails}>
							<div>
								<h1 style={this.modalStyle.modalTitle}>{this.props.name}</h1>

								<p>
									{this.props.description} This event occurs{" "}
									<span style={this.modalStyle.modalLink}> weekly</span>
								</p>
								<p>
									{this.props.checkIn} <span className="dash">-</span>{" "}
									<span className="added-detail">Check In</span>
								</p>
								<p>
									{this.props.eventStart} - {this.props.eventEnd} <span className="dash">-</span>{" "}
									<span className="added-detail">Event</span>
								</p>
							</div>

							<div>
								
								<p>
									{this.props.locationDescription}
								</p>
							</div>

							<p>
								{this.props.includedInPrice} {" "} If you need any assistance paying the participation fee, please contact us at <a style={this.modalStyle.modalLink} href="">email@email.com</a>.
							</p>
						</div>
						
						<div style={this.modalStyle.generalDetails}>
							<div style={this.modalStyle.infoBox}>
							<p style={this.modalStyle.infoBoxTitle}>
								<b>DATE</b>
							</p>
								<p style={this.modalStyle.infoBoxText}>{this.props.month} {this.props.day}, {this.props.year} </p>
							</div>
							
							<div style={this.modalStyle.infoBox}>
							<p style={this.modalStyle.infoBoxTitle}>
								<b>TIME</b>
							</p>
								<p style={this.modalStyle.infoBoxText}>{this.props.eventStart} - {this.props.eventEnd} {this.props.timeZone} </p>
							</div>
							
							<div style={this.modalStyle.infoBox}>
							<p style={this.modalStyle.infoBoxTitle}>
								<b>LOCATION</b>
								
							</p>
								<p style={this.modalStyle.infoBoxText}>
							<a href="" style={this.modalStyle.modalLink}>
									{this.props.addressStreet} {this.props.addresCity} {this.props.addressState} {this.props.addressZip} {this.props.addressCountry}
								</a>
								</p>
							</div>
							
							<div style={this.modalStyle.infoBox}>
							<p style={this.modalStyle.infoBoxTitle}>
								<b>COST</b>
							</p>
								
								<p style={this.modalStyle.infoBoxText}>${this.props.price} per participant </p>
								
							</div>
							
							<div style={this.modalStyle.infoBox}>
							<p style={this.modalStyle.infoBoxTitle}>
								<b>SHARE:</b>
							</p>
							</div>

							
						</div>
					</div>
					<div style={this.modalStyle.buttonRow}>
						<button style={this.modalStyle.preferredButton}>Register for this Event</button>
						<button style={this.modalStyle.whiteButton}>Sponsor A Player</button>
						<button
						style={this.modalStyle.closeBtn}
						onClick={this.closeModal}
					>
						X
					</button>
					</div>
					
				</Modal>
			</div>
		);
	}
}

export default Article;

