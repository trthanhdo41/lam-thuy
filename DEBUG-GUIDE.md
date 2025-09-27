# Hướng dẫn Debug Giỏ hàng

## Vấn đề: Giỏ hàng không đồng bộ giữa các trang

### Bước 1: Kiểm tra Console
1. Mở Developer Tools (F12)
2. Vào tab Console
3. Thêm sản phẩm vào giỏ hàng ở trang index.html
4. Kiểm tra xem có lỗi nào không

### Bước 2: Kiểm tra localStorage
1. Vào tab Application > Local Storage
2. Tìm key `h2wear_cart`
3. Kiểm tra xem có dữ liệu không

### Bước 3: Test với trang debug
1. Mở `debug-cart.html`
2. Click "Test All Functions"
3. Kiểm tra thông tin debug

### Bước 4: Test với trang đơn giản
1. Mở `simple-test.html`
2. Thêm sản phẩm vào giỏ
3. Chuyển sang trang khác
4. Kiểm tra xem giỏ hàng có hiển thị không

## Các lỗi thường gặp và cách sửa

### Lỗi 1: "addToCart is not a function"
**Nguyên nhân:** Script chưa được load hoặc có conflict
**Cách sửa:** 
- Kiểm tra file `global-cart.js` có được load không
- Kiểm tra console có lỗi JavaScript không

### Lỗi 2: Giỏ hàng trống khi chuyển trang
**Nguyên nhân:** localStorage không được lưu hoặc load
**Cách sửa:**
- Kiểm tra localStorage có dữ liệu không
- Thử `forceUpdateCart()` trong console

### Lỗi 3: Cart count không cập nhật
**Nguyên nhân:** Element `.cart-count` không tồn tại
**Cách sửa:**
- Kiểm tra HTML có element `.cart-count` không
- Kiểm tra CSS có ẩn element không

## Các trang test

1. **index.html** - Trang chủ với sản phẩm
2. **clothing.html** - Trang quần áo
3. **debug-cart.html** - Trang debug chi tiết
4. **simple-test.html** - Trang test đơn giản

## Các function debug

```javascript
// Kiểm tra cart hiện tại
console.log(getCartSummary());

// Force update cart
forceUpdateCart();

// Kiểm tra localStorage
console.log(localStorage.getItem('h2wear_cart'));

// Clear cart
clearCart();

// Thêm sản phẩm test
addToCart(1);
```

## Các bước kiểm tra

1. **Mở trang index.html**
2. **Thêm sản phẩm vào giỏ**
3. **Kiểm tra console có lỗi không**
4. **Kiểm tra localStorage có dữ liệu không**
5. **Chuyển sang trang clothing.html**
6. **Kiểm tra cart count có hiển thị không**
7. **Click vào icon giỏ hàng**
8. **Kiểm tra sản phẩm có hiển thị không**

## Nếu vẫn không hoạt động

1. **Clear localStorage:**
   ```javascript
   localStorage.removeItem('h2wear_cart');
   ```

2. **Reload trang:**
   ```javascript
   location.reload();
   ```

3. **Kiểm tra network tab xem file global-cart.js có load không**

4. **Kiểm tra có script conflict không**

## Liên hệ hỗ trợ

Nếu vẫn gặp vấn đề, vui lòng cung cấp:
1. Screenshot console errors
2. Screenshot localStorage data
3. Mô tả chi tiết các bước đã thực hiện


## Vấn đề: Giỏ hàng không đồng bộ giữa các trang

### Bước 1: Kiểm tra Console
1. Mở Developer Tools (F12)
2. Vào tab Console
3. Thêm sản phẩm vào giỏ hàng ở trang index.html
4. Kiểm tra xem có lỗi nào không

### Bước 2: Kiểm tra localStorage
1. Vào tab Application > Local Storage
2. Tìm key `h2wear_cart`
3. Kiểm tra xem có dữ liệu không

### Bước 3: Test với trang debug
1. Mở `debug-cart.html`
2. Click "Test All Functions"
3. Kiểm tra thông tin debug

### Bước 4: Test với trang đơn giản
1. Mở `simple-test.html`
2. Thêm sản phẩm vào giỏ
3. Chuyển sang trang khác
4. Kiểm tra xem giỏ hàng có hiển thị không

## Các lỗi thường gặp và cách sửa

### Lỗi 1: "addToCart is not a function"
**Nguyên nhân:** Script chưa được load hoặc có conflict
**Cách sửa:** 
- Kiểm tra file `global-cart.js` có được load không
- Kiểm tra console có lỗi JavaScript không

### Lỗi 2: Giỏ hàng trống khi chuyển trang
**Nguyên nhân:** localStorage không được lưu hoặc load
**Cách sửa:**
- Kiểm tra localStorage có dữ liệu không
- Thử `forceUpdateCart()` trong console

### Lỗi 3: Cart count không cập nhật
**Nguyên nhân:** Element `.cart-count` không tồn tại
**Cách sửa:**
- Kiểm tra HTML có element `.cart-count` không
- Kiểm tra CSS có ẩn element không

## Các trang test

1. **index.html** - Trang chủ với sản phẩm
2. **clothing.html** - Trang quần áo
3. **debug-cart.html** - Trang debug chi tiết
4. **simple-test.html** - Trang test đơn giản

## Các function debug

```javascript
// Kiểm tra cart hiện tại
console.log(getCartSummary());

// Force update cart
forceUpdateCart();

// Kiểm tra localStorage
console.log(localStorage.getItem('h2wear_cart'));

// Clear cart
clearCart();

// Thêm sản phẩm test
addToCart(1);
```

## Các bước kiểm tra

1. **Mở trang index.html**
2. **Thêm sản phẩm vào giỏ**
3. **Kiểm tra console có lỗi không**
4. **Kiểm tra localStorage có dữ liệu không**
5. **Chuyển sang trang clothing.html**
6. **Kiểm tra cart count có hiển thị không**
7. **Click vào icon giỏ hàng**
8. **Kiểm tra sản phẩm có hiển thị không**

## Nếu vẫn không hoạt động

1. **Clear localStorage:**
   ```javascript
   localStorage.removeItem('h2wear_cart');
   ```

2. **Reload trang:**
   ```javascript
   location.reload();
   ```

3. **Kiểm tra network tab xem file global-cart.js có load không**

4. **Kiểm tra có script conflict không**

## Liên hệ hỗ trợ

Nếu vẫn gặp vấn đề, vui lòng cung cấp:
1. Screenshot console errors
2. Screenshot localStorage data
3. Mô tả chi tiết các bước đã thực hiện
