NewReader.Views.EntryView = Backbone.View.extend({
  template: JST["entries/show"],

  tagName: "li",

  initialize: function(entry) {
    this.model = entry;
  },

  render: function() {
    var that = this;

    var date = new Date(this.model.escape('published_at'));

    var formatted_date = date.getMonth() + "/" + date.getDate() + " at " + date.getHours() + ":" + date.getMinutes();

    var renderedContent = that.template({
      entry: that.model,
      formatted_date: formatted_date
    });
    that.$el.html(renderedContent);
    return that;
  }
});