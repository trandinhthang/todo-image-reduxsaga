-> dispatch 1 action
-> redux saga thấy action đó
-> xử lý hàm trong takeEvery
-> gọi API
-> saga dispatch action success -> reducer success
-> nếu failed -> reducer fail
