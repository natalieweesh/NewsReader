NewReader.Views.FeedDetailView = Backbone.View.extend({
  template: JST["feeds/show"],

  tagName: "ul",

  events: {
    "click #refresh-button" : "refresh",
    "click #favorite-button" : "favorite"
  },

  render: function() {
    var that = this;

    var renderedContent = that.template({
      feed: that.model
    });

    that.$el.html(renderedContent);

    that.model.get("entries").sort();

    that.model.get("entries").each( function(entry) {
      var entryView = new NewReader.Views.EntryView(entry);
      that.$el.append(entryView.$el);
      entryView.render();
    });

    return that;
  },

  refresh: function() {
    var that = this;
    this.model.fetch({
      success: function() {
        that.render();
      }
    });
  },

  favorite: function() {
    var that = this;

    this.model.save({favorited: true},
      {success: function(model) {
          that.model = model;
          that.options.installSidebar();
        }
      }
    );
  }
});