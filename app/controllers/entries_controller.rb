class EntriesController < ApplicationController
  def index
    feed = Feed.find(params[:feed_id])

    feed.refresh

    render :json => feed.entries
  end
end
