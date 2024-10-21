window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const num1 = parseFloat(urlParams.get("num1"));
    const num2 = parseFloat(urlParams.get("num2"));
    const operation = urlParams.get("operation");
    let result;
    switch (operation) {
        case "add": {
            result = num1 + num2;
            break;
        }
        case "subtract": {
            result = num1 - num2;
            break;
        }
        case "multiply": {
            result = num1 * num2;
            break;
        }
        case "divide": {
            if (num2 == 0) {
                result = "Không thể chia cho 0!";
                break;
            }
            result = num1 / num2;
        }
        default: {
            result = "Phép toán không hợp lệ";
        }
    }
    document.getElementById("output").innerText = 'Kết quả: ' + result;
}