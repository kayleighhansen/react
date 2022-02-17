import Modal from './Modal';
import React from 'react';

class Article extends React.Component {
    constructor(props) {
        super(props);


        this.mainStyle = {
            article: {
                margin: "40px 40px",
                border: "1px solid lightgray"
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
                backgroundColor: "#e8e8e8",
                display: "flex"
            },
            eventDescription: {
                padding: "0px 20px",
                borderRight: "1px solid lightgray"
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
                margin: "10px 0px 10px 0px",
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
            },
            socialBox: {
                backgroundColor: "white",
                height: "50px",
                width: "50px",
                marginRight: "5px",
                marginTop: "10px",
                marginBottom: "10px",
            },
            socialBoxContainer: {
                display: "flex",
                justifyContent: "center"
            }
        };

        this.abbreviated = this.props.eventMonth;
        this.hasMotto = this.props.motto;
        this.hasCheckIn = this.props.eventCheckInTime;
        this.hasIncludedinPrice = this.props.includedInPrice;
        this.cost = this.props.cost;
        this.needsHelp = this.props.cost;
        this.volunteersNeeded = this.props.volunteersNeeded;
        this.interestedVolunteering = this.props.volunteersNeeded;
        this.volunteerContact = this.props.volunteersContactName;
        this.volunteerEmail = this.props.volunteersContactPhone;
        this.volunteerPhone = this.props.volunteerContactPhone;
        this.website = this.props.locationWebsite;

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
                                <b>{this.props.eventDay} {this.abbreviated}</b>
                            </p>
                            <p className="detail">{this.props.eventStartTime} {this.props.timeZone}</p>
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
                                <button style={this.mainStyle.button} href=""> Register</button>
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

                                <h3>{this.hasMotto ? this.hasMotto : ''}</h3>

                                <p>
                                    {this.props.description}
                                </p>
                                <p>
                                    {this.hasCheckIn = '' ? this.hasCheckIn + '- Check in' : ''}
                                </p>
                                <p>
                                    {this.props.eventStartTime} - {this.props.eventEndTime} <span className="dash">-</span>{" "}
                                    <span className="added-detail">Event</span>
                                </p>
                            </div>

                            <div>
                                <p>
                                    {this.props.locationDescription}
                                </p>
                            </div>

                            <div>
                                <h3>Price</h3>

                                <p>{this.cost !== "0.00" ? this.cost : 'FREE'} </p>

                                <p>{this.hasIncludedinPrice !== "null" ? this.hasIncludedinPrice : ''}</p>

                                <p>{this.needsHelp = "0.00" ? '' : 'If you need help paying for a participation fee, please contact us at email@email.com'} </p>
                            </div>

                            <div>
                                <h3>{this.volunteersNeeded = "no" ? '' : 'Volunteers'}</h3>

                                <p>{this.interestedVolunteering = "null" ? '' : 'If you are interested in volunteering for this event, please contact:'}</p>

                                <p>{this.volunteerContact = "null" ? '' : this.props.volunteersContactName}</p>
                                <p>{this.volunteerEmail = "null" ? '' : this.props.volunteersContactEmail}</p>
                                <p>{this.volunteerPhone = "null" ? '' : this.props.volunteersContactPhone}</p>
                            </div>
                        </div>

                        <div style={this.modalStyle.generalDetails}>
                            <div style={this.modalStyle.infoBox}>
                                <p style={this.modalStyle.infoBoxTitle}>
                                    <b>DATE</b>
                                </p>
                                <p style={this.modalStyle.infoBoxText}>{this.props.eventMonth} {this.props.eventDay}, {this.props.eventYear} </p>
                            </div>

                            <div style={this.modalStyle.infoBox}>
                                <p style={this.modalStyle.infoBoxTitle}>
                                    <b>TIME</b>
                                </p>
                                <p style={this.modalStyle.infoBoxText}>{this.props.eventStartTime} - {this.props.eventEndTime} {this.props.timeZone} </p>
                            </div>

                            <div style={this.modalStyle.infoBox}>
                                <p style={this.modalStyle.infoBoxTitle}>
                                    <b>LOCATION</b>
                                </p>
                                <p style={this.modalStyle.infoBoxText}>
                                    {this.props.location}
                                </p>
                                <p style={this.modalStyle.infoBoxText}>
                                    <a href={this.props.addressGoogleMaps} style={this.modalStyle.modalLink}>
                                        {this.props.addressStreet} {this.props.addresCity} {this.props.addressState} {this.props.addressZip} {this.props.addressCountry}
                                    </a>
                                </p>
                                <p style={this.modalStyle.infoBoxText}>
                                    <a href={this.website} style={this.modalStyle.modalLink}>
                                        {this.props.location} Website
                                    </a>
                                </p>
                            </div>

                            <div style={this.modalStyle.infoBox}>
                                <p style={this.modalStyle.infoBoxTitle}>
                                    <b>COST</b>
                                </p>

                                <p style={this.modalStyle.infoBoxText}>{this.cost !== "0.00" ? '$' + this.cost : 'FREE'} </p>
                            </div>

                            <div style={this.modalStyle.infoBox}>
                                <p style={this.modalStyle.infoBoxTitle}>
                                    <b>SHARE:</b>
                                </p>

                                <div style={this.modalStyle.socialBoxContainer}>
                                    <div style={this.modalStyle.socialBox} className='facebook'></div>
                                    <div style={this.modalStyle.socialBox} className='instagram'></div>
                                    <div style={this.modalStyle.socialBox} className='linkedIn'></div>
                                    <div style={this.modalStyle.socialBox} className='email'></div>
                                    <div style={this.modalStyle.socialBox} className='message'></div>
                                </div>
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

