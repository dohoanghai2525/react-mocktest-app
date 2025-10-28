# Sử dụng image Node.js 18
FROM node:18-alpine

# Đặt thư mục làm việc bên trong container
WORKDIR /app

# Sao chép file package.json và cài đặt dependencies
COPY package*.json ./
RUN npm install

# Sao chép toàn bộ code còn lại của backend
COPY . .

# Mở cổng 3001 (cổng bạn định nghĩa trong server.js)
EXPOSE 3001

# Lệnh để chạy server khi container khởi động
CMD [ "node", "server.js" ]