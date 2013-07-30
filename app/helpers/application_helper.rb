module ApplicationHelper
  def authenticate
    unless logged_in?
      redirect_to new_session_url
    end
  end

  def current_user
    return nil if session[:session_token].nil?
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end
end
