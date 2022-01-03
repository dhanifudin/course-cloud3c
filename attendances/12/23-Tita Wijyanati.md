# Pertemuan 12
## CICD
CI/CD adalah suatu metode yang mengirimkan aplikasi secara automasi ke dalam tahap pengembangan aplikasi. "CI" dalam CI/CD merupakan proses otomatisasi untuk pengembang. CI yang berhasil berarti perubahan kode baru pada aplikasi secara teratur dibuat, diuji, dan digabungkan ke repositori bersama. "CD" dalam CI/CD mengacu pada pengiriman atau deployment berkelanjutan yang merupakan konsep terkait yang terkadang digunakan secara bergantian.

## GitHub Actions
GitHub Actions adalah serangkaian tindakan dalam alur kerja repositori GitHub.
Beberapa istilah didalam github actions sebagai berikut : 
- Action => Block building terkecil dari workflow yang dapat diidentifikasi sebagai tugas individu.
- Artifacts => File yang dihasilkan saat membangun proyek software atau menguji proyek software.
- Event => Peristiwa yang memicu workflow di GitHub Actions. Setelah perubahan kode di-push, atau pull request dibuat, sebuah peristiwa dapat diatur di GitHub Actions untuk memicu workflow.
- GitHub-Hosted Runners => Mesin yang mirip dengan agen yang dihosting di saluran Azure DevOps. 
- Job => Serangkaian langkah yang disiapkan untuk dijalankan dalam single runner. Sebuah job dapat terdiri dari satu atau lebih action.
- Self-Hosted Runner => Berguna saat memiliki konfigurasi hardware khusus atau persyaratan software untuk membangun aplikasi atau menjalankan job.
- Step => Tugas yang merupakan action atau command yang diidentifikasi sebagai langkah. Semua step dalam job dijalankan di runner yang sama.
- Workflow => Dalam repo GitHub, proses yang disiapkan dalam file YAML yang mendefinisikan tugas/job build, build, test, package, atau deployment 
- Workflow File => File YAML yang disimpan di folder github/workflows/ di repositori GitHub.
- Workflow Run => Workflow dijalankan berdasarkan pemicu/peristiwa yang telah dikonfigurasi sebelumnya.