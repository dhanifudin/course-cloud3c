# Rangkuman Pembahasan Pertemuan 3

Ada beberapa pembahasan pada pertemuan 3, antara lain:

1. Komopnen dalam membuat VM
  - Availability domain
  - Virtual cloud network
  - Key pair (untuk Linux)
  - Tags
  - Password (untuk Windows)
  - Image
  - Shape
2. Macam-macam shape
  - Standard shapes
  
  Dirancang untuk kebutuhan umum yang banyak digunakan pada aplikasi-aplikasi dan use cases pada umumnya. Standard shapes menyediakan sumber daya yang seimbang pada core, memori, dan jaringan. Standard shapes tersedia dengan prosesor Intel, AMD, dan Arm-based.
  - DenseIO shapes

  Dirancang untuk basis data yang besar, seperti big data dan aplikasi-aplikasi yang membutuhkan performa storage yang tinggi. Shapes ini mendapat fitur NVMe berbasis SSD.
  - GPU shapes

  Dirancang untuk akselerasi pada hardware terutama kebutuhan GPU termasuk Inter, AMD CPU dan prosesor grafis NVIDIA.
  - HPC shapes

  Dirancang untuk komputasi performa tinggi yang membutuhkan frekuensi prosesor core yang tinggi dan HPC dalam klaster jaringan yang diakses secara paralel.
  - Optimized shapes

  Dirancang untuk komputasi tingkat tinggi pada frekuensi core prosesor. Shape ini juga cocok untuk kebutuhan HPC dengan low latency. Shape ini juga mendukung cluster networking.
3. Cara login vm menggunakan ssh dengan image ubuntu 20.04
4. Jenis-jenis flexible shapes yang tersedia, seperti berikut:
  - VM.Standard.E3.Flex (AMD)
  - VM.Standard.E4.Flex (AMD)
  - VM.Optimized3.Flex (Intel)
  - VM.Standard.A1.Flex (Arm processor dari Ampere)
