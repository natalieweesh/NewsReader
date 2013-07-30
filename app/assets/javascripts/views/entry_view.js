NewReader.Views.EntryView = Backbone.View.extend({
  template: JST["entries/show"],

  tagName: "li",

  initialize: function(entry) {
    this.model = entry;
  },

  render: function() {
    var that = this;
    var renderedContent = that.template({
      entry: that.model
    });
    that.$el.html(renderedContent);
    return that;
  }
});