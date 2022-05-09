const App = {
    data(){
        return {
            values: ['Stone', 'Paper', 'Scissors'],
            chosen: undefined,
            pc_chosen: undefined,
            winner: undefined,
            counter_player: 0,
            counter_pc: 0
        }
    }, 
    methods: {
        play(value) {
            this.chosen = value
            this.pc_chosen = this.values[Math.floor(Math.random()*3)]
            if (this.values.indexOf(this.chosen) === (this.values.indexOf(this.pc_chosen)+1) % 3) {
                this.winner = 'Player wins!'
                this.counter_player++
            }
            else if (this.values.indexOf(this.pc_chosen) === (this.values.indexOf(this.chosen)+1) % 3)
            {
                this.winner = 'PC wins!'
                this.counter_pc++
            }
            else {
                this.winner = 'Draw...'
            }

        }
    }
}
Vue.createApp(App).mount('#app')