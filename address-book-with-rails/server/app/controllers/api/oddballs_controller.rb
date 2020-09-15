class Api::OddballsController < ApplicationController
  def index
    render json: Oddball.first(100)
  end

  def show
    render json: Oddball.find(params[:id])
  rescue ActiveRecord::RecordNotFound => e
    render json: { message: e.message }, status: 400
  end

  def search
    if params[:q].blank?
      render json: { error: "Please send a query string paramater 'q'" }, status: 400
      return
    end

    search_term = "%#{params[:q]}%"
    render json: Oddball.where('first_name LIKE ? OR last_name LIKE ?', search_term, search_term)
  end
end
