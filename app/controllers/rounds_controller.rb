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
    round.save
    render json: round
  end

  def gauge

  @meter = File.open("meter.js", "a+")    
    respond_to do |f|
      f.html
      f.json { render json: @meter }
    end
    
  end

  private

  def round_params
    params.require(:round).permit(:drinks, :hours, :sex, :lbs, :abv)
  end

end