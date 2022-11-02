from xml.etree.ElementInclude import include
from django.contrib import admin
from django.urls import path
from home import views
from .views import *

urlpatterns = [
    path('', AjaxHandlerView.as_view(), name="home"),
    path('success', views.success, name="success"),
]