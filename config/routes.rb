Rails.application.routes.draw do
  
  root             to: "beers#index"
  get '/beers' =>      "beers#search"
  get '/rounds'     => "rounds#calculator"

end
