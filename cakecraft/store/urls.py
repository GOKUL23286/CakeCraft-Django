from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
]
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('product/<int:id>/', views.product_detail, name='product_detail'),
    path('cart/add/<int:id>/', views.add_to_cart, name='add_to_cart'),
    path('cart/', views.cart, name='cart'),
]
path('cart/remove/<int:id>/', views.remove_from_cart, name='remove_from_cart'),
path("checkout/", views.checkout, name="checkout"),
path("orders/", views.orders, name="orders"),
path("login/", views.user_login, name="login"),
path("signup/", views.user_signup, name="signup"),
path("logout/", views.user_logout, name="logout"),
path("cart/increase/<int:id>/", views.increase_quantity, name="increase_quantity"),
path("cart/decrease/<int:id>/", views.decrease_quantity, name="decrease_quantity"),
path("payment/", views.payment, name="payment"),
path("success/", views.success, name="success"),