class CreateRetirees < ActiveRecord::Migration[5.2]
  def change
    create_table :retirees do |t|
      t.string :name
      t.string :age
      t.boolean :can_walk
      t.string :sex
      t.string :marital_status
      t.string :avatar

      t.timestamps
    end
  end
end
