# ----- Giai đoạn 1: Build (Xây dựng) -----
FROM node:18-alpine AS build

WORKDIR /app

# Copy file package.json (và lock) trước
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy TẤT CẢ các file còn lại của dự án
# (Bao gồm src, public, index.html, vite.config.js...)
COPY . .

# Chạy lệnh build để tạo ra các file tĩnh
RUN npm run build

# ----- Giai đoạn 2: Serve (Phục vụ) -----
# Sử dụng một server Nginx nhẹ để chạy
FROM nginx:stable-alpine

# Copy các file đã build từ giai đoạn 1 vào thư mục web của Nginx
# Vite build ra thư mục "dist", không phải "build"
COPY --from=build /app/dist /usr/share/nginx/html

# Mở cổng 80 (cổng mặc định của Nginx)
EXPOSE 80

# Lệnh để chạy Nginx
CMD ["nginx", "-g", "daemon off;"]