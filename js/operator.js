// Built in function (Là những hàm được js xây dựng sẵn)

// Hàm lấy dữ liệu từ người dùng
// let numberA = Number(window.prompt("Nhập vào số A:"));
// let numberA = parseInt(window.prompt("Nhập vào số A:"));
let numberA = +window.prompt("Nhập vào số A:");
let numberB = +window.prompt("Nhập vào số B:");

// Toán tử số học: +, -, * , /, %, ++, --

console.log(numberA + " + " + numberB + " = ", numberA + numberB);
console.log(numberA + " - " + numberB + " = ", numberA - numberB);
console.log(`${numberA} * ${numberB} = `, numberA * numberB); // Template string
console.log(`${numberA} / ${numberB} = `, numberA / numberB); // Lấy giá trị thực tế
console.log(`${numberA} % ${numberB} = `, numberA % numberB); // Lấy phần dư

// Hàm sử dụng để hiển thị thông báo cho người dùng
window.alert("Phiên của bạn đã hết. Chúc mừng bạn đã bay nick!!!");

// Hàm lấy xác nhận từ người dùng
const isLogout = window.confirm("Bạn có chắc chắn muốn đăng xuất không?");
console.log("Xác nhận: ", isLogout);

// Sự khác nhau giữa tóan tử ++ và -- (tiền tố và hậu tố)
// Dùng để tăng và giảm giá trị của biến 1 đơn vị. Tuy nhiên, nó sẽ có điểm khác nhau
// Đối với tiền tố: gồm 2 bước thực hiện
// let number = 4;
// let ouput = ++number;
// console.log("output", ouput);
// Bước 1: Tiến hành tăng hoặc giảm giá trị của biến đi 1 đơn vị
// Bước 2: Trả về kết quả vừa tính toán ở bước 1

// Đối với toán tử hậu tố: gồm 3 bước thực hiện
let number = 4;
let ouput = number++ - --number;
// 4 - 4 = 0
console.log("output", ouput);
console.log("number ", number);
// Bước 1: Tạo ra một biến copy giá trị => numberCopy = 4
// Bước 2: Tiến hành tăng hoặc giảm gía trị của biến đi 1 đơn vị => number = number +1 => number = 5
// Bước 3: Trả về kết quả vừa copy của biến

// Tiền tố: Thực hiện tính toán trước trước và in ra giá trị sau
// Hậu tố: Thực hiện in ra giá trị trước và thực hiện tính toán sau

// Toán tử so sánh

// Toán tử gán

// Toán tử logic
