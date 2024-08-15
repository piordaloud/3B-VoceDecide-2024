const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Pedro é um garotinho negro que sofreu racismo na escola, e sua mãe ficou revoltada o que ela deve fazer",
        alternativas: [
            {
                texto:"Ela deve ir na escola e falar com os diretores e responsaveis para ver se consegue resolver essa situação ",
                afirmacao: "A mãe coversou com a diretora para resolver os problemas e tudo ficou bem por final, os dois viraram amigos"
            },
            {
                texto:"Ela aconselha seu filho a bater em qualquer pessoa que fazer racismo com ele novamente",
                afirmacao: "O menino fez racismo mais uma vez com ele mas o Pedro perdeu a paciência e partiu pra cima do menino e bateu muito nele até sangrar"
            }   
        ]
    },
    {
        enunciado: "Após se passar 10 anos Pedro não estava mais estudando e tinha se tornado um empresario ",
        alternativas: [
            {
                texto: "alternativa 03",
                afirmacao: "resultado03"
            },
            {
                texto: "alternativa 04",
                afirmacao: "resultado 04"
            }
        ]
    },
    {
        enunciado: "Enunciado 03",
        alternativas: [
            {
                texto: "alternativa 05",
                afirmacao: "resultado 05"
            },
            {
                texto: "alternativa 06",
                afirmacao: "resultado 06"
            }
        ]
    },
    {
        enunciado: "Enunciado 04",
        alternativas: [
            {
                texto: "alternativa 07",
                afirmacao: "resultado 07"
            },
            {
                texto: "alternativa 08",
                afirmacao: "resultado 08"
            }
        ]
    },
    {
        enunciado: "Enunciado 05",
        alternativas: [
            {
                texto: "alternativa 09",
                afirmacao: "resultado 09"
            },
            {
                texto: "alternativa 10",
                afirmacao: "resultado 10"
            }
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostrarPerguntas(){
    if(atual >= perguntas.length){
        mostraResultado();
        return
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""
    mostrarAlternativas();
}

function mostrarAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostrarPerguntas();
}

function mostraResultado(){
    caixaPerguntas.textContent = " Inicio do texto... "
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostrarPerguntas();