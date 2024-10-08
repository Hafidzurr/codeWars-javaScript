# Change Me

### NOTES

- Jalankan `npm install` terlebih dahulu
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

- Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti .shift(), unShift(), push(), dan pop()

### HINTS

- Nama function haruslah `changeMe` dan __tidak boleh diganti dengan nama function lainnya__. Untuk detail fungsi akan mengacu kepada [Directions](#directions) yang disebutkan di bawah

---

## Directions

Diberikan sebuah function `changeMe` yang menerima satu parameter berupa array multidimensi dimana array tersebut berisi value (pasti berurut dari kiri ke kanan) First Name, Last Name, Gender dan Birth Year.

Fungsi ini akan menampilkan object literal yang memiliki property `firstName`, `lastName`, `gender` dan `age`.

Nilai age didapatkan dari tahun sekarang dikurang tahun lahir. Jika tahun lahir tidak diisi atau tahun lahir lebih besar dibandingkan tahun sekarang maka age akan berisi `Invalid Birth Year`.

Contoh jika arr inputan adalah `[['Platinum', 'Fox', 'female', 1995], ['John', 'Doe', 'male', 2000]]` dan tahun sekarang = __2021__, maka output:

1. Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 24 }
2. John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 19 }

Perhatikan contoh test case berikut:

```js
function changeMe(arr) {
  // you can only write your code here!
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 39 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
```
