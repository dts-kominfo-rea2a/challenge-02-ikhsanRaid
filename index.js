// ! JANGAN DIMODIFIKASI
/*
  Data Array Object Pegawai
  [
    {
      "id": 1,
      "namaDepan": "Edyth",
      "namaBelakang": "Roberts",
      "jenisKelamin": "M"
    },
    ...
  ]
*/
const arrayObjectPegawai = require("./data-customer.json");

function lakukanLooping(arrPegawai) {
  // ! JANGAN DIMODIFIKASI
  let dataYangAkanDilooping = arrPegawai;

  /*
    TODO 1: Buatlah sebuah variabel bernama "hasilLooping" 
      yang berisi gabungan nama depan dan belakang dari masing masing pegawai

      Contoh: ["Aisyah Nirmala", "Mansur Faisal", ...]
  */
  const namaPegawai = [];
  for (i = 0; i < arrPegawai.length; i++) {
    namaPegawai.push(
      dataYangAkanDilooping[i].namaDepan +
        " " +
        dataYangAkanDilooping[i].namaBelakang
    );
  }
  let hasilLooping = namaPegawai;

  /*
    TODO 2: Buatlah sebuah variabel bernama "jumlahPria"
      yang berisi jumlah pria dari masing masing pegawai
  */
  pria = 0;
  jkPria = [];
  while (pria < dataYangAkanDilooping.length) {
    if (dataYangAkanDilooping[pria].jenisKelamin === "M") {
      jkPria.push(pria);
    }
    pria++;
  }

  let jumlahPria = pria;

  /*
    TODO 3: Buatlah sebuah variabel bernama "jumlahWanita"
      yang berisi jumlah wanita dari masing masing pegawai
  */
  wanita = 0;
  jkWanita = [];
  while (wanita < dataYangAkanDilooping.length) {
    if (dataYangAkanDilooping[wanita].jenisKelamin === "F") {
      jkWanita.push(wanita);
    }
    wanita++;
  }
  let jumlahWanita = wanita;

  /*
    TODO 4: Buatlah sebuah variabel bernama "komentar"
      yang akan mengomentari apakah lebih banyak Pria atau Wanita
      
      Apabila Pria lebih banyak dari Wanita, maka komentar akan berisi:
        "Jumlah Pria lebih banyak dari Wanita"
      Apabila Wanita lebih banyak dari Pria, maka komentar akan berisi:
        "Jumlah Wanita lebih banyak dari Pria"
      Apabila imbang, maka komentar akan berisi:
        "Jumlah Pria dan Wanita berimbang"
  */
  let isiKomentar;
  if (jumlahPria > jumlahWanita) {
    isiKomentar = "Jumlah Pria lebih banyak dari Wanita";
  } else if (jumlahWanita > jumlahPria) {
    isiKomentar = "Jumlah Wanita lebih banyak dari Pria";
  } else if (jumlahPria == jumlahWanita) {
    isiKomentar = "Jumlah Pria dan Wanita berimbang";
  }
  let komentar = isiKomentar;

  // ! JANGAN DIMODIFIKASI
  return {
    hasilLooping,
    jumlahPria,
    jumlahWanita,
    komentar,
  };
}

function main(data) {
  const hasil = lakukanLooping(data || arrayObjectPegawai);

  console.log(hasil.hasilLooping);
  console.log(hasil.jumlahPria);
  console.log(hasil.jumlahWanita);

  return hasil;
}

main(arrayObjectPegawai);

module.exports = main;
