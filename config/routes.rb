Rails.application.routes.draw do
  
  root             to: "beers#index"
  get '/beers/beer' => "beers#show"
  get '/rounds'     => "rounds#index"

end
