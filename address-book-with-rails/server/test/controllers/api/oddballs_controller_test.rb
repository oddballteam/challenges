require 'test_helper'

class Api::OddballsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_oddballs_index_url
    assert_response :success
  end

  test "should get show" do
    get api_oddballs_show_url
    assert_response :success
  end

end
