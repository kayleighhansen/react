import Modal from './Modal';
import React from 'react';

import { faCalendarDays, faClock, faLocationDot, faBasketball, faEye, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../App.css';

class Article extends React.Component {
    constructor(props) {
        super(props);

    

    // Display the Event Type
        this.eventTypeArray = ["Day Camp", "Networking Event", "Fundraiser", "Drop In Game", "Half Time Show", "Other"];
        this.displayType = this.eventTypeArray[this.props.type.toString().substring(8, 9) - 1];

    // Display the Start Time 
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        this.abbreviated = (this.months[this.props.startTime.substring(5, 7) - 1]).substring(0, 3).toUpperCase();
        this.monthName = this.months[this.props.startTime.substring(5, 7) - 1];
        this.eventDay = this.props.startTime.substring(8, 10);
        this.eventYear = this.props.startTime.substring(0, 4);

        this.start_time = this.props.startTime;
        this.hour = parseInt(this.props.startTime.substring(11, 13));
        this.minutes = this.props.startTime.substring(14, 16);

        if(this.hour < 12) {
            this.timeDay = "AM";
            
        } else {
            this.timeDay = "PM";
            this.hour = this.hour - 12;
        }

    // Display the End Time
        this.end_time = this.props.endTime;
        this.end_hour = parseInt(this.props.endTime.substring(11, 13));
        this.end_minutes = this.props.endTime.substring(14, 16);

        // set AM or PM, display right right hour
        if(this.end_hour <= 12) {
            this.end_timeDay = "AM";
            
        } else {
            this.end_timeDay = "PM";
            this.end_hour = this.end_hour - 12;
        }

    // Modal Details
        // description
        this.hasMotto = this.props.motto;
        this.hasCheckIn = this.props.eventCheckInTime;

        // location

        this.locationDescriptionExists = false;

        // price
        this.hasIncludedinPrice = this.props.includedInPrice;
        this.cost = this.props.cost;

        // volunteers
        this.volunteersNeeded = false;

        // display volunteer contact info
        if(this.props.volunteerCapacity > 0 || this.props.volunteerCapacity != null) {
            this.volunteersNeeded = true;
            this.volunteerContact = this.props.volunteersContactName;
            this.volunteerEmail = this.props.volunteersContactPhone;
            this.volunteerPhone = this.props.volunteerContactPhone;
        }

        // sidebar
        this.website = this.props.locationWebsite;

        // address
        this.locationName = this.props.location;

        // set initial state
        this.state = {
            isModalOpen: false,
            isInnerModalOpen: false
        };

        // bind functions
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.registerEvent = this.registerEvent.bind(this);

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

    // set eent id in session storage
    registerEvent(eventId) {
        // set session storage
        sessionStorage.setItem('eventId', JSON.stringify(eventId));

        // check session storage for clientid before redirecting
        if(sessionStorage.getItem('clientId') != null) {
            console.log("redirect to sign in page");
        } else {
            console.log("redirect to event registration page");
        }
    }

    // render app
    render() {
        return (
            <div>
                <article className="articleStyle-article">
                    <div className="articleStyle-allEventsDetails">
                        <div className="articleStyle-eventDescription">
                            <h2 className="articleStyle-eventHeader">
                                <a onClick={this.openModal} href="#" className="articleStyle-eventDescriptionTitle">{this.props.name}<span className="articleStyle-eventTitleCity">, {this.props.addressCity} </span></a>
                            </h2>
                            <p className="articleStyle-eventDescriptionText">{this.props.description}</p>
                            {/* <p className="articleStyle-eventDescriptionText articleStyle-eventType"> {this.displayType}</p> */}

                        </div>
                        <div className="articleStyle-eventDetailsSidebar">
                            <p className="articleStyle-iconBar calendarDays"><FontAwesomeIcon icon={faCalendarDays}/></p>
                            <p className="articleStyle-eventDetailsDate"> <b>{this.eventDay} {this.abbreviated}</b></p>

                            <p className="articleStyle-iconBar clock"><FontAwesomeIcon icon={faClock}/></p>
                            <p className="articleStyle-eventDetailsTime"> <b>{this.hour}:{this.minutes} - {this.end_hour}:{this.end_minutes} { this.end_timeDay }</b></p>

                            {/* <p className="articleStyle-iconBar locationDot"><FontAwesomeIcon icon={faLocationDot}/></p>
                            <p className="articleStyle-eventDetailsLocation"> {this.props.location} {this.props.addressStreet} {this.props.addressCity} {this.props.addressState} {this.props.addressCountry} {this.props.addressZipCode}</p> */}
                        </div>
                    </div>
                    <div className="articleStyle-eventButtonsRow">
                        <div className="articleStyle-activeEventsButtonsRow">
                            <div className="articleStyle-buttonContainer">
                                <button className="articleStyle-button" onClick={this.openModal}>{" "} <FontAwesomeIcon icon={faEye}/> View Details</button>
                            </div>
                            <div className="articleStyle-buttonContainer">
                                <button className="articleStyle-button" onClick={() => this.registerEvent(this.props.id)}><FontAwesomeIcon icon={faBasketball}/> Register </button>
                            </div>
                        </div>
                        <div className="articleStyle-buttonContainer article-Style-button-share">
                            <div>
                                <form action="https://www.facebook.com/Hoop.Camp">
                                    <button type="submit" className="articleStyle-button"><FontAwesomeIcon icon={faShareNodes}/> Share</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </article>

                <Modal
                    isModalOpen={this.state.isModalOpen}
                    closeModal={this.closeModal}>

                    <div className="modalStyle-totalEventDetails">
                        <div className="modalStyle-specializedDetails">
                            <div className="modalStyle-mainContentContainer">
                                <h1 className="modalStyle-mainTitle" >{this.props.name}</h1>
                                <h3 className="modalStyle-mainMotto">{this.hasMotto ? this.hasMotto : ''}</h3>
                                <p className="modalStyle-mainDescription">{this.props.description} </p>
                                {/* <p className="modalStyle-checkIn">{this.hasCheckIn = '' ? this.hasCheckIn + '- Check in' : ''}</p> */}
                                {/* <p className="modalStyle-mainSchedule">{this.hour}:{this.minutes} - {this.end_hour}:{this.end_minutes} {this.end_timeDay} <span className="dash">-</span>{" "}<span className="added-detail">Event</span></p> */}
                            </div>

                            <div className="modalStyle-locationDescriptionContainer">
                                <p className="modalStyle-location">{this.props.location}</p>
                                <p className="modalStyle-locationDescription">{this.locationDescriptionExists === true ? this.props.locationDescription : ''}</p>
                            </div>

                            <div className="modalStyle-priceDescriptionContainer">
                                <h3 className="modalStyle-priceTitle">Price</h3>
                                <p className="modalStyle-priceNumber">{this.cost !== "0.00" ? this.cost : 'FREE'} </p>
                                <p className="modalStyle-priceIncluded">{this.hasIncludedinPrice !== "null" ? this.hasIncludedinPrice : ''}</p>
                                <p className="modalStyle-priceHelp">{this.needsHelp = "0.00" ? '' : 'If you need help paying for a participation fee, please contact us at email@email.com'} </p>
                            </div>

                            <div className="modalStyle-volunteersDescriptionContainer">
                                <h3 className="modalStyle-volunteersDescriptionTitle">{this.volunteersNeeded === true ? 'Volunteers' : ''}</h3>
                                <p className="modalStyle-volunteersDescriptionText">{this.volunteersNeeded === true ? 'Calling all amazing people wanting to do amazing things! If you are interested in volunteering for this event, please contact:' : ''}</p>
                                <p className="modalStyle-volunteersDescription-ContactName">{this.volunteersNeeded === true ? this.props.volunteerContactName : ''}</p>
                                <p className="modalStyle-volunteersDescription-ContactEmail">{this.volunteersNeeded === true ? this.props.volunteerContactEmail : ''}</p>
                                <p className="modalStyle-volunteersDescription-ContactPhone">{this.volunteersNeeded === true ? this.props.volunteerContactPhone : ''}</p>  
                            </div>
                        </div>

                        <div className="modalStyle-generalDetails">
                            <div className="modalStyle-infoBox">
                                <p className="modalStyle-infoBoxTitle"><b>DATE</b></p>
                                <p className="modalStyle=infoBoxText">{this.monthName} {this.eventDay}, {this.eventYear} </p>
                            </div>

                            <div className="modalStyle-infoBox">
                                <p className="modalStyle-infoBoxTitle"><b>TIME</b></p>
                                <p className="modalStyle=infoBoxText">{this.hour}:{this.minutes} - {this.end_hour}:{this.end_minutes} {this.end_timeDay} </p>
                            </div>

                            <div className="modalStyle-infoBox">
                                <p className="modalStyle-infoBoxTitle"><b>LOCATION</b></p>
                                <p className="modalStyle=infoBoxText">{this.locationName}</p>
                                <p className="modalStyle=infoBoxText">{this.props.addressStreet} {this.props.addressCity} {this.props.addressState} {this.props.addressZipCode} {this.props.addressCountry}</p>
                                <p className="modalStyle=infoBoxText"><a href={this.website} className="modalStyle-locationWebsite">{this.props.location} Website</a></p>
                            </div>

                            <div className="modalStyle-infoBox">
                                <p className="modalStyle-infoBoxTitle"><b>COST</b></p>
                                <p className="modalStyle=infoBoxText">{this.cost !== "0.00" ? this.cost : 'FREE'}</p>
                            </div>
                        </div>
                    </div>
                    <div className="modalStyle-buttonRow">
                        <button className="modalStyle-preferredButton">Register for this Event</button>
                        <button className="modalStyle-whiteButton">Sponsor A Player</button>
                        <button className="modalStyle-closeButton" onClick={this.closeModal} > X </button>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Article;

