NewReader.Views.FeedsListView = Backbone.View.extend({
  template: JST["feeds/index"],

  tagName: "ul",

  render: function() {
    var that = this;

    var renderedContent = that.template({
      feeds: that.collection
    });

    that.$el.html(renderedContent);
    return that;
  }
});
