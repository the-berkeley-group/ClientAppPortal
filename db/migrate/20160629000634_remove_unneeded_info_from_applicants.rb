class RemoveUnneededInfoFromApplicants < ActiveRecord::Migration
  def change
    remove_column :applicants, :year, :string
    remove_column :applicants, :major, :string
    remove_column :applicants, :gpa, :float
    remove_column :applicants, :units, :integer
  end
end
