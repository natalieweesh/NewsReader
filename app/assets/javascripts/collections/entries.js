NewReader.Collections.Entries = Backbone.Collection.extend({
  model: NewReader.Models.Entry,
  url: "/entries",
  comparator: function(entry) {
    var date = new Date(entry.get('published_at'));
    return -date.getTime();
  }
});