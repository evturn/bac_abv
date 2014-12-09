class ChangeColumnName < ActiveRecord::Migration
  def change
    rename_column :rounds, :fl_oz, :alc_oz
  end
end
