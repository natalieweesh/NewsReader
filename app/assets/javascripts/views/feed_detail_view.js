NewReader.Views.FeedDetailView = Backbone.View.extend({
  template: JST["feeds/show"],

  tagName: "ul",

  render: function() {
    var that = this;

    var renderedContent = that.template({
      feed: that.model
    });

    that.$el.html(renderedContent);

    _.each(that.model.get("entries"), function(entry) {
      var entryView = new NewReader.Views.EntryView(entry);
      that.$el.append(entryView.$el);
      entryView.render();
    })

    return that;
  }
});