var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function(roomname) {
    // MessagesView.$chats.html('');
    for (var i = 0; Rooms[roomname].length; i++) {
      console.log(Rooms[roomname][i]);
      this.render(Rooms[roomname][i]);
    }
  },

  render: function(message) {
    //RoomsView.$select.append()
    var html = MessageView.render(message);
    MessagesView.$chats.append(html);


  },




  renderRoom: function(message) {
    //console.log(message);
    var html = RoomsView.renderhtml(message);
    RoomsView.$select.append(html);
  },

  renderhtml: _.template(`
  <option value='roomname'> <%-roomname%> </option>
  `)



};


