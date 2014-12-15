Rails.application.routes.draw do
  
  root            to: "beers#index"
  get  '/featured' => 'beers#index'
  get  '/beers'    => "beers#search"
  post '/rounds'   => "rounds#create"
  get  '/users'    => "users#login"
  get  '/gauge'    => 'rounds#gauge'

end
