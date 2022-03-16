import Modal from './Modal';
import React from 'react';

import { faCalendarDays, faClock, faXmarkCircle, faBasketball, faEye, faShareNodes, faCircleDollarToSlot, faFacebook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../App.css';

class Article extends React.Component {
    constructor(props) {
        super(props);

    // Display the Event Type
        this.eventTypeArray = ["Day Camp", "Networking Event", "Fundraiser", "Drop In Game", "Half Time Show", "Other"];
        this.displayType = this.eventTypeArray[this.props.type.toString().substring(8, 9) - 1];

    // Display the Start Time 
        // date
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.abbreviated = (this.months[this.props.startTime.substring(5, 7) - 1]).substring(0, 3).toUpperCase();
        this.monthName = this.months[this.props.startTime.substring(5, 7) - 1];
        this.eventDay = this.props.startTime.substring(8, 10);
        this.eventYear = this.props.startTime.substring(0, 4);

        // time
        this.start_time = this.props.startTime;
        this.hour = parseInt(this.props.startTime.substring(11, 13));
        this.minutes = this.props.startTime.substring(14, 16);

        // AM or PM 
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
        this.websiteExists = this.props.locationWebsite;

        // address
        this.locationName = this.props.location;

        console.log(this.props);

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
                        </div>
                        <div className="articleStyle-eventDetailsSidebar">
                            <p className="articleStyle-iconBar calendarDays"><FontAwesomeIcon icon={faCalendarDays}/></p>
                            <p className="articleStyle-eventDetailsDate"> <b>{this.eventDay} {this.abbreviated}</b></p>
                            <p className="articleStyle-iconBar clock"><FontAwesomeIcon icon={faClock}/></p>
                            <p className="articleStyle-eventDetailsTime"> <b>{this.hour}:{this.minutes} - {this.end_hour}:{this.end_minutes} { this.end_timeDay }</b></p>
                        </div>
                    </div>
                    <div className="articleStyle-eventButtonsRow">
                        <div className="articleStyle-activeEventsButtonsRow">
                            <div className="articleStyle-buttonContainer"><button className="articleStyle-button" onClick={this.openModal}>{" "} <FontAwesomeIcon icon={faEye}/> View Details</button></div>
                            <div className="articleStyle-buttonContainer"><button className="articleStyle-button" onClick={() => this.registerEvent(this.props.id)}><FontAwesomeIcon icon={faBasketball}/> Register </button></div>
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
                                <p className="modalStyle-mainDescription">{this.displayType} | {this.props.description} </p>
                            </div>

                            <div className="modalStyle-locationDescriptionContainer">
                            <h3 className="modalStyle-priceTitle">Location</h3>
                                <p className="modalStyle-location modalStyle-subText">{this.props.location}</p>
                                <p className="modalStyle-locationDescription modalStyle-subText">{this.props.locationDescription}</p>
                            </div>

                            <div className="modalStyle-priceDescriptionContainer">
                                <h3 className="modalStyle-priceTitle">Price</h3>
                                <p className="modalStyle-priceNumber modalStyle-subText"> ${this.props.cost} per person</p>
                                <p className="modalStyle-priceIncluded modalStyle-subText">{this.props.included} If you need any assistance, <a href="#" className="modalStyle-contactUs">contact us</a>.</p>
                                <p className="modalStyle-priceHelp modalStyle-subText">{this.needsHelp = "0.00" ? '' : 'If you need help paying for a participation fee, please contact us at email@email.com'} </p>
                            </div>

                            <div className="modalStyle-priceDescriptionContainer">
                                <h3 className="modalStyle-priceTitle">Contact</h3>
                                <p>If you need any additional information about this event please contact:</p>
                                <p className="modalStyle-subText">{this.props.contactName}</p>
                                <p className="modalStyle-subText">{this.props.contactPhone}</p>
                                <p className="modalStyle-subText">{this.props.contactEmail}</p>
                            </div>

                            <div className="modalStyle-volunteersDescriptionContainer">
                                <h3 className="modalStyle-volunteersDescriptionTitle">{this.volunteersNeeded === true ? 'Volunteers' : ''}</h3>
                                <p className="modalStyle-volunteersDescriptionText">{this.volunteersNeeded === true ? 'Calling all amazing people wanting to do amazing things! If you are interested in volunteering for this event, please contact:' : ''}</p>
                                <p className="modalStyle-volunteersDescription-ContactName modalStyle-subText">{this.volunteersNeeded === true ? this.props.volunteerContactName : ''}</p>
                                <p className="modalStyle-volunteersDescription-ContactEmail modalStyle-subText">{this.volunteersNeeded === true ? this.props.volunteerContactEmail : ''}</p>
                                <p className="modalStyle-volunteersDescription-ContactPhone modalStyle-subText">{this.volunteersNeeded === true ? this.props.volunteerContactPhone : ''}</p>  
                            </div>
                        </div>

                        <div className="modalStyle-generalDetails">
                            <div className="modalStyle-infoBox">
                                <p className="modalStyle-infoBoxTitle"><b>DATE</b></p>
                                <p className="modalStyle-infoBoxText">{this.monthName} {this.eventDay}, {this.eventYear} </p>
                            </div>

                            <div className="modalStyle-infoBox">
                                <p className="modalStyle-infoBoxTitle"><b>TIME</b></p>
                                <p className="modalStyle-infoBoxText">{this.hour}:{this.minutes} - {this.end_hour}:{this.end_minutes} {this.end_timeDay} </p>
                            </div>

                            <div className="modalStyle-infoBox">
                                <p className="modalStyle-infoBoxTitle"><b>LOCATION</b></p>
                                <p className="modalStyle-infoBoxText">{this.locationName}</p>
                                <p className="modalStyle-infoBoxText">{this.props.addressStreet} {this.props.addressCity} {this.props.addressState} {this.props.addressZipCode} {this.props.addressCountry}</p>
                                <p className="modalStyle-infoBoxText"><a href={this.website} className="modalStyle-locationWebsite">{this.websiteExists === true ? this.props.location + 'Website' : ''} </a></p>
                            </div>

                            <div className="modalStyle-infoBox">
                                <p className="modalStyle-infoBoxTitle"><b>SHARE</b></p>
                                <div className="modalSyte-svgBox">
                                    <a href="https://www.facebook.com/Hoop.Camp">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="modalStyle-svgIcons" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>                                
                                    </a>
                                    <a href="https://www.instagram.com/hoop.camp/">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="modalStyle-svgIcons" viewBox="0 0 448 512"><path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"/></svg>
                                    </a>
                                    <a href="https://www.linkedin.com/in/steve-garrity-120111a/">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="modalStyle-svgIcons" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                                    </a>
                                    <a href="https://www.youtube.com/channel/UCyjJn5hGWbWXIgdKJhATYkA">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="modalStyle-svgIcons" viewBox="0 0 448 512"><path d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z"/></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modalStyle-buttonRow">
                        <a className="modalStyle-preferredButton" href="https://dev2.hoop.camp/log-in/" onClick={() => this.registerEvent(this.props.id)}><FontAwesomeIcon icon={faBasketball}/> Register for this Event</a>
                        <a className="modalStyle-whiteButton" href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=A9M6JZD6ZPK8N&source=url"><FontAwesomeIcon icon={faCircleDollarToSlot}/> Sponsor A Player</a>
                        <a className="modalStyle-closeButton" href="https://dev2.hoop.camp/react-event-registration" onClick={this.closeModal} > <FontAwesomeIcon icon={faXmarkCircle} className="closeButton"/> </a>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Article;

