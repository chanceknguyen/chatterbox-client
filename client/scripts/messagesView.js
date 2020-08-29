var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

    // debugger;
    for (let i = 0; i < Messages.storage.length; i++) {
      //debugger;
      var html = MessageView.render(Messages.storage[i]);
      this.renderMessage(html);
    }
  },

  renderMessage: function(html) {
    MessagesView.$chats.append(html);
  }

};