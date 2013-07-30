class UsersController < ApplicationController
  def new
    redirect_to feeds_url if(current_user)
  end

  def create
  end


end
