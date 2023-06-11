class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  get '/gyms' do
    gyms = Gym.all.order(created_at: :asc)
    gyms.to_json
  end

  delete '/gyms/:id' do
    gym = Gym.find(params[:id])
    gym.destroy
    gym.to_json
  end

  patch '/gyms/:id' do
    gym = Gym.find(params[:id])
    gym.update(
      activity: params[:activity],
      day: params[:day],
      time: params[:time],
      average: params[:average]
    )
    gym.to_json
  end

  post '/gyms' do
    gym = Gym.create(
      activity: params[:activity],
      day: params[:day],
      time: params[:time],
      average: params[:average],
      user_id: params[:user_id]
    )
    gym.to_json
  end
end
