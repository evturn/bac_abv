class RoundsController < ApplicationController

  def index
    @rounds = Round.all
    respond_to do format
      format.json { render json: @rounds }
    end
  end

  def create
    round = Round.create(round_params)
    round.calculate
    bac = 
    round.update(params(:round[bac]))
    render json: round
  end

  private

  def round_params
    params.require(:round).permit(:drinks, :hours, :sex, :lbs, :abv)
  end

end