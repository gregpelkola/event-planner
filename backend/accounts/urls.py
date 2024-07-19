# accounts/urls.py
from django.urls import path, include  # Corrected import statement
from .views import register_view

urlpatterns = [
    path('api/register', register_view, name='register'),  # Corrected reference to register_view
    path('', include('users.urls')),  # Include the users app URLs
    # Other paths...
]