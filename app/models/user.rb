# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User
  serialize : Array

  def self.random_retiree(ids)
    ids = ids.empty? ? [0] :ids
    Cat.where("id NOT IN (?)", ids).order("RANDOM()")
  end
end
