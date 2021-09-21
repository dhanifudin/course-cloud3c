# Pertemuan 03

## Rangkuman Bab 3 Infrastructure as a Service (IaaS) - Compute

1. Ada 2 jenis instances yang ditawarkan oleh Oracle Cloud Infrastructure :
- Bare Metal => memberikan akses ke server fisik khusus untuk kinerja tertinggi dan isolasi yang kuat.
- Virtual Machine (VM) => komputasi independen secara virtual yang berjalan di atas perangkat keras fisik bare metal.

2. Pertimbangan untuk membuat VM apabila kita masih belum mengetahui kebutuhannya adalah lebih baik mulai dari yang terkecil (karena masih bisa diupgrade) jika kurang sesuai.

3. Berikut beberapa variasi shape yang ditawarkan oleh OCI, diantaranya yaitu :
- Standard shapes
- DenseIO shapes
- GPU shapes => shape yang populer digunakan
- High performance computing (HPC) shapes
- Optimized shapes
- Flexible shapes

4. Ada beberapa jenis flexible shapes yang tersedia:
- VM.Standard.E3.Flex (AMD)
- VM.Standard.E4.Flex (AMD)
- VM.Optimized3.Flex (Intel)
- VM.Standard.A1.Flex (Arm processor dari Ampere)

VM.Standard.E3.Flex (AMD) dengan VM.Standard.E4.Flex (AMD) hampir sama hanya saja VM.Standard.E4.Flex (AMD) lebih update dan beda pada platform yang didukung.

5. Kapasitas yang digunakan untuk VM ada beberapa jenis, diantaranya :
- On-demand capacity
- Preemptible capacity
- Reserved capacity
- Dedicated capacity

6. Adapun komponen yang dibutuhkan ketika membuat VM adalah
- Availability domain
- Virtual cloud network
- Key pair (untuk Linux)
- Tags
- Password (untuk Windows)
- Image
- Shape

7. Ilustrasi membuat sebuah VM Linux Instance adalah untuk bisa mengaksesnya kita harus menggunnakan SSH Key dihubungkan melalui internet gateway kemudian melewati VCN selanjutnya baru masuk bagian ke subnet tempat VM itu berada di Oracle data center.

8. Berikut refrensi yang bisa digunakan untuk pembelajaran pertemuan ini :
- serversforhackers
- https://www.server-world.info/en/

