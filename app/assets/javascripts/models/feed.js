NewReader.Models.Feed = Backbone.Model.extend({

  initialize: function(response) {
    this.initEntries();
    this.parse(response);
  },

  initEntries: function() {
    this.entries = new NewReader.Collections.Entries();
  },

  parse: function(response) {
    if(!this.entries)
      this.initEntries();

    for(var i = 0; i < response.entries.length; i++) {
      this.entries.add(response.entries[i]);
    }
  }
});