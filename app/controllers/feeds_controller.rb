class FeedsController < ApplicationController
  def index
    @feeds = Feed.find_all_by_user_id(@current_user.id).to_json(include: :entries)

    respond_to do |format|
      format.html { render :index }
      format.json { render :json => @feeds }
    end
  end

  def show
    @feed = Feed.find(params[:id])

    if(@feed.user_id == current_user.id)
      @feed.refresh
      @feed = @feed.to_json(include: :entries)
    else
      @feed = nil
    end

    respond_to do |format|
      format.json { render json: @feed }
    end
  end

  def create
    feed = Feed.find_or_create_by_url(params[:feed][:url])
    if feed
      render :json => feed
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end
end