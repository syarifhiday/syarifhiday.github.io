
projects = [
    {
        title: "IoT clothesline system controller application",
        image: "images/porto1.webp",
        tech: "Android Kotlin",
        link: "https://github.com/syarifhiday/Aplikasi-Sistem-Jemuran-IoT"
    },
    {
        title: "IoT coffee machine controller application",
        image: "images/porto2.webp",
        tech: "Android Kotlin",
        link: "https://github.com/syarifhiday/Aplikasi-Asisten-Kopi"
    },
    {
        title: "FaceCare - An App to Help Maintain Your Facial Health",
        image: "images/porto3.webp",
        tech: "Android Kotlin",
        link: "https://github.com/syarifhiday/FaceCare"
    }
]

certificates = [
    {
        image: "images/cert/0.webp"
    },
    {
        image: "images/cert/1.webp"
    },
    {
        image: "images/cert/2.webp"
    },
    {
        image: "images/cert/3.webp"
    },
    {
        image: "images/cert/4.webp"
    },
    {
        image: "images/cert/5.webp"
    },
    {
        image: "images/cert/6.webp"
    },
    {
        image: "images/cert/7.webp"
    },
    {
        image: "images/cert/8.webp"
    },
    {
        image: "images/cert/9.webp"
    },
    {
        image: "images/cert/10.webp"
    },
    {
        image: "images/cert/11.webp"
    },
    {
        image: "images/cert/12.webp"
    }
]


var app = new Vue({
    el: '#app',
    data: {
        portfolio: projects,
        certs: certificates,
        isOpen: false,
        animationNavBar: ""
    },
    methods: {
        toggleNavBar(isOpen){
            if(isOpen){
                setTimeout(() => this.isOpen = !this.isOpen, 500)
                
            }
        },
        
    }
})
