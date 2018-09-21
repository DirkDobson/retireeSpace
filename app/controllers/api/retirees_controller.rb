class Api::RetireesController < ApplicationController
  before_action :authenticate_user!
  def index
    render json: retirees = @Retiree.all
  end

  def update
  end
end
