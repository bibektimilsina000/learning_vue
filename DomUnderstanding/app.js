const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            fullname: '',

        }
    },
    watch: {

        name(value) {

            if (value === '') {
                this.fullname = '';
            } else {
                this.fullname = value + ' ' + 'Panta'
            }

        }

    },

    computed: {
        // fullname() {
        //     console.log('running again...')

        //     if (this.name === '') {
        //         return '';
        //     }

        //     return this.name + ' ' + 'Panta';
        // },



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