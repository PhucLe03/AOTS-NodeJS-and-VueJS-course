## &nbsp;&nbsp;&nbsp;&nbsp;Các bước cài đặt trước khi có thể test

### &nbsp;&nbsp;&nbsp;&nbsp;1. Cài đặt các công cụ

&nbsp;&nbsp;&nbsp;&nbsp;- NodeJS

&nbsp;&nbsp;&nbsp;&nbsp;- MongoDBCompass (optional)

### &nbsp;&nbsp;&nbsp;&nbsp;2. Cài đặt các thư viện

```c
npm install
```

### &nbsp;&nbsp;&nbsp;&nbsp;3. Thêm file config

&nbsp;&nbsp;&nbsp;&nbsp;- Tạo file tên `.env` có nội dung như sau:

```c
PORT=1234
DBSTRING='mongodb+srv://gta5online:heistheistheist@phucdb.q6id4ol.mongodb.net/DB'
```
&nbsp;&nbsp;&nbsp;&nbsp;***Lưu ý:*** ConnectionString (*DBSTRING*) trong file này chỉ có quyền read-only, không thực hiện write được đâu nhé.
(Để lấy quyền truy cập vào database, hãy thêm vào đầu password và cuối username một ký tự "t")


### &nbsp;&nbsp;&nbsp;&nbsp;4. Chạy

&nbsp;&nbsp;&nbsp;&nbsp;Dùng Terminal  navigate vào folder chứa file `test.js` và dùng commandline chạy dòng lệnh:
```c
npm run dev
```

&nbsp;&nbsp;&nbsp;&nbsp;Sau khi chạy dòng lệnh trên, màn hình console nên in ra những dòng sau:
```c
Example app listening on port 1234
URL: http://localhost:1234
Database connected
```

### &nbsp;&nbsp;&nbsp;&nbsp;5. Have fun!