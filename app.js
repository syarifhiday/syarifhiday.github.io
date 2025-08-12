projects = [
  {
    title: "Sinau CPNS",
    image: "images/porto7.webp",
    tech: "Laravel",
    link: "https://sinaucpns.com",
  },
  {
    title: "IoT clothesline system controller application",
    image: "images/porto1.webp",
    tech: "Android Kotlin",
    link: "https://github.com/syarifhiday/Aplikasi-Sistem-Jemuran-IoT",
  },
  {
    title: "IoT coffee machine controller application",
    image: "images/porto2.webp",
    tech: "Android Kotlin",
    link: "https://github.com/syarifhiday/Aplikasi-Asisten-Kopi",
  },
  {
    title: "FaceCare - An App to Help Maintain Your Facial Health",
    image: "images/porto3.webp",
    tech: "Android Kotlin",
    link: "https://github.com/syarifhiday/FaceCare",
  },
  {
    title: "Nadagitar Store - Wordpress eCommerce",
    image: "images/porto4.webp",
    tech: "Wordpress",
    link: "https://shop.nadagitar.net",
  },
  {
    title: "Sales Insights: Analyzing Kaggle's Sales Data",
    image: "images/porto5.webp",
    tech: "Python, Looker Studio",
    link: "https://medium.com/@iamsyarifh/proyek-analisis-data-penjualan-dan-pelanggan-34e1ee2c45ec",
  },
  {
    title: "Secure Network in a Garment Factory Company",
    image: "images/porto6.webp",
    tech: "Cisco, Fortigate, Ubuntu, Kali linux, Nginx",
    link: "https://drive.google.com/file/d/1Qp1RlYZWX-cbR3FggHcfGtafr8SaYZS4/view?usp=sharing",
  },
];

certificates = [
  {
    image: "images/cert/0.webp",
  },
  {
    image: "images/cert/4.webp",
  },
  {
    image: "images/cert/7.webp",
  },
  {
    image: "images/cert/8.webp",
  },
  {
    image: "images/cert/13.webp",
  },
  {
    image: "images/cert/14.webp",
  },
  {
    image: "images/cert/9.webp",
  },
  {
    image: "images/cert/10.webp",
  },
  {
    image: "images/cert/11.webp",
  },
  {
    image: "images/cert/12.webp",
  },
];

var app = new Vue({
  el: "#app",
  data: {
    portfolio: projects,
    certs: certificates,
    isOpen: false,
    animationNavBar: "",
  },
  methods: {
    toggleNavBar(isOpen) {
      if (isOpen) {
        setTimeout(() => (this.isOpen = !this.isOpen), 500);
      }
    },
  },
});
