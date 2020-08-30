var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // MessagesView.$chats.html('');

    // debugger;
    for (let i = 0; i < Messages.storage.length; i++) {
      if (!Messages.storage[i].username) {
        Messages.storage[i].username = 'anonymous';
      }
      if (!Messages.storage[i].text) {
        Messages.storage[i].text = '';
      }
      if (!Messages.storage[i].roomname) {
        Messages.storage[i].roomname = 'lobby';
      }
      if (Rooms[Messages.storage[i].roomname] === undefined) {
        // debugger;
        Rooms[Messages.storage[i].roomname] = [];
        Rooms[Messages.storage[i].roomname].push(Messages.storage[i]);
        RoomsView.renderRoom(Messages.storage[i]);



      } else {
        Rooms[Messages.storage[i].roomname].push(Messages.storage[i]);
      }

      this.renderMessage(Messages.storage[i]);
    }
    //console.log('Rooms:', Rooms);
    //console.log(Messages.storage);
  },

  renderMessage: function(message) {
    var html = MessageView.render(message);
    MessagesView.$chats.append(html);
  }

};