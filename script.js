var nama = prompt("Masukkan nama Anda:");
var nilaitugas = prompt("Masukkan nilai tugas Anda:");
var nilaiuts = prompt("Masukkan nilai UTS Anda:");
var nilaiuas = prompt("Masukkan nilai UAS Anda:");

var nilaiakhir = (parseFloat(nilaitugas) * 0.3) + (parseFloat(nilaiuts) * 0.35) + (parseFloat(nilaiuas) * 0.35);
if (nilaiakhir >= 85) {
    alert("lulus");

}
    else if (nilaiakhir >= 75) {
    alert("lulus");
}
else {
    alert("tidak lulus");
}
console.log("Nama: " + nama);
console.log("Nilai Tugas: " + nilaitugas);
console.log("Nilai UTS: " + nilaiuts);
console.log("Nilai UAS: " + nilaiuas);
console.log("Nilai Akhir: " + nilaiakhir);  
document.write("Nama: " + nama + "<br>");
document.write("Nilai Tugas: " + nilaitugas + "<br>");
document.write("Nilai UTS: " + nilaiuts + "<br>");
document.write("Nilai UAS: " + nilaiuas + "<br>");
document.write("Nilai Akhir: " + nilaiakhir + "<br>");
document.write("Status: " + (nilaiakhir >= 75 ? "Lulus" : "Tidak Lulus") + "<br>");