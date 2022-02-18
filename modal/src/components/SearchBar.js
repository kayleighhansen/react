import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.formStyle = {
            form: {
                display: "flex",
                justifyContent: "center"
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
            <div style={this.formStyle.container}>
                <form action="/action_page.php" style={this.formStyle.form}>
                    <input type="text" placeholder="Search.." name="search" style={this.formStyle.bar}></input>
                    <button type="submit" style={this.formStyle.button}>Search</button>
                </form>
            </div>
        );
    }
}

export default SearchBar;