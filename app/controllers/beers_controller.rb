class BeersController < ApplicationController

  def index


        
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

    trend_url = "http://api.untappd.com/v4/beer/trending?client_id=#{ENV['UNTAPPD_ID']}&client_secret=#{ENV['UNTAPPD_SECRET']}" 
    response  = HTTParty.get( trend_url )

    @trending = response['response']["micro"]["items"].map { |item| item }
    respond_to do |f|
      f.html { render json: @trending }
    end

  end

  def search

    query = params['query'].gsub(' ', '+')
    url = "https://api.untappd.com/v4/search/beer?client_id=#{ENV['UNTAPPD_ID']}&client_secret=#{ENV['UNTAPPD_SECRET']}&q=#{query}"
    response = HTTParty.get( url )
    beer     = response['response']['beers']['items'].first['beer']
    respond_to do |f|
      f.html { render json: beer }
    end
  end

end