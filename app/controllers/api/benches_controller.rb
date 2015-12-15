require 'byebug'

class Api::BenchesController < ApplicationController
  def index
    if (params[:params])
      @benches = Bench.in_bounds(params[:params])
    else
      @benches = []
    end
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render json: @bench
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  def new
    render :new
  end

  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
end
