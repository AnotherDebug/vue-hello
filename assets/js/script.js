const { createApp } = Vue;


createApp ({
    data() {
       return{
        message : "Ciao, questo è il tuo primo messaggio su Vue!",
        image : "https://picsum.photos/200"
       }
    }
  
}).mount("#app");
