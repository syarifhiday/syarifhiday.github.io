
projects = [
    {
        title: "IoT clothesline system controller application",
        image: "images/porto1.png",
        tech: "Android Kotlin",
        link: "https://github.com/syarifhiday/Aplikasi-Sistem-Jemuran-IoT"
    },
    {
        title: "IoT coffee machine controller application",
        image: "images/porto2.png",
        tech: "Android Kotlin",
        link: "https://github.com/syarifhiday/Aplikasi-Asisten-Kopi"
    },
    {
        title: "FaceCare - An App to Help Maintain Your Facial Health",
        image: "images/porto3.png",
        tech: "Android Kotlin",
        link: "https://github.com/syarifhiday/FaceCare"
    }
]

certificates = [
    {
        image: "images/cert/0.png"
    },
    {
        image: "images/cert/1.png"
    },
    {
        image: "images/cert/2.png"
    },
    {
        image: "images/cert/3.png"
    },
    {
        image: "images/cert/4.png"
    },
    {
        image: "images/cert/5.png"
    },
    {
        image: "images/cert/6.png"
    },
    {
        image: "images/cert/7.png"
    },
    {
        image: "images/cert/8.png"
    },
    {
        image: "images/cert/9.png"
    },
    {
        image: "images/cert/10.png"
    },
    {
        image: "images/cert/11.png"
    },
    {
        image: "images/cert/12.png"
    }
]


var app = new Vue({
    el: '#app',
    data: {
        portfolio: projects,
        certs: certificates,
        isOpen: false,
        navMobile: ["hidden"],
        animationNavBar: [""]
    },
    methods: {
        toggleNavBar(isOpen){
            if(isOpen){
                setTimeout(() => this.isOpen = !this.isOpen, 500)
                
            }
        },
        
    }
})