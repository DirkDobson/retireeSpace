class Api::RetireesController < ApplicationController
  before_action :authenticate_user!
  def index
    render json: User.random_retiree(current_user)
  end

  def update
  end
end
