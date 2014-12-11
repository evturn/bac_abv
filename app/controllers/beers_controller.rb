class BeersController < ApplicationController
  
  def index

    trend_url = "http://api.untappd.com/v4/beer/trending?client_id=#{ENV['UNTAPPD_ID']}&client_secret=#{ENV['UNTAPPD_SECRET']}"
    
    trending    = HTTParty.get( trend_url )
    
    featured    = trending['response']["micro"]["items"].sample

    @f_beer     = featured['beer']['beer_name']
    @f_label    = featured['beer']['beer_label']
    @f_abv      = featured['beer']['beer_abv']
    @f_brewery  = featured['brewery']['brewery_name']
    city        = featured['brewery']['location']['brewery_city']
    state       = featured['brewery']['location']['brewery_state']
    country     = featured['brewery']['country_name']
    @f_location = "#{city}, #{state} #{country}"

    @top_beers  = trending['response']["micro"]["items"].map { |beer| beer['beer'] }

  end

  def search

    query = params['query'].gsub(' ', '+')
    url = "https://api.untappd.com/v4/search/beer?client_id=#{ENV['UNTAPPD_ID']}&client_secret=#{ENV['UNTAPPD_SECRET']}&q=#{query}"

    response     = HTTParty.get( url )
    
    beer         = response['response']['beers']['items'].first['beer']
    @abv         = beer['beer_abv']
    @name        = beer['beer_name']
    @label       = beer['beer_label']
    @description = beer['beer_description']
    @brewery     = beer['brewery_name']

  end

end