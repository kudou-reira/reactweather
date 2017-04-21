import React from 'react';

class Gmap extends React.Component {
    
    componentDidMount() {
        
        new google.maps.Map(this.refs.map, {
            zoom: 15,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }    
        });
    }
    
    
    render() {

        return <div ref = "map" />;
    }
    
}

export default Gmap;