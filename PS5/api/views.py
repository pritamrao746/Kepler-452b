from django.shortcuts import render,HttpResponse
from rest_framework.response import Response
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework import status
import pandas as pd 

from datetime import date,timedelta
import statsmodels.api as sm
from .a import predict


# Create your views here.
# @api_view(['GET', 'POST'])
# def detail(request):
# 	if request.method=='GET' :
# 		a=dict()
# 		for key,val in request.GET.items():
# 			a[key]=val
# 		return Response(a)


# PATH="~/Desktop/College/SEM6/Hack/retailer_stock.csv"
# df=pd.read_csv(PATH)

df=pd.read_csv(r'\Users\Rajat\Desktop\spit_hack\Kepler-452b\PS5\api\rs_mop.csv')

@api_view(['GET', 'POST'])
def retailerlist(request):
	if request.method=='GET':
		l=df.retailer_id.unique()
		a=dict()
		a['reailer_list']=l
		return Response(a)



@api_view(['GET', 'POST'])
def productlist(request):
	if request.method=='GET':
		l=['Imported DAP','MOP']
		a=dict()
		a['product_list']=l
		return Response(a)


@api_view(['GET', 'POST'])
def processReatiler(request):
	return Response(predict(295565,'MOP',date(2021,1,2),date(2021,2,5),'secondary'))
	if request.method=='GET':
		# print('TYES')
		for key,val in request.GET.items():
			print(key,val)
		try :
			start_time=request.GET['start_time']
			end_time=request.GET['end_time']
			retailer_id=request.GET['retailer_id']
			prodcut_id=request.GET['prodcut_id']
			retailer_type=request.GET['type']
			# res=predict(prodcut_id,prodcut_id,start_time,end_time,retailer_type)
			# return Response(res)
			# print(start_time+' '+end_time+' '+retailer_id)		
			# return Response(status=status.HTTP_302_FOUND)
			# return Response(predict(295565,'MOP',date(2021,1,2),date(2021,2,5),'secondary'))
		except:
			return Response(status=status.HTTP_404_NOT_FOUND)



