members = [
    {
        fname: 'José',
        lname: 'da Silva',
        technology: 'Laravel'
    },
    {
        fname: 'George',
        lname: 'Harrison',
        technology: 'Java'
    }
]

const handlingForms = {

    data() {
        return {
            members: window.members,
            newMember: {}
        }
    },
    methods: {
        addNewMember() {
            if (this.newMember.fname && this.newMember.lname && this.newMember.technology) {
                this.members.push(this.newMember);
                this.newMember = {}
            }
        }
    }
};

Vue.createApp(handlingForms).mount('#app');
