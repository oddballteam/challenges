require 'securerandom'
class EfinChannel < ApplicationCable::Channel
  def subscribed
    stream_from ""
  end
  def receive(data)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
