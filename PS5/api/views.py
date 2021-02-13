from django.shortcuts import render,HttpResponse
from rest_framework.response import Response
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework import status
import pandas as pd 
PATH="~/Desktop/College/SEM6/Hack/retailer_stock.csv"
df=pd.read_csv(PATH)
# Create your views here.
# @api_view(['GET', 'POST'])
# def detail(request):
# 	if request.method=='GET' :
# 		a=dict()
# 		for key,val in request.GET.items():
# 			a[key]=val
# 		return Response(a)

@api_view(['GET', 'POST'])
def retailerlist(request):
	if request.method=='GET':
		l=df.retailer_id.unique()
		a=dict()
		a['reailer_list']=l
		return Response(a)

@api_view(['GET', 'POST'])
def processReatiler(request):
	if request.method=='GET':
		print('TYES')
		for key,val in request.GET.items():
			print(key,val)
		try :
			start_time=request.GET['start_time']
			end_time=request.GET['end_time']
			retailer_id=request.GET['retailer_id']
			print(start_time+' '+end_time+' '+retailer_id)		
			return Response(status=status.HTTP_302_FOUND)
		except:
			return Response(status=status.HTTP_404_NOT_FOUND)




