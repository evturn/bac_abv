Rails.application.routes.draw do
  
  root               to: 'beers#index'
  get  '/beers'      =>  'beers#search'
  get  '/featured'   =>  'beers#featured'
  get  '/trending'   =>  'beers#trending'
  post '/rounds'     =>  'rounds#create'
end
