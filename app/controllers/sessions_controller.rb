class SessionsController < ApplicationController

  skip_before_filter :authenticate, only: [:new, :create]

  def new
  end

  def create
    @user = User.find_by_username(params[:user][:username])
    if @user && @user.authenticate(params[:user][:password])
      token = SecureRandom.urlsafe_base64
      session[:session_token] = token
      @user.session_token = token
      @user.save
      redirect_to feeds_url
    else
      redirect_to new_session_url
    end
  end

  def destroy
    @current_user.session_token = nil
    @current_user.save
    session[:session_token] = nil
    redirect_to new_session_url
  end
end