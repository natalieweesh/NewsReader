class User < ActiveRecord::Base
  attr_accessible :username, :password_digest, :session_token, :password, :password_confirmation

  validates :username, presence: true

  has_secure_password

  has_many :feeds

  def favorites
    feeds.where(favorited: true)
  end
end