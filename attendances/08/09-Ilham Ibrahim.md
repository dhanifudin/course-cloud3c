# Rangkuman Pertemuan 8 Komputasi Awan

<p align="justify"> Pada pertemuan minggu ini membahas terkait object storage pada oracle cloud yang dimana fungsi dari object stroage adalah sebagai platform penyimpanan yang memiliki performa yang tinggi dan scalable,
  oracle cloud menawarkan object storage ketahanan data yang andal dan hemat biaya tidak hanya itu object storage menyimpan data tidak terstruktur dalam jumlah tak terbatas dari file apapun seperti gambar maupun video,
  dengan adanya fitur object storage kita langsung dapat menyimpan atau mengambil data melalui internet dari oracle cloud dengan hal ini kita tidak perlu khawatir data akan hilang.
  oracle cloud mendukung object storage dengan private access melalui ip pribadi tujuan agar data lebih aman, kita dapat mengakses object storage melalui console,cli,rest api dan oci sdk. Object storage memiliki resource diantaranya :
  <ol>
    <li> Buckets <br /> Buckets adalah logical container untuk menyimpan </li>
    <li> Objects <br /> Semua tipe data akan disimpan sebagai objek setiap objek akan disimpan pada buckets </li>
    <li> NameSpace <br /> NameSpace Berfungsi sebagai top-level container untuk semua buckets dan object</li>
    <li> Compartment <br /> Kompartemen adalah Primary block building yang digunakan untuk mengatur sumber daya cloud</li>
  </ol>
  <br />
  object storage characteristics :
  <ol>
  <li> Strong Consistency <br /> Saat ada read request, Object Storage akan membuat salinan terbaru dari data yang ditulis ke sistem.</li>
  <li> Durability <br /> Object Storage adalah layanan regional,Object Storage secara aktif memantau integritas data menggunakan checksum dan secara otomatis mendeteksi dan memperbaiki data yang rusak, Object Storage secara aktif memantau dan memastikan redundansi data.<li>
  <li> Custom Metadata <br /> Kita dapat menentukan metadata ekstensif kita sendiri. </li>
  <li> Security <br /> Object Storage memastikan keamanan data yang disimpan menggunakan enkripsi data.</li>
  </ol>
  <br />
</p>
