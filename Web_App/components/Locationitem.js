var React = require('react');
var moment = require('moment');

var LocationItem = React.createClass({

    handleClick(){
      this.props.onClick(this.props.address);

    },

    render(){

        var cn = "list-group-item";

        if(this.props.active){
          cd += " active-location";
        }

        return (
            <a className={cn} onClick={this.handleClick}>
                  {this.props.address}
                  <span className="createAt">{ moment(this.props.timestamp).fromNow() }</span>
                  <span className="glyphicon-menu-right"></span>

            </a>
        )
    }

});

module.exports = LocationItem;
