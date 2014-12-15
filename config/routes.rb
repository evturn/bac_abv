Rails.application.routes.draw do
  
  root             to: 'beers#index'
  get  '/beers'    =>  'beers#search'
  get  '/featured' =>  'beers#featured'
  post '/rounds'   =>  'rounds#create' 
end
