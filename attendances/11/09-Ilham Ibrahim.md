# Rangkuman Cloud Computing Pertemuan 11

<p> Pada pertemuan kali ini membahas lebih lanjut terkait docker ada 3 pembahasan yaitu : docker network, docker volume dan docker compose.
  <ol>
    <li>docker network <br /> docker network memiliki 3 tipe bridge, host dan none :
      <ul>
        <li>docker network bridge <br /> jenis network bawaan dari docker bertujuan sebagai menghubungkan docker daemon ke container ketika docker daemon dijalankan maka konfigurasi virtual bridge disebut docker0.</li>
        <li>docker network host <br /> docker jenis ini meletakan stack hostnya network, ketika menggunakan host network maka akan secepat jaringan normal karena tidak ada menggunakan bridge ataupun translation.</li>
        <li>docker network none <br /> network none bertujuan untuk tidak dikonfigurasikan , tidak ada driver digunakan pada network docker none</li>
      </ul>
      <br /> Pada docker network kita juga bisa melakukan yang namanya expose dan mapping port yang dimana kita bisa mengatur port pada aplikasi yang kita rancang sehingga bisa dijalankan bersama dengan port yang berbeda.
    </li>
    <li>
      Docker volume <br /> pada docker volume ada yang disebut dengan presistent storage yang bertujuan agar data pada container tetap terjaga walaupun container telah dihapus. selain itu docker volume juga memiliki docker volume driver sama Sama halnya dengan network yang memiliki driver, volume juga memiliki jenis-jenis volume agar mampu terintegrasi dengan jenis penyimpanan yang lain ada 3 tipe driver diantaranya Docker volume driver for Azure file storage,IPFS(InterPlanetary File System) dan Keywhiz.
    </li>
    <li>
      docker compose <br /> docker compose adalah sebuah tool yang bertujuan untuk mendefiniskan, launching, dan mengelola service, dimana sebuah service adalah didefinisikan sebagai satu atau lebih dari sebuah docker container. beberapa hal yang bisa dilakukan oleh docker compose diantaranya : build docker image, menjalankan aplikasi container sebagai service, menjalankan full system dari service, mengelola secara individu service pada sebuah sistem, melakukan scaling up atau down, dan melihat log dari kumpulan container yang berjalan sebagai service.
    </li>
 </ol>
</p>
