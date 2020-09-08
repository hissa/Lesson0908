const vm = new Vue({
    el: '#app',
    data: {
        messages: [],
    },
    methods: {
        kon() {
            this.messages.push('こんにちは');
        },
        oha() {
            this.messages.push('おはよう');
        },
        noshi() {
            this.messages.push('さようなら');
        },
        deleteMessage(index) {
            this.messages.splice(index, 1);
        },
        deleteAll() {
            this.messages = [];
        },
    },
})