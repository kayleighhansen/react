

function Model() {

    return <div className="total-event-details-view">
        <div className="event-description">
            <div>
                <h1>Event Name</h1>
                <p>JAN 10 2022</p>
               
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos explicabo laudantium, vel sunt
                    doloremque eius commodi nesciunt natus. Ipsam repellat excepturi, ipsa corrupti quod ullam libero
                    minima? Fugiat, iste rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nam ex
                    nostrum atque quasi deleniti harum, praesentium voluptas suscipit vitae voluptatum et esse corrupti,
                    fugiat odio, nisi assumenda. Sit, corporis!</p>
                <p>10:00 AM <span className="dash">-</span> <span className="added-detail">Check In</span></p>
                <p>10:00 AM - 12:00 PM <span className="dash">-</span> <span className="added-detail">Event</span></p>
            </div>

            <div>
                <h2>Location</h2>
                <a href="" className="added-detail">123 Address Street State 20136 </a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae autem quisquam assumenda perferendis
                    incidunt itaque vero. Esse ipsa quae voluptas sed vitae quidem vero, debitis perferendis voluptate
                    labore id. Ad!</p>

            </div>

            <h2>Price</h2>
            <p className="added-detail">$30 per participant</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima dolorem, placeat harum quibusdam error
                officia vero amet corporis iste esse porro inventore, odio molestiae exercitationem voluptatibus
                repudiandae itaque atque eius!
            </p>
            <div className="button-row">
                <button className="registration-button">Register for this Event</button>
                <button className="registration-button">Sponsor A Player</button>
            </div>


        </div>
        <div class="event-links">

            <p><b>Questions?</b></p>
            <p>Have any questions about this event? Send us a message at:</p>
            <a href="" className="added-detail">email@emailaddress.com</a>

            <p><b>Share:</b></p>
            <p>Get your friends and family involved by sharing this event on social media</p>
            <div className="group-of-social-media">
                <div className="social-media-icon">
                    <a href="">F</a>
                </div>
                <div className="social-media-icon">
                    <a href="">I</a>
                </div>
                <div className="social-media-icon">
                    <a href="">E</a>
                </div>
                <div className="social-media-icon">
                    <a href="">M</a>
                </div>
            </div>
        </div>
    </div>

}

export default Model;