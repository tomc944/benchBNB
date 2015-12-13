require 'byebug'

class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    lat_bounds = bounds["southWest"]["lat"]..bounds['northEast']['lat']
    lng_bounds = bounds["southWest"]["lng"]..bounds['northEast']['lng']

    return Bench.where(lat: lat_bounds, lng: lng_bounds)
  end
end
