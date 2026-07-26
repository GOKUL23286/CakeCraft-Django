from django.contrib import admin
from .models import Product, Cart, Order

admin.site.register(Cart)
admin.site.register(Order)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "price", "category")
    search_fields = ("name", "category")
