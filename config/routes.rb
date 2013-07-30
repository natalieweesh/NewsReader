NewReader::Application.routes.draw do
  resources :feeds, only: [:index, :create, :show, :update] do
    resources :entries, only: [:index]
  end

  root to: "sessions#new"

  resources :users
  resource :session
end
