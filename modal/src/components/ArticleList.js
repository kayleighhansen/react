import Article from './Article';
import React from 'react';

class ArticleList extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        console.log(this.props)
        return <div> 

                <Article />

        </div>
    }
}

export default ArticleList;