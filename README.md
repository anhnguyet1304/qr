# 📱 QR Attendance App (React + Capacitor)

Ứng dụng điểm danh bằng cách **quét mã QR** trên nền tảng **Web + iOS + Android**.  
- Công nghệ: `React`, `Vite`, `Capacitor`, `@zxing/library`.  
- Tính năng chính:
  - Quét mã QR dạng `ATTEND:<MSSV>`.
  - Lưu thông tin MSSV + thời gian điểm danh.
  - Hiển thị lịch sử điểm danh.
  - Xuất CSV và Reset danh sách (mở rộng).

---

## 🚀 1. Cài đặt

Clone repo từ GitHub: git clone https://github.com/anhnguyet1304/qr.git
cd qr
Cài dependencies:

npm install


# 2. Chạy Web (Vite Dev Server)

npm run dev

👉 Để chạy trên điện thoại trong cùng mạng LAN:
Lấy IP LAN của máy tính (ipconfig hoặc ifconfig).
Truy cập trên điện thoại:

http://<IP_LAN>:5173

Cho phép quyền camera khi trình duyệt yêu cầu.
# 3. Build Mobile với Capacitor

npm install @capacitor/core @capacitor/cli

npm install @capacitor/ios @capacitor/android

npx cap init

- Đồng bộ code sau khi build

npm run build

npx cap copy

npx cap sync

# 4.Xuất file CSV (mở rộng)
Ứng dụng hỗ trợ xuất danh sách điểm danh ra file .csv để tải về.

# ✅Lưu ý

Luôn chạy npm run build && npx cap sync trước khi mở iOS/Android.

Khi test QR trên iOS Safari cần HTTPS hoặc localhost.

Có thể deploy lên Netlify/Render để chạy như PWA trên iPhone.
