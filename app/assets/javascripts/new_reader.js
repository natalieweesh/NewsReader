window.NewReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($sidebar, $content, feedsData) {
    new NewReader.Routers.FeedsRouter($sidebar, $content, feedsData);
    Backbone.history.start();
  },
};

$(function() {
  var feeds = JSON.parse($('#bootstrapped_feeds_json').html());

  NewReader.initialize($("#sidebar"), $("#content"), feeds);
})

