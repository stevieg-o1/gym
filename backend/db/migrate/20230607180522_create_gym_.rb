class CreateGym < ActiveRecord::Migration[6.1]
  def change
    create_table :gyms do |t|
      t.string :activity
      t.string :day
      t.string :time
      t.integer :average
      t.integer :user_id
    end
  end
end
