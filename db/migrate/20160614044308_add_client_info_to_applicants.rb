class AddClientInfoToApplicants < ActiveRecord::Migration
  def change
    add_column :applicants, :org, :string
    add_column :applicants, :address, :string
    add_column :applicants, :city, :string
    add_column :applicants, :state, :string
    add_column :applicants, :website, :string
    add_column :applicants, :mission, :string
    add_column :applicants, :position, :string
  end
end
