NewReader.Routers.FeedsRouter = Backbone.Router.extend({
  initialize: function($sidebar, $content, feeds) {
    this.$sidebar = $sidebar;
    this.$content = $content;
    this.feeds = feeds;
  },

  routes: {
    "" : "index",
    "feeds/:id" : "show"
  },

  index: function() {
    var that = this;

    var feedsListView = new NewReader.Views.FeedsListView({
      collection: that.feeds
    });

    that.$sidebar.html(feedsListView.render().$el);
  },

  show: function(id) {
    var that = this;

    var feed = that.feeds.findWhere({id: parseInt(id)});

    var feedDetailView = new NewReader.Views.FeedDetailView({
      model: feed
    });

    that.$content.html(feedDetailView.render().$el);
  }
});