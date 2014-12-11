class RoundsController < ApplicationController

  def create
    round = Round.create(round_params)
    render json: round
  end

  private

  def round_params
    params.require(:round).permit(:drinks, :hours, :sex, :lbs, :abv)
  end

end