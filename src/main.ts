let x: number = 10;
let y: number = 20;

if (x > y) {
  console.log("x lebih besar dari y");
} else {
  console.log("x tidak lebih besar dari y");
}

if (x > y) {
  console.log("x lebih besar dari y");
} else if (x < y) {
  console.log("x kurang dari y");
} else {
  console.log("x sama dengan y");
}

x > y
  ? console.log("x lebih besar dari y")
  : console.log("x tidak lebih besar dari y");

let dey: string = "Monday";
switch (dey) {
  case "Monday":
    console.log("Selasa");
    break;
  case "Tuesday":
    console.log("Rabu");
    break;
  case "Wednesday":
    console.log("Kamis");
    break;
  case "Thursday":
    console.log("Jumat");
    break;
  case "Friday":
    console.log("Sabtu");
    break;
  case "Saturday":
    console.log("Minggu");
    break;
  case "Sunday":
    console.log("Senin");
    break;
  default:
    console.log("Tidak ada hari");
}

let month: number = 2;
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("bulan ini 31 hari");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("bulan ini 30 hari");
    break;
  case 2:
    console.log("bulan ini 28 atau 29 hari");
    break;
  default:
    console.log("bulan ini tidak ada");
}
