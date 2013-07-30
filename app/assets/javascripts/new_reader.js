window.NewReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($sidebar, $content, feedsData) {
    var feeds = new NewReader.Collections.Feeds(feedsData);

    this.installSidebar($sidebar, feeds);

    new NewReader.Routers.FeedsRouter($sidebar, $content, feeds)

    Backbone.history.start();
  },

  installSidebar: function($sidebar, feeds) {
    var that = this;

    var feedsListView = new NewReader.Views.FeedsListView({
      collection: feeds
    });

    $sidebar.html(feedsListView.render().$el);
  }
};

$(function() {
  var feeds = JSON.parse($('#bootstrapped_feeds_json').html());

  NewReader.initialize($("#sidebar"), $("#content"), feeds);
})

