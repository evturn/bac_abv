class RenameColumnToDrinks < ActiveRecord::Migration
  def change
    rename_column :rounds, :alc_oz, :drinks
  end
end
