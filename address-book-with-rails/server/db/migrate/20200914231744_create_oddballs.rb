class CreateOddballs < ActiveRecord::Migration[6.0]
  def change
    create_table :oddballs do |t|
      t.text :first_name
      t.text :last_name
      t.text :street
      t.text :city
      t.text :state
      t.text :zip
      t.text :phone
      t.text :email

      t.timestamps
    end
  end
end
