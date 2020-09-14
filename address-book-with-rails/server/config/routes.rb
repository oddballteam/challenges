Rails.application.routes.draw do
  namespace :api do
    resources :oddballs, only: %i[index show]
    get '/search', to: 'oddballs#search'
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
