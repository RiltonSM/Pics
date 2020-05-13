import React from 'react';


class SearchBar extends React.Component{
    state = {term: '', placeholder: 'Digite aqui'};

    onFormSubmit= (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render (){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor="busca">Image Search</label>
                        <input type="text" name="busca" placeholder={this.state.placeholder} value={this.state.term} onChange={e => this.setState({term: e.target.value}) }></input>
                    </div>    
                </form>
            </div>
        );
    }
        
    
};

export default SearchBar;