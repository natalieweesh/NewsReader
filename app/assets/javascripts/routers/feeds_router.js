NewReader.Routers.FeedsRouter = Backbone.Router.extend({
  initialize: function($sidebar, $content, feedsData) {
    this.$sidebar = $sidebar;
    this.$content = $content;
    this.feeds = new NewReader.Collections.Feeds(feedsData);
  },

  routes: {
    "" : "index",
    "feeds/:id" : "show"
  },

  index: function() {
    var that = this;

    this.installSidebar(this.$sidebar, this.feeds);
  },

  show: function(id) {
    var that = this;

    var feed = that.feeds.findWhere({id: parseInt(id)});

    var feedDetailView = new NewReader.Views.FeedDetailView({
      model: feed,
      installSidebar: function() {
        that.installSidebar(that.$sidebar, that.feeds);
      }
    });

    this.$content.html(feedDetailView.render().$el);
    this.installSidebar(this.$sidebar, this.feeds);
  },

  installSidebar: function($sidebar, feeds) {
    console.log("running installSidebar");
    var that = this;

    var feedsListView = new NewReader.Views.FeedsListView({
      collection: feeds
    });
    $sidebar.html(feedsListView.render().$el);
  }
});