class RemoveUploadsFromApplicants < ActiveRecord::Migration
  def change
    remove_column :applicants, :resume, :string
    remove_column :applicants, :picture, :string
  end
end
