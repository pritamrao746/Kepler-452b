from django.contrib import admin
from django.urls import path,include
from . import views as api_views

urlpatterns = [
    path('',api_views.detail,name='detail'),
]