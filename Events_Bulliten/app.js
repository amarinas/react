new Vue({
  //we want to target the div with an id of 'events'
  el: '#events',

  //Here we can register any values or collection that hold data
  //for the application
  data: {
    event:{ name: '', description: '', date: ''},
    events: []
  },

  //anything within the ready function will run when the application loads
  ready: function(){
    //When the application loads, we want to call the method that initializes
    //some data
    this.fetchEvents();
  },

  //methods we want to use in our application are registered Here
  methods: {

    //We dedicate a method to retrieving and setting some data
    fetchEvents:function(){
      var events =[
        {
          id: 1,
          name: 'TIFF',
          description: 'Toronto International Film Festival',
          date: '2015-09-10'
        },
        {
          id: 2,
          name: 'The Martian Premiere',
          description: 'The Movie premiere to theaters',
          date: '2015-10-10'
        },
        {
          id: 3,
          name: 'SXSW',
          description: 'Music festival in TX',
          date: '2016-03-10'
        }

      ];
      //$set is a convenience method provided by vue that is similar to pushing
      //data onto an array
      this.$set('events', events);
    },

    // Adds an event to the existing events array
    addEvent: function(){
      if(this.event.name){
        this.events.push(this.event);
        this.event = {name: '', description: '', date: ''};
      }
    },

    deleteEvent: function(index){
      if(confirm("Are you sure you want to delete this event?")){
        this.events.splice(index, 1);
      }
    }
  }
});
