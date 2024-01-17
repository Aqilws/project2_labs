let uang = prompt("masukan uang anda")

let input = prompt("baju, celana, jaket");
let array = input.split(",");
let product = array;

var productcart= []



product.forEach((item)=>{
    switch (item) {
        case "baju":
            productcart.push(50000)
            break;
        case "celana":
            productcart.push(40000)
            break;
        case "jaket":
            productcart.push(100000)
            break;
        default:
            break;
    }
})

var belanjaan = productcart.reduce((a, b) => a+b, 0)
var kembalian = uang - belanjaan

if (kembalian < 0) {

    document.getElementById("hasil").innerHTML =   "Uang anda Kurang " ;
} else{
    document.getElementById("belanjaan").innerHTML =   "Total belanjaan kamu adalah : Rp. "  +belanjaan;
    document.getElementById("kembalian").innerHTML =   "Total Kembalian kamu adalah : Rp. "  +kembalian;
}