from django.shortcuts import render
from .models import Product, Cart, Order
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required

def home(request):
    products = Product.objects.all()

    return render(request, "products.html", {
        "products": products
    })
from django.shortcuts import render, get_object_or_404
from .models import Product

def product_detail(request, id):
    product = get_object_or_404(Product, id=id)
    return render(request, "product_detail.html", {
        "product": product
    })

@login_required(login_url='login')
def cart(request):
    cart_items = Cart.objects.filter(user=request.user)

    total = 0
    for item in cart_items:
        total += item.product.price * item.quantity

    return render(request, "cart.html", {
        "cart_items": cart_items,
        "total": total,
    })

from django.shortcuts import redirect
from .models import Product, Cart

@login_required(login_url='login')
def add_to_cart(request, id):
    product = Product.objects.get(id=id)

    cart = Cart.objects.create(
        user=request.user,
        product=product,
        quantity=1
    )

    print("Cart Saved:", cart)

    return redirect('cart')

def remove_from_cart(request, id):
    cart_item = Cart.objects.get(id=id)
    cart_item.delete()
    return redirect('cart')
from django.shortcuts import redirect

@login_required(login_url='login')
def checkout(request):
    if request.method == "POST":
        name = request.POST["name"]
        phone = request.POST["phone"]
        address = request.POST["address"]

        cart_items = Cart.objects.all()

        total = 0
        for item in cart_items:
            total += item.product.price * item.quantity

        Order.objects.create(
            customer_name=name,
            phone=phone,
            address=address,
            total=total
        )

        cart_items.delete()

        return redirect("home")

    return render(request, "checkout.html")
from .models import Product, Cart, Order

def checkout(request):
    if request.method == "POST":
        total = sum(item.product.price * item.quantity for item in Cart.objects.all())

        Order.objects.create(
            customer_name=request.POST["name"],
            phone=request.POST["phone"],
            address=request.POST["address"],
            total=total
        )

        Cart.objects.all().delete()

        return redirect("home")

    return render(request, "checkout.html")

def orders(request):
    orders = Order.objects.all().order_by('-id')

    return render(request, "orders.html", {
        "orders": orders
    })

def user_signup(request):
    if request.method == "POST":
        User.objects.create_user(
            username=request.POST["username"],
            password=request.POST["password"]
        )
        return redirect("login")

    return render(request, "signup.html")

def user_login(request):
    if request.method == "POST":
        user = authenticate(
            username=request.POST["username"],
            password=request.POST["password"]
        )

        if user:
            login(request, user)
            return redirect("home")

    return render(request, "login.html")

def user_logout(request):
    logout(request)
    return redirect("login")
from django.shortcuts import get_object_or_404

def increase_quantity(request, id):
    item = get_object_or_404(Cart, id=id)
    item.quantity += 1
    item.save()
    return redirect("cart")


def decrease_quantity(request, id):
    item = get_object_or_404(Cart, id=id)

    if item.quantity > 1:
        item.quantity -= 1
        item.save()
    else:
        item.delete()

    return redirect("cart")
def payment(request):
    return render(request, "payment.html")
def success(request):
    return render(request, "success.html")