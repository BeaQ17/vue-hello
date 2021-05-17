//vue-hello: 
//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

const title = new Vue (
    {
        el: "#root",
        data:{
            msg: "Hello VueJS"
        }
    }
);


//Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.
const image = new Vue (
    {
        el: "#app",
        data:{
            helloImg: "https://images.twinkl.co.uk/tw1n/image/private/t_630/image_repo/93/1c/t2-g-100--new-mixed-language-hello-speech-bubble-display-signs-_ver_2.jpg"
        }
    }
);