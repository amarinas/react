var React = require('react');
var Map = React.createClass({

  componentDidMount(){
    //Only componentDidMount is called when the component is first add to
    //the page. this is why we are calling the following method manually.
    //this makes sure that our map initialization code is run the first time.

    this.componentDidUpdate();
  },

  componentDidUpdate(){

        if(this.lastLat == this.props.lat && this.lastLng == this.props.lng){

              //The map has already been initialized at this address.
              //Return from this method so that we dont reinitialize it
              /// and cause it to flicker
              return;

        }

        this.lastLat = this.props.lat;
        this.lastLng = this.props.lng;

        var map = new GMaps({
          el: '#map',
          lat: this.props.lat,
          lng: this.props.lng
        });
        //Adding a maker to the location we are showing

        map.addMaker({
          lat: this.props.lat,
          lng: this.props.lng
        });

  },

  render(){
    return(
      <div className="map-holder">
            <p>Loading...</p>
            <div id="map"></div>
      </div>
    );
  }
});


module.exports = Map;
