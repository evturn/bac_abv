# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path('../config/application', __FILE__)

Rails.application.load_tasks

namespace :db do

  desc "import beers to database"
  task :load_beer do

    require 'untappd'
    require 'untappd/beer'

    (1..1000).each do |id|
      info = Untappd::Beer.info(id, options={})
      if info && info.beer
        hash           = {}
        hash[:name]    = info.beer.beer_name
        hash[:abv]     = info.beer.beer_abv
        hash[:style]   = info.beer.beer_style
        hash[:label]   = info.beer.beer_label
        hash[:brewery] = info.beer.brewery.brewery_name
        Beer.create(hash)
      end
    end
  end

  desc "import beers to json"
  task :beers_to_json do

    require 'untappd'
    require 'untappd/beer'
    require 'json'

    (1000..2000).each do |id|
      info = Untappd::Beer.info(id, options={})
      if info && info.beer
        hash           = {}
        hash[:name]    = info.beer.beer_name
        hash[:abv]     = info.beer.beer_abv
        hash[:style]   = info.beer.beer_style
        hash[:label]   = info.beer.beer_label
        hash[:brewery] = info.beer.brewery.brewery_name
        File.open("data.json","a+") do |f|
-        f.write(hash.to_json)
      end
    end
  end
end
end