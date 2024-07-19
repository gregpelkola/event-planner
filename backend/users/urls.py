# users/urls.py
from django.urls import path
from .views import SignUpView, register  # Import register here

urlpatterns = [
    path('signup/', SignUpView.as_view(), name='signup'),
    path('api/register', register, name='register'),  # Now 'register' is recognized
]