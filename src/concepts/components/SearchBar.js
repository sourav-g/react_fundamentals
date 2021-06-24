import React from 'react';

class SearchBar extends React.Component{
    state = { term : 'Hi there'};

    onFormSubmit = (e) => {
        e.preventDefault();
        //this is the props that is passed on from the parent App component
        //to the child component. This callback is invoked on form submit in the SearchBar 
        //component.
        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" 
                            value={this.state.term}    
                            onChange={(e) => this.setState({term: e.target.value})}/>
                    </div>
                </form>
            </div>
        ); 
    }
}

export default SearchBar;