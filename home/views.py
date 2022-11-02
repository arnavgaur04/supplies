from django.shortcuts import render, HttpResponse
from .models import Items
from django.views.generic import View
from django.http import HttpResponse, JsonResponse
import razorpay

client = razorpay.Client(auth=("rzp_test_HYBTM3PFjHx7Dg", "K9CTAr137rwej9V04ZTTFN2q"))

class AjaxHandlerView(View):
    def get(self, request):
        DATA = {
            "amount": "100",
            "currency": "INR",
            "payment_capture": 1
        }

        payment = client.order.create(data=DATA)

        return render(request, "index.html")
    
def success(request):
    return render(request, "success.html")
