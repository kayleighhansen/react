function Event(props) {
    function getEvents() {

    }

    function displayEvents() {
        
    }

    function viewDetails() {
        console.log("view " + props.id);
    }

    function registerEvent() {
        console.log("regsiter " + props.id);
    }

    function shareEvent() {
        console.log("share " + props.id);
    }
    return <article>
        <div className='all-event-details'>
            <div className='event-description'>
                <h2 className='event-description-title'><a href="">{props.name}, {props.location}</a></h2>
                <p className='description'>{props.description}</p>
            </div>
            <div className='event-details'>
                <p className='detail'>{props.month} {props.day}</p>
                <p className='detail'>{props.time}</p>

            </div>
        </div>
        <div className='events-buttons-row'>
            <div>
                <div>
                    <button onClick={viewDetails} >View Details</button>
                </div>
                <div>
                    <button onClick={registerEvent} >Register</button>
                </div>
            </div>
            <div className='share-btn-container'>
                <div>
                    <button className='share-btn' onClick={shareEvent} >Share</button>
                </div>
            </div>
        </div>
    </article>
}

export default Event;