# Hệ thống Giỏ hàng Toàn cục - Lâm Thúy

## Tổng quan
Hệ thống giỏ hàng toàn cục cho phép người dùng thêm sản phẩm vào giỏ hàng trên bất kỳ trang nào và giỏ hàng sẽ được đồng bộ trên tất cả các trang.

## Tính năng chính

### 1. Giỏ hàng toàn cục
- ✅ Thêm sản phẩm từ bất kỳ trang nào
- ✅ Giỏ hàng được lưu trữ trong localStorage
- ✅ Đồng bộ giữa các trang
- ✅ Hiển thị số lượng sản phẩm trên top bar
- ✅ Thông báo khi thêm sản phẩm

### 2. Quản lý sản phẩm
- ✅ Hỗ trợ size và màu sắc
- ✅ Cập nhật số lượng
- ✅ Xóa sản phẩm
- ✅ Tính tổng tiền tự động

### 3. Thanh toán
- ✅ Tích hợp Messenger
- ✅ Tạo đơn hàng tự động
- ✅ Thông tin khách hàng

## Cách sử dụng

### 1. Thêm sản phẩm vào giỏ hàng
```javascript
// Thêm sản phẩm với size và màu mặc định
addToCart(productId);

// Thêm sản phẩm với size và màu cụ thể
addToCart(productId, 'L', 'Trắng');
```

### 2. Mở giỏ hàng
```javascript
openCart();
```

### 3. Đóng giỏ hàng
```javascript
closeCart();
```

### 4. Cập nhật số lượng
```javascript
updateQuantity(productId, change, size, color);
```

### 5. Xóa sản phẩm
```javascript
removeFromCart(productId, size, color);
```

### 6. Xóa toàn bộ giỏ hàng
```javascript
clearCart();
```

### 7. Lấy thông tin giỏ hàng
```javascript
const summary = getCartSummary();
console.log(summary);
```

## Cấu trúc dữ liệu

### Sản phẩm
```javascript
{
    id: 1,
    name: "Áo sơ mi nam cao cấp",
    price: 2500000,
    image: "https://...",
    category: "clothing"
}
```

### Giỏ hàng
```javascript
{
    id: 1,
    name: "Áo sơ mi nam cao cấp",
    price: 2500000,
    image: "https://...",
    category: "clothing",
    quantity: 1,
    size: "L",
    color: "Trắng",
    addedAt: "2024-01-01T00:00:00.000Z"
}
```

## Danh sách sản phẩm

### Quần áo (ID: 1-50)
- 1: Áo sơ mi nam cao cấp - 2.500.000₫
- 2: Váy dạ hội sang trọng - 3.200.000₫
- 3: Áo thun cao cấp - 850.000₫
- ... (và nhiều sản phẩm khác)

### Giày dép (ID: 101-120)
- 101: Giày sneaker cao cấp - 3.500.000₫
- 102: Giày boot nam sang trọng - 4.200.000₫
- 103: Sandals mùa hè - 1.800.000₫
- ... (và nhiều sản phẩm khác)

### Nước hoa (ID: 201-220)
- 201: Nước hoa nam cao cấp - 1.800.000₫
- 202: Nước hoa nữ sang trọng - 2.200.000₫
- 203: Nước hoa unisex - 1.600.000₫
- ... (và nhiều sản phẩm khác)

## Các trang đã được cập nhật

### Trang chính
- ✅ index.html
- ✅ clothing.html
- ✅ giay-dep.html
- ✅ nuoc-hoa.html

### Trang sản phẩm
- ✅ shirt.html
- ✅ tshirt.html
- ✅ jeans.html
- ✅ dress.html
- ✅ jacket.html
- ✅ trousers.html

## Test

### Trang test
Mở `test-global-cart.html` để test các chức năng:
- Thêm sản phẩm vào giỏ hàng
- Xem giỏ hàng
- Cập nhật số lượng
- Xóa sản phẩm
- Xóa toàn bộ giỏ hàng

### Kiểm tra localStorage
Mở Developer Tools > Application > Local Storage để xem dữ liệu giỏ hàng được lưu trữ.

## Lưu ý quan trọng

1. **localStorage**: Giỏ hàng được lưu trữ trong localStorage với key `h2wear_cart`
2. **Đồng bộ**: Giỏ hàng tự động đồng bộ khi chuyển trang
3. **Thông báo**: Hiển thị thông báo khi thêm/xóa sản phẩm
4. **Responsive**: Hoạt động tốt trên mọi thiết bị

## Troubleshooting

### Giỏ hàng không hiển thị
- Kiểm tra console để xem lỗi
- Đảm bảo file `global-cart.js` được load
- Kiểm tra localStorage có dữ liệu không

### Sản phẩm không thêm được
- Kiểm tra productId có tồn tại trong database không
- Kiểm tra function `addToCart` có được gọi đúng không

### Thông báo không hiển thị
- Kiểm tra function `showNotification` có hoạt động không
- Kiểm tra CSS có conflict không

## Hỗ trợ

Nếu gặp vấn đề, vui lòng:
1. Kiểm tra console trong Developer Tools
2. Kiểm tra file `global-cart.js` có được load không
3. Kiểm tra localStorage có dữ liệu không
4. Liên hệ developer để được hỗ trợ


## Tổng quan
Hệ thống giỏ hàng toàn cục cho phép người dùng thêm sản phẩm vào giỏ hàng trên bất kỳ trang nào và giỏ hàng sẽ được đồng bộ trên tất cả các trang.

## Tính năng chính

### 1. Giỏ hàng toàn cục
- ✅ Thêm sản phẩm từ bất kỳ trang nào
- ✅ Giỏ hàng được lưu trữ trong localStorage
- ✅ Đồng bộ giữa các trang
- ✅ Hiển thị số lượng sản phẩm trên top bar
- ✅ Thông báo khi thêm sản phẩm

### 2. Quản lý sản phẩm
- ✅ Hỗ trợ size và màu sắc
- ✅ Cập nhật số lượng
- ✅ Xóa sản phẩm
- ✅ Tính tổng tiền tự động

### 3. Thanh toán
- ✅ Tích hợp Messenger
- ✅ Tạo đơn hàng tự động
- ✅ Thông tin khách hàng

## Cách sử dụng

### 1. Thêm sản phẩm vào giỏ hàng
```javascript
// Thêm sản phẩm với size và màu mặc định
addToCart(productId);

// Thêm sản phẩm với size và màu cụ thể
addToCart(productId, 'L', 'Trắng');
```

### 2. Mở giỏ hàng
```javascript
openCart();
```

### 3. Đóng giỏ hàng
```javascript
closeCart();
```

### 4. Cập nhật số lượng
```javascript
updateQuantity(productId, change, size, color);
```

### 5. Xóa sản phẩm
```javascript
removeFromCart(productId, size, color);
```

### 6. Xóa toàn bộ giỏ hàng
```javascript
clearCart();
```

### 7. Lấy thông tin giỏ hàng
```javascript
const summary = getCartSummary();
console.log(summary);
```

## Cấu trúc dữ liệu

### Sản phẩm
```javascript
{
    id: 1,
    name: "Áo sơ mi nam cao cấp",
    price: 2500000,
    image: "https://...",
    category: "clothing"
}
```

### Giỏ hàng
```javascript
{
    id: 1,
    name: "Áo sơ mi nam cao cấp",
    price: 2500000,
    image: "https://...",
    category: "clothing",
    quantity: 1,
    size: "L",
    color: "Trắng",
    addedAt: "2024-01-01T00:00:00.000Z"
}
```

## Danh sách sản phẩm

### Quần áo (ID: 1-50)
- 1: Áo sơ mi nam cao cấp - 2.500.000₫
- 2: Váy dạ hội sang trọng - 3.200.000₫
- 3: Áo thun cao cấp - 850.000₫
- ... (và nhiều sản phẩm khác)

### Giày dép (ID: 101-120)
- 101: Giày sneaker cao cấp - 3.500.000₫
- 102: Giày boot nam sang trọng - 4.200.000₫
- 103: Sandals mùa hè - 1.800.000₫
- ... (và nhiều sản phẩm khác)

### Nước hoa (ID: 201-220)
- 201: Nước hoa nam cao cấp - 1.800.000₫
- 202: Nước hoa nữ sang trọng - 2.200.000₫
- 203: Nước hoa unisex - 1.600.000₫
- ... (và nhiều sản phẩm khác)

## Các trang đã được cập nhật

### Trang chính
- ✅ index.html
- ✅ clothing.html
- ✅ giay-dep.html
- ✅ nuoc-hoa.html

### Trang sản phẩm
- ✅ shirt.html
- ✅ tshirt.html
- ✅ jeans.html
- ✅ dress.html
- ✅ jacket.html
- ✅ trousers.html

## Test

### Trang test
Mở `test-global-cart.html` để test các chức năng:
- Thêm sản phẩm vào giỏ hàng
- Xem giỏ hàng
- Cập nhật số lượng
- Xóa sản phẩm
- Xóa toàn bộ giỏ hàng

### Kiểm tra localStorage
Mở Developer Tools > Application > Local Storage để xem dữ liệu giỏ hàng được lưu trữ.

## Lưu ý quan trọng

1. **localStorage**: Giỏ hàng được lưu trữ trong localStorage với key `h2wear_cart`
2. **Đồng bộ**: Giỏ hàng tự động đồng bộ khi chuyển trang
3. **Thông báo**: Hiển thị thông báo khi thêm/xóa sản phẩm
4. **Responsive**: Hoạt động tốt trên mọi thiết bị

## Troubleshooting

### Giỏ hàng không hiển thị
- Kiểm tra console để xem lỗi
- Đảm bảo file `global-cart.js` được load
- Kiểm tra localStorage có dữ liệu không

### Sản phẩm không thêm được
- Kiểm tra productId có tồn tại trong database không
- Kiểm tra function `addToCart` có được gọi đúng không

### Thông báo không hiển thị
- Kiểm tra function `showNotification` có hoạt động không
- Kiểm tra CSS có conflict không

## Hỗ trợ

Nếu gặp vấn đề, vui lòng:
1. Kiểm tra console trong Developer Tools
2. Kiểm tra file `global-cart.js` có được load không
3. Kiểm tra localStorage có dữ liệu không
4. Liên hệ developer để được hỗ trợ
