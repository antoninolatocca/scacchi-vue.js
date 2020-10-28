var App = Vue.component('App', {
    template: `
        <div class="container my-4">
            <table>
                <tr>
                    <th></td>
                    <th class="text-center" v-for="lets in 8" :key="lettere[lets - 1]" > {{ lettere[lets - 1] }} </th>
                </tr>
                <tr v-for="row in 8" :key="row">
                    <th> {{ row }} </th>
                    <td v-for="index in 8" :key="lettere[index - 1] + row" :class="{ active: ((row + index) % 2 == 1)}">
                        <small>{{ lettere[index - 1] }}{{ row }}</small>
                        <button v-if="pedine[row-1][index-1]" :class="{black: (pedine[row-1][index-1].colore == 'Nero')}" :title="pedine[row-1][index-1].nome" v-on:click="">
                            {{ pedine[row-1][index-1].sigla }}
                        </button>
                    </td>
                    <th> {{ row }} </th>
                </tr>
                <tr>
                    <th></th>
                    <th class="text-center" v-for="lets in 8" :key="lettere[lets - 1]"> {{ lettere[lets - 1] }} </th>
                </tr>
            </table>
        </div>
    `,
    data() {
        return {
            "lettere" : [
                'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'
            ],
            "pedine" : [
                [{
                    sigla: "TB1",
                    nome: "Torre",
                    colore: "Bianco"
                },
                {
                    sigla: "CB1",
                    nome: "Cavallo",
                    colore: "Bianco"
                }, 
                {
                    sigla: "AB1",
                    noem: "Alfiere",
                    colore: "Bianco"
                }, 
                {
                    sigla: "QB",
                    nome: "Regina",
                    colore: "Bianco"
                }, 
                {
                    sigla: "KB",
                    nome: "Re",
                    colore: "Bianco"
                }, 
                {
                    sigla: "AB2",
                    nome: "Alfiere",
                    colore: "Bianco"
                }, 
                {
                    sigla: "CB2",
                    nome: "Cavallo",
                    colore: "Bianco"
                }, 
                {
                    sigla: "TB2",
                    nome: "Torre",
                    colore: "Bianco"
                }],
                [{
                    sigla: "PB1",
                    nome: "Pedone",
                    colore: "Bianco"
                },
                {
                    sigla: "PB2",
                    nome: "Pedone",
                    colore: "Bianco"
                },
                {
                    sigla: "PB3",
                    nome: "Pedone",
                    colore: "Bianco"
                }, 
                {
                    sigla: "PB4",
                    nome: "Pedone",
                    colore: "Bianco"
                },
                {
                    sigla: "PB5",
                    nome: "Pedone",
                    colore: "Bianco"
                },
                {
                    sigla: "PB6",
                    nome: "Pedone",
                    colore: "Bianco"
                },
                {
                    sigla: "PB7",
                    nome: "Pedone",
                    colore: "Bianco"
                },
                {
                    sigla: "PB8",
                    nome: "Pedone",
                    colore: "Bianco"
                }],
                ["", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", ""],
                [{
                    sigla: "PN1",
                    nome: "Pedone",
                    colore: "Nero"
                 },
                 {
                    sigla: "PN2",
                    nome: "Pedone",
                    colore: "Nero"
                 },
                 {
                    sigla: "PN3",
                    nome: "Pedone",
                    colore: "Nero"
                 },
                 {
                    sigla: "PN4",
                    nome: "Pedone",
                    colore: "Nero"
                 },
                 {
                    sigla: "PN5",
                    nome: "Pedone",
                    colore: "Nero"
                 },
                 {
                    sigla: "PN6",
                    nome: "Pedone",
                    colore: "Nero"
                 },
                 {
                    sigla: "PN7",
                    nome: "Pedone",
                    colore: "Nero"
                 },
                 {
                    sigla: "PN8",
                    nome: "Pedone",
                    colore: "Nero"
                 }],
                [{
                    sigla: "TN1",
                    nome: "Torre",
                    colore: "Nero"
                }, 
                {
                    sigla: "CN1",
                    nome: "Cavallo",
                    colore: "Nero"
                }, 
                {
                    sigla: "AN1",
                    nome: "Alfiere",
                    colore: "Nero"
                }, 
                {
                    sigla: "QN",
                    nome: "Regina",
                    colore: "Nero"
                }, 
                {
                    sigla: "KN",
                    nome: "Re",
                    colore: "Nero"
                }, 
                {
                    sigla: "AN2",
                    nome: "Alfiere",
                    colore: "Nero"
                }, 
                {
                    sigla: "CN2",
                    nome: "Cavallo",
                    colore: "Nero"
                }, 
                {
                    sigla: "TN2",
                    nome: "Torre",
                    colore: "Nero"
                }]
            ]
        };
    }
});

new Vue({
    el: "#app"
});