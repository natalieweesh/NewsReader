class AddFavoritedToFeeds < ActiveRecord::Migration
  def change
    add_column :feeds, :favorited, :boolean, default: 0
  end
end
