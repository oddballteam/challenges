module ApplicationCable
  class Connection < ActionCable::Connection::Base
    def connect
      puts "connected"

    end
  end
end
