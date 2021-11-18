# Pertemuan 12

## Rangkuman CI/CD
CI/CD adalah metode untuk mengirimkan aplikasi ke client dengan otomatisasi ke dalam tahap pengembangan aplikasi. 
"CI" dalam CI/CD merupakan proses otomatisasi untuk pengembang. CI yang berhasil berarti perubahan kode baru pada aplikasi secara teratur dibuat, diuji, dan digabungkan ke repositori bersama.
"CD" dalam CI/CD mengacu pada pengiriman atau deployment berkelanjutan yang merupakan konsep terkait yang terkadang digunakan secara bergantian.

Dalam pengembangan software, beberapa anggota tim berkontribusi untuk menciptakan fungsionalitas software. Ketika beberapa orang berkontribusi pada basis kode, penting untuk menjaga integritasnya dan memastikan bahwa setiap anggota tim dapat mengambil versi terbaru dan membangun serta menjalankannya secara lokal.

Ada dua aspek penting harus dipertahankan untuk menjamin stabilitas basis kode, diantaranya yaitu :
1. Aspek untuk memastikan bahwa kode dikompilasi tanpa kesalahan. 
2. Aspek untuk memastikan bahwa semua unit test yang memvalidasi perilaku kode lulus, termasuk perubahan kode terbaru dengan persentase yang sangat tinggi.

## GitHub Actions
GitHub Actions adalah serangkaian tindakan dalam alur kerja repositori GitHub.
Berikut beberapa istilah dalam Github Action yang perlu diketahui :
- Action : Block building terkecil dari workflow yang dapat diidentifikasi sebagai tugas individu.
- Artifacts : File yang dihasilkan saat membangun proyek software atau menguji proyek software.
- Event : Peristiwa yang memicu workflow di GitHub Actions. Setelah perubahan kode di-push, atau pull request dibuat, sebuah peristiwa dapat diatur di GitHub Actions untuk memicu workflow.
- GitHub-Hosted Runners : Mesin yang mirip dengan agen yang dihosting di saluran Azure DevOps. 
- Job : Serangkaian langkah yang disiapkan untuk dijalankan dalam single runner. Sebuah job dapat terdiri dari satu atau lebih action.
- Self-Hosted Runner : Berguna saat memiliki konfigurasi hardware khusus atau persyaratan software untuk membangun aplikasi atau menjalankan job.
- Step : Tugas yang merupakan action atau command yang diidentifikasi sebagai langkah. Semua step dalam job dijalankan di runner yang sama.
- Workflow : Dalam repo GitHub, proses yang disiapkan dalam file YAML yang mendefinisikan tugas/job build, build, test, package, atau deployment 
- Workflow File : File YAML yang disimpan di folder github/workflows/ di repositori GitHub.
- Workflow Run : Workflow dijalankan berdasarkan pemicu/peristiwa yang telah dikonfigurasi sebelumnya.

## Secrets dan Token
Secrets penting dalam tool implementasi pipeline CI/CD apapun. Mereka melindungi informasi sensitive, seperti connection strings dan passwords, serta menyimpan password atau rahasia lain yang diterapkan dalam pengaturan konfigurasi aplikasi.




