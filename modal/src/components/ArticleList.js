import Article from './Article';
import React from 'react';

class ArticleList extends React.Component {
    constructor(props) {
        super(props);

        this.formStyle = {
            form: {
                display: "flex",
                justifyContent: "center"
            },
            title: {
                textAlign: "center"
            },  
            container: {
                padding: "20px",
                backgroundColor: "rgb(232, 232, 232)",
                margin: "0px 40px"
            },
            bar: {
                border: "none",
                padding: "6px",
                width: "80%",
                marginRight: "20px",
                fontSize: "15px"
            },
            button: {
                border: "none",
                backgroundColor: "rgb(156 171 226)",
                padding: "8px",
                borderRadius: "3px",
                color: "white"
            }
        }

    }

    render() {

        return (
            <div>
                <h1 style={this.formStyle.title}>Upcoming Events</h1>
                <div style={this.formStyle.container}>
                    <form action="" style={this.formStyle.form}>
                        <input type="text" placeholder="Search.." name="search" style={this.formStyle.bar} ></input>
                        <button type="submit" style={this.formStyle.button}>Search</button>
                    </form>
                </div>
                <div>
                    {this.props.events.map(function (events, i) {
                        return <Article key={i}
                            name={events.msnfp_name}
                            description={events.msnfp_description}
                            id={events.msnfp_eventid}

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
            </div>
        );
    }
}

export default ArticleList;