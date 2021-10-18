# Pertemuan 05

## Rangkuman Bab 5 - PLATFORM AS A SERVICE (PAAS)

PaaS merupakan platform pengembangan dan penerapan aplikasi yang terstandarisasi, dapat dibagikan (shared), dan dapat diskalakan secara elastis (elastically scalable) yang dikemas sebagai sebuah layanan. PaaS adalah pendekatan evolusioner untuk memberikan middleware dan kapasitas database yang dibutuhkan untuk meng-host aplikasi. Ketika sepenuhnya diimplementasikan, PaaS akan memberikan:
- Penyediaan kapasitas yang cepat (mendekati waktu nyata) terhadap server fisik
- Aplikasi yang sangat dioptimalkan untuk rasio server dan kemampuan untuk mematikan kapasitas cadangan (spare capacity)
- Pemantauan lintas domain dan peringatan yang proaktif (proactive alerting)
- Fasilitas pengukuran untuk menetapkan parameter penggunaan untuk penyewa PaaS

Adapun layanan yang ditawarkan PaaS diantaranya yaitu :
- Kecerdasan buatan (AI)
- Chatbots
- Blockchain -> ledger data terdesentralisasi yang dibagikan dengan aman
- Internet of Things (IoT)

Sebagian besar manfaat PaaS berdasarkan tiga prinsip, yaitu :
1. Efisiensi TI
PaaS mempercepat penyediaan, meningkatkan otomatisasi, menstandarkan penerapan, menghilangkan tugas rutin (routin tasks), dan meningkatkan skalabilitas.
2. Inovasi bisnis
PaaS mendorong hasil teratas dan terbawah (top- & bottom-line results) dengan memungkinkan TI menjadi lebih responsif terhadap peluang bisnis.
3. Pengurangan risiko
PaaS memperkuat dan menyederhanakan keamanan dan mempercepat respons terhadap ancaman yang berkembang di seluruh komponen TI yang heterogen.

Dalam penerapan layanan PAAS, setidaknya dalam VM harus ada web server dan wordpress. Kemudian untuk melakuakan setup mySQL yang terkoneksikan dengan database, maka pada VM diinstall mySQL client karena sql server nya terdapat pada database. Lalu config pada wordpress config yang berisi informasi IP dan user akses terkait dengan database instance. Jika kita menggunakan windows, kita bisa menggunakan putty ataupun powershell yang ada di windows. Jika menggunakan putty, maka putty nya dikoneksikan dengan VM lalu VM dikoneksikan dengan databasenya. Selain itu, kita juga bisa menggunakan pendekatan MySQL client GUI (seperti mysql workbench, SQLYog, Navicat, tableplus) lalu lakukan setup over SSH dan koneksikan pada VM menggunakan SSH. Karena pada saat setup over SSH sudah diisi informasi kredential dengan database, maka MYSQL client dapat terhubung dengan database.

Untuk upload source code aplikasi ke server, bisa menggunakan git atau scp. Secara default, pada VM tidak ada program git namun kita bisa mengintall untuk menambahkannya. Jika upload dengan scp, kita bisa menggunakan winscp atau filezilla via sftp.