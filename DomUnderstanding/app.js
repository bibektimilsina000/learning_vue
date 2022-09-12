const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            lname: '',
            // fullname: '',


        }
    },
    watch: {

        counter(value) {

            if (value > 50) {

                const that = this;

                setTimeout(function () { that.counter = 0; }, 2000

                    ,)

            }

        }

        // name(value) {

        //     if (value === '') {
        //         this.fullname = '';
        //     } else {
        //         this.fullname = value + ' ' + this.lname;
        //     }

        // },
        // lname(value) {

        //     if (value === '') {
        //         this.fullname = '';
        //     } else {
        //         this.fullname = this.name + ' ' + value;
        //     }

        // },

    },

    computed: {
        fullname() {
            console.log('running again...')

            if (this.name === '' || this.lname === '') {
                return '';
            }

            return this.name + ' ' + this.lname;
        },



    },
    methods: {

        outputFullName() {
            console.log('running again...')

            if (this.name === '') {
                return ''
            }

            return this.name + ' ' + 'Panta'
        },

        add() {
            this.counter = this.counter + 5
        },
        reset() {

            this.name = '';

        }


    },
});

app.mount('#events')