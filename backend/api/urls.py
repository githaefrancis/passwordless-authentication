from django.urls import path
from .views import UserList,Login
urlpatterns = [
    path('login/',Login.as_view()),
    path('',UserList.as_view())
]
