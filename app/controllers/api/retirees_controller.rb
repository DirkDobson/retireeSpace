class Api::RetireesController < ApplicationController
  before_action :authenticate_user!
  def index
    render json: User.random_retirees(current_user.all_retirees)
  end

  def update
  end
end
