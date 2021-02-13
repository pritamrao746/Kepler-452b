from django.shortcuts import render,HttpResponse
from rest_framework.response import Response
from rest_framework import serializers
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework import status

# Create your views here.
@api_view(['GET', 'POST'])
def detail(request):
	if request.method=='GET' :
		a=dict()
		for key,val in request.GET.items():
			a[key]=val
		return Response(a)


