from django.shortcuts import render,HttpResponse
from rest_framework.response import Response
from django.http import JsonResponse

# Create your views here.

def detail(request):
	if request.method=='GET' :
		a=dict()
		a['res']=request.GET['text']
		# print(request.GET['text'])
		# print(a)
		return JsonResponse(a)


