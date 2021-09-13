# Pertemuan 03 | Cloud Computing


> Rangkuman Pembahasan
1. Pembahasan mengenai Instances
2. Pembahasan jenis instances yang disediakan oleh Oracle : 
    - Bare Metal (Berupa Server Fisik) 
    - Virtual Machine (Server Virtual) 
3. Membahas beberapa jenis Shapes yang disediakan : 
    - Standard : <br>
      Dirancang untuk kebutuhan umum yang biasa digunakan oleh aplikasi pada umumnya, menyediakan sumber daya yang
      seimbang pada core, memori, dan jaringan. Standard shapes tersedia dengan prosesor Intel,
      AMD, dan Arm-based.
    - DenseIO : <br>
      dirancang untuk basis data yang besar, seperti big data dan aplikasi yang butuh performa tinggi. Fitur yang 
      didapatkan adalah SSD NVME
    - GPU : <br>
      dirancang untuk akselerasi pada hardware terutama kebutuhan GPU termasuk Intel, AMD CPU , dan NVIDIA
    - HPC (High performance computing) : <br>
      dirancang untuk komputasi performa tinggi
    - Optimized : <br>
      dirancang untuk komputasi tingkat tinggi pada frekuensi core processor.
4. Membahas fungsi Flexibel Shape berkenaan tentang penggunaan VM yang sesuai kebutuhan
5. Persamaan dan Perbedaan antara VM.Standard.E3.Flex dan VM.Standard.E4.Flex yaitu :
    > Persamaan
    <table>
        <thead>
            <th>Shape</th>
            <th>Memory per OCPU</th>
            <th>Minimum Memory</th>
            <th>Max</th>
        </thead>
        <tbody>
            <tr>
                <td>VM.Standard.E3.Flex</td>
                <td>64 GB per OCPU</td>
                <td>1 GB or a value matching the number of OCPUs, whichever is greater</td>
                <td>1024 GB</td>
            <tr>
            <tr>
                <td>VM.Standard.E4.Flex</td>
                <td>64 GB per OCPU</td>
                <td>1 GB or a value matching the number of OCPUs, whichever is greater</td>
                <td>1024 GB</td>
            <tr>
        </tbody>
    </table>
    
    > Perbedaan 
    
    Kompabilitas Penggunaan versi OS


