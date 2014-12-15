class BeersController < ApplicationController

  def index

    trend_url = "http://api.untappd.com/v4/beer/trending?client_id=#{ENV['UNTAPPD_ID']}&client_secret=#{ENV['UNTAPPD_SECRET']}" 
    # trending  = HTTParty.get( trend_url )
    # @featured = trending['response']["micro"]["items"].sample

    # respond_to do |f|
    #   f.html { @top_beers }
    #   f.json { render json: @featured }
    # end

    # @top_beers = trending['response']["micro"]["items"].map { |item| item }
        
  end

  def search

    # query = params['query'].gsub(' ', '+')
    # url = "https://api.untappd.com/v4/search/beer?client_id=#{ENV['UNTAPPD_ID']}&client_secret=#{ENV['UNTAPPD_SECRET']}&q=#{query}"
    # # response = HTTParty.get( url )
    # beer     = response['response']['beers']['items'].first['beer']
    # render json: beer.to_json, status: 200
  end

end