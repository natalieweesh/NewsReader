class User < ActiveRecord::Base
  attr_accessible :username, :password_digest, :session_token, :password, :password_confirmation

  validates :username, presence: true

  has_secure_password
end