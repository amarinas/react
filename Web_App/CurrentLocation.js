var React = require('react');

var CurrentLocation = React.createClass({

  toggleFavorite(){
    this.props.onFavoriteToggle(this.props.address);
  },

  render(){
    
  }
})
