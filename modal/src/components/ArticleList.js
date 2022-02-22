import Article from './Article';
import React from 'react';
import SearchBar from './SearchBar';

class ArticleList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SearchBar />
                <div>
                    {this.props.events.map(function(events, i){
                        return <Article key={i} 
                                        name = {events.msnfp_name} 
                                        description = {events.msnfp_description} 
                                        id = {events.msnfp_eventid} 
                                        city = {events.msnfp_map_city}
                                        state = {events.msnfp_stateorprovince} 
                                        startTime = {events.new_starttime}
                                        endTime = {events.new_endtime}/>
                    })}
                </div>
            </div>
        );
    }
}

export default ArticleList;