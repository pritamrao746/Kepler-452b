from django.shortcuts import render,HttpResponse


# Create your views here.

def detail(request):
	if request.method=='GET' :
		print(request.GET['text'])
		return HttpResponse('<h1>'+request.GET['text']+'</h1>')


