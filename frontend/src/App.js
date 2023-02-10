import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import HomePage from "./pages/homepage/homepage.component";
import ProductPage from "./pages/product-page/product-page.component";
import CartPage from "./pages/cart-page/cart-page.component";
import LoginPage from "./pages/login-page/login-page.component";
import RegisterPage from "./pages/register-page/register-page.component";
import ProfilePage from "./pages/profile-page/profile-page.component";
import ShippingPage from "./pages/shipping-page/shipping-page.component";
import PaymentPage from "./pages/payment-page/payment-page.component";
import PlaceOrderPage from "./pages/place-order-page/place-order-page.component";
import OrderPage from "./pages/order-page/order-page.component";
import UserListPage from "./pages/user-list-page/user-list-page.component";
import UserEditPage from "./pages/user-edit-page/user-edit-page.component";
import ProductListPage from "./pages/product-list-page/product-list-page.component";
import ProductEditPage from "./pages/product-edit-page/product-edit-page.component";
import OrderListPage from "./pages/order-list-page/order-list-page.componet";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/shipping" component={ShippingPage} />
          <Route path="/payment" component={PaymentPage} />
          <Route path="/placeorder" component={PlaceOrderPage} />

          <Route path="/admin/userlist" component={UserListPage} />
          <Route path="/admin/user/:id/edit" component={UserEditPage} />

          <Route path="/order/:id" component={OrderPage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/admin/productlist" component={ProductListPage} />
          <Route path="/admin/orderlist" component={OrderListPage} />
          <Route path="/admin/product/:id/edit" component={ProductEditPage} />

          <Route path="/cart/:id?" component={CartPage} />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
