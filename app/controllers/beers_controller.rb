class BeersController < ApplicationController

  def index

    trend_url = "http://api.untappd.com/v4/beer/trending?client_id=#{ENV['UNTAPPD_ID']}&client_secret=#{ENV['UNTAPPD_SECRET']}" 
    trending    = HTTParty.get( trend_url )
    @featured    = trending['response']["micro"]["items"].sample
    # city         = featured['brewery']['location']['brewery_city']
    # state        = featured['brewery']['location']['brewery_state']
    # country      = featured['brewery']['country_name']
    # @f_beer      = featured['beer']
    # @f_brewery   = featured['brewery']
    # @f_location  =  "#{city}, #{state} #{country}"
    
    render :json => @featured.as_json, status: 200

 
   

    # @_beer     = featured['beer']['beer_name']
    # @_label    = featured['beer']['beer_label']
    # @_abv      = featured['beer']['beer_abv']
    # @_brewery  = featured['brewery']['brewery_name']
    # _city        = featured['brewery']['location']['brewery_city']
    # _state       = featured['brewery']['location']['brewery_state']
    # _country     = featured['brewery']['country_name']
    # @_f_location = "#{city}, #{state} #{country}"

    @top_beers = trending['response']["micro"]["items"].map { |item| 
        item }
        

    
  end

  def search

    query = params['query'].gsub(' ', '+')
    url = "https://api.untappd.com/v4/search/beer?client_id=#{ENV['UNTAPPD_ID']}&client_secret=#{ENV['UNTAPPD_SECRET']}&q=#{query}"
    response     = HTTParty.get( url )
    beer         = response['response']['beers']['items'].first['beer']
    render json: beer.to_json, status: 200
  end

end