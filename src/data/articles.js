// import bankistApp from '../assets/portfolio/bankistapp.png';
import maptyApp from '../assets/portfolio/mapty-Map-your-workouts.png';
import forkifyApp from '../assets/portfolio/forkify-app.png';
import bankistLanding from '../assets/portfolio/Bankist-Landing-Page.png';
import msStoriesApp from '../assets/portfolio/MS-Stories-Baca-Novel-Seru (5).png';
import hungryApp from '../assets/portfolio/Hungrify-Apps (2).png';

export const ARTICLES = [
  {
    id: 'p2',
    title: 'Bankist Landing Page',
    image: bankistLanding,
    tags: ['JavaScript', 'ES6', 'DOM Manipulation', 'Web API'],
    link: '#',
    description:
      'Ini adalah salah satu portfolio yang saya peroleh dari kursus Udemy "The Complete JavaScript Course 2023: From Zero to Expert!" yang dibawakan oleh Mr. Jonas Schmedtmann untuk mempraktikan ilmu dan pengetahuan yang sudah dipelajari. Pada bagian ini saya mempelajari banyak terkait dengan manipulasi DOM tingkat lanjut dan juga belajar tentang web api.',
  },
  {
    id: 'p3',
    title: 'Mapty App',
    image: maptyApp,
    tags: ['JavaScript', 'ES6', 'API Call'],
    link: '#',
    description:
      'Mapty, aplikasi berbasis web sederhana untuk menandai tempat lokasi kegiatan olahraga (seperti berlari dan bersepeda). Aplikasi web ini memungkinkan pengguna untuk menandai tempat lokasi yang diinginkan untuk melakukan kegiatan olahraga dan memasukkan bidang yang sesuai pada jenis olahraga yang dipilih.\nIni juga salah satu portfolio yang saya peroleh dari kursus Udemy "The Complete JavaScript Course 2023: From Zero to Expert!" yang dibawakan oleh Mr. Jonas Schmedtmann untuk mempraktikan ilmu dan pengetahuan yang telah dipelajari.',
  },
  {
    id: 'p4',
    title: 'Forkify App',
    image: forkifyApp,
    tags: ['JavaScript', 'ES6', 'API Call'],
    link: 'https://forkify-izrofi.netlify.app/',
    description:
      'Forkify app adalah aplikasi web sederhana untuk mencari resep makanan, selain itu aplikasi web ini memungkinkan pengguna untuk menyesuaikan porsi yang diinginkan sehingga aplikasi akan secara otomatis mengkalkulasi dan menyesuaikan jumlah bahan yang diperlukan untuk porsi tersebut. Pengguna juga dapat menambahkan resep makanan yang diinginkan dan menyimpan resep tersebut sebagai bookmark. Resep yang di bookmark akan disimpan pada sisi klien (localStorage) agar dapat bertahan walaupun jendela browser ditutup.Ini adalah proyek akhir dari kursus Udemy "The Complete JavaScript Course 2023: From Zero to Expert!" yang dibawakan oleh Mr. Jonas Schmedtmann. \nPada bagian ini banyak hal yang dipelajari mulai dari bagaimana cara merancang arsitektur aplikasi hingga bisa membuat aplikasi tersebut dapat berfungsi sebagaimana mestinya menggunakan javascript murni dengan memanfaatkan fitur ES6 dan mengikuti pedoman sesuai best practice.',
  },
  {
    id: 'p5',
    title: 'MS Stories App',
    image: msStoriesApp,
    tags: ['JavaScript', 'ES6', 'API Call', 'ReactJS', 'TailwindCSS'],
    link: 'https://ms-front.mspublishing.co.id/',
    description:
      'MS Stories merupakan platform baca novel gratis dibawah naungan MS Publishing. Saya membangun web ini menggunakan reactjs, dibantu dengan tailwindcss untuk mengelola layouts dan styles pada halaman web. Disini saya banyak mengekplorasi alat-alat untuk pengembangan frontend yang dapat meningkatkan perfoma aplikasi dan tools atau libraries untuk mempermudah dan mempercepat proses pengembangan.',
  },
  {
    id: 'p6',
    title: 'Hungrify App',
    image: hungryApp,
    tags: [
      'JavaScript',
      'ES6',
      'API Call',
      'ReactJS',
      'Webpack',
      'PWA',
      'Web Vitals',
    ],
    link: 'https://hungrify-app.netlify.app/',
    description:
      'Aplikasi web ini merupakan proyek akhir (submission) dari kursus Dicoding Indonesia "Menjadi Front-End Web Developer Expert". Proyek akhir ini menekankan pada bagaimana membuat web agar memiliki performa yang baik, aksesibilitas yang baik dengan implementasi web vitals dan SEO. Pada submission ini juga dilakukan unit testing menggunakan jest, e2e test pada antarmukan pengguna untuk memastikan fungsionalitas aplikasi berjalan sebagaimana mestinya.\n Banyak insight baru yang didapat setelah mengikuti kursus ini seperti melakukan optimisasi pada gambar, mengaplikasikan alat-alat pengembangan modern pada aplikasi web hingga menerapkan Progressive Web App (PWA) pada aplikasi web agar dapat diinstal pada perangkat seperti aplikasi native pada umumnya dan banyak lainnya.',
  },
];
