# project/urls.py
from django.urls import path, include
from users import views  # Import the views module from the users app

urlpatterns = [
    path('users/', include('users.urls')),
    path('api/register', views.register, name='register'),
    # other paths
]