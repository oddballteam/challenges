$(function() {
  App.efin = App.cable.subscriptions.create("EfinChannel", {
    connected: function() {
      console.log('connected')
    },
    disconnected: function() {},
    received: function(data) {
      $('#efin').text(data.body)
    }
  });
  $( "form" ).on( "submit", function( e ) {
    e.preventDefault();
    var data = {};
    $( this ).serializeArray().map(function(x){data[x.name] = x.value;}); 
    App.efin.send(data)
  });
})