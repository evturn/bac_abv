class BeersController < ApplicationController

  def index

    trend_url = "http://api.untappd.com/v4/beer/trending?client_id=#{ENV['UNTAPPD_ID']}&client_secret=#{ENV['UNTAPPD_SECRET']}" 
    response  = HTTParty.get( trend_url )

    respond_to do |f|
      f.html { @top_beers }
    end

    @trending = response['response']["micro"]["items"].map { |item| item }
        
  end

  def featured

    trend_url = "http://api.untappd.com/v4/beer/trending?client_id=#{ENV['UNTAPPD_ID']}&client_secret=#{ENV['UNTAPPD_SECRET']}" 
    response = HTTParty.get( trend_url )
    @featured = response['response']["micro"]["items"].sample

    respond_to do |f|
      f.json { render json: @featured }
    end

  end


  def trending


  end

  def search

    query = params['query'].gsub(' ', '+')
    url = "https://api.untappd.com/v4/search/beer?client_id=#{ENV['UNTAPPD_ID']}&client_secret=#{ENV['UNTAPPD_SECRET']}&q=#{query}"
    response = HTTParty.get( url )
    beer     = response['response']['beers']['items'].first['beer']
    render json: beer.to_json, status: 200
  end

end