class BeersController < ApplicationController

  def index


  end

  def show

    query = params['query'].gsub(' ', '+')
    url = "http://api.untappd.com/v4/search/beer?client_id=ENV['UNTAPPD_ID']&client_secret=ENV['UNTAPPD_SECRET']&q=#{query}"

    response     = HTTParty.get( url )
    
    beer         = response['response']['beers']['items'].first['beer']
    @abv         = beer['beer_abv']
    @name        = beer['beer_name']
    @label       = beer['beer_label']
    @description = beer['beer_description']
    @brewery     = beer['brewery_name']

  end

end