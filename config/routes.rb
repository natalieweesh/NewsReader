NewReader::Application.routes.draw do
  resources :feeds, only: [:index, :create] do
    resources :entries, only: [:index]
  end

  root to: "sessions#new"

  resources :users
  resource :session
end
