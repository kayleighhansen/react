import Article from './Article';
import React from 'react';

class ArticleList extends React.Component {
    constructor(props) { super(props); }

    render() {
        return (
            <div>
                {console.log(this.props)}
                {this.props.events.map(function (events, i) {
                    return <Article key={i}
                        name={events.msnfp_name}
                        description={events.msnfp_description}
                        id={events.msnfp_eventid}
                        type={events.msnfp_eventtypecode}

                        cost={events.new_ticketcost}
                        included={events.new_includedinprice}

                        startTime={events.new_starttime}
                        endTime={events.new_endtime} 

                        location={events.new_locationname}
                        locationDescription={events.crbb4_locationdescription}

                        addressStreet={events.msnfp_map_line1}
                        addressCity={events.msnfp_map_city}
                        addressState={events.msnfp_stateorprovince}
                        addressCountry={events.msnfp_map_country}
                        addressZipCode={events.msnfp_map_postalcode}

                        contactName={events.new_contactname}
                        contactEmail={events.new_contactemail}
                        contactPhone={events.new_contactphone}

                        volunteerCapacity={events.new_volunteercapacity}
                        volunteerContactName={events.new_volunteercontactname}
                        volunteerContactEmail={events.new_volunteercontactemail}
                        volunteerContactPhone={events.new_volunteercontactphone}/>
                })}
            </div>
        );
    }
}

export default ArticleList;