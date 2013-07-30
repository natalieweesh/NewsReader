NewReader.Models.Feed = Backbone.Model.extend({

  initialize: function(response) {
    this.attributes = this.parse(response);
  },

  parse: function(response) {

    var responseCollection = new NewReader.Collections.Entries();

    for(var i = 0; i < response.entries.length; i++) {
      responseCollection.add(response.entries[i]);
    }

    response.entries = responseCollection;

    return response;
  }
});