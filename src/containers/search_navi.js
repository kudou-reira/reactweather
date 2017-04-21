import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findWeather} from '../actions/index';

class SearchNavi extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state = {search: ''};
        
        this.onNewChange = this.onNewChange.bind(this);
        this.newSubmit = this.newSubmit.bind(this);
    }
    
    onNewChange(e){
        this.setState({search: e.target.value});
    }
    
    newSubmit(e){
        
        //stop form from submitting
        e.preventDefault();
        this.props.findWeather(this.state.search);
        this.setState({search: ""});
        
    }
    
    render() {
        
        return (
            <form onSubmit = {this.newSubmit} className = "input-group">
                <input 
                    placeholder = "Search for a cities' 5 day weather forecast"
                    className = "form-control"
                    value = {this.state.search}
                    onChange = {this.onNewChange}
                />
                <span className = "input-group-btn">
                    <button type = "submit" className = "btn btn-danger">Search</button>
                </span>
            </form>
        
        );   
    }
}


function mapDispatchToProps (dispatch) {
    
    return bindActionCreators ({findWeather}, dispatch);
    
}

//null for first parameter means that you don't need APPLICATION state

export default connect(null, mapDispatchToProps)(SearchNavi);