import Article from './Article';
import React from 'react';

class ArticleList extends React.Component {
    constructor(props) { super(props); }

    render() {
        return (
            <div>
                {this.props.events.map(function (events, i) {
                    return <Article key={i}
                        name={events.msnfp_name}
                        description={events.msnfp_description}
                        id={events.msnfp_eventid}
                        type={events.msnfp_eventtypecode}

                        startTime={events.new_starttime}
                        endTime={events.new_endtime} 

                        location={events.new_locationname}
                        addressStreet={events.msnfp_map_line1}
                        addressCity={events.msnfp_map_city}
                        addressState={events.msnfp_stateorprovince}
                        addressCountry={events.smsnfp_map_country}
                        addressZipCode={events.msnfp_map_postalcode}

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