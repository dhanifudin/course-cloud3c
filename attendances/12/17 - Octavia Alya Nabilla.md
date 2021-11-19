Rangkuman Minggu ke 12

TI3C - 17 - Octavia Alya Nabilla

Pada pertemuan ini berisi materi tentang CI/CD.

CI/CD sendiri merupakan metode yang digunakan untuk sering mengirimkan aplikasi ke pelanggan dengan memperkenalkan otomatisasi ke dalam tahap pengembangan aplikasi.

"CI" dalam CI/CD selalu mengacu pada integrasi berkelanjutan, yang merupakan proses otomatisasi untuk pengembang. CI yang berhasil berarti perubahan kode baru pada aplikasi secara teratur dibuat, diuji, dan digabungkan ke repositori bersama.  Sedangkan "CD" dalam CI/CD mengacu pada pengiriman berkelanjutan dan/atau penerapan berkelanjutan, yang merupakan konsep terkait yang terkadang digunakan secara bergantian.

Gambaran dari CI/CD yaitu, Dalam pengembangan perangkat lunak, beberapa anggota tim mengembangkan kode dan berkontribusi untuk menciptakan fungsionalitas perangkat lunak. Ketika beberapa orang berkontribusi pada basis kode, penting untuk menjaga integritasnya dan memastikan bahwa setiap anggota tim dapat mengambil versi terbaru dan membangun serta menjalankannya secara lokal. Dua aspek penting harus dipertahankan untuk menjamin stabilitas basis kode yaitu, Aspek pertama adalah memastikan bahwa kode dikompilasi tanpa kesalahan. Aspek kedua adalah memastikan bahwa semua pengujian unit yang memvalidasi perilaku kode lulus, termasuk perubahan kode terbaru, dengan persentase yang sangat tinggi.

Kemudian ada GitHub Action. GitHub Action adalah serangkaian tindakan dalam alur kerja repositori GitHub.
Didalam GitHub Action terdapat:
1. Action = Building Blocks terkecil dari alur kerja adalah tindakan, yang dapat diidentifikasi sebagai tugas individu.
2. Artifacts = File yang dihasilkan saat Anda membangun proyek perangkat lunak atau menguji proyek perangkat lunak Anda adalah artefak.
3. Event : Suatu peristiwa memicu alur kerja di GitHub Actions. Setelah perubahan kode didorong, atau permintaan tarik dibuat, sebuah peristiwa dapat diatur di GitHub Actions untuk memicu alur kerja.
4. GitHub-Hosted Runners = Runner yang dihosting adalah mesin yang mirip dengan agen yang dihosting di pipeline Azure DevOps. Mereka didukung di Windows, Linux, dan macOS.
5. Job = Serangkaian langkah yang disiapkan untuk dijalankan dalam satu pelari. Sebuah pekerjaan dapat terdiri dari satu atau lebih tindakan.
6. Self-Hosted Runners = Berguna saat Anda memiliki konfigurasi perangkat keras khusus atau persyaratan perangkat lunak untuk membangun aplikasi atau menjalankan pekerjaan.
7. Step = Tugas yang merupakan tindakan atau perintah diidentifikasi sebagai langkah. Semua langkah dalam pekerjaan dijalankan di runner yang sama.
8. Workflow = Dalam repo GitHub, proses yang disiapkan dalam file YAML yang mendefinisikan pekerjaan build, test, package, atau deployment.
9. Workflow File = File YAML yang disimpan di folder github/workflows/ di repositori GitHub.
10. Workflow Run = Dijalankan berdasarkan pemicu/peristiwa yang telah dikonfigurasi sebelumnya.

Kemudian, Pentingnya Secret dan Token yaitu karena rahasia penting dalam alat implementasi pipa CI/CD apa pu, mereka melindungi informasi sensitif, seperti string koneksi dan kata sandi, dan menyimpan kata sandi atau rahasia lain yang diterapkan dalam pengaturan konfigurasi aplikasi.