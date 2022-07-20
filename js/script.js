const root = new Vue ({
    el: '#root',
    data: {
        emails: [],
    },
    methods: {
        getEmail(){
            console.log('getEmail()')
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    console.log('response:',response);
                    this.emails.push(response.data.response)
                })
                .catch((error) => {
                    console.log('error:',error);
                })
        }
    },
    mounted() {
        for(let i=0;i<10;i++){
            this.getEmail()
        }
    },
})