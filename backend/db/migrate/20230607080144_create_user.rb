class CreateUser < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :age
      t.string :period
    end
  end
end
