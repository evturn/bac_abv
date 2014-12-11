class AddAbvColumnToRounds < ActiveRecord::Migration
  def change
    add_column :rounds, :abv, :decimal, precision: 8, scale: 2
  end
end
