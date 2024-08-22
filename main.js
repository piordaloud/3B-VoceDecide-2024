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
                texto: "Pedro teve um conflito com um empregado seu e precisa resolver esse problema",
                afirmacao: "chamou ele para conversar em um canto da sala e resolveu o problema"
            },
            {
                texto: "Pedro Brigou com seu chefe e estava com serios problemas",
                afirmacao: "Chefe de pedro deu uma advêrtencia no qual ele ficaria sem receber por 20 dias"
            }
        ]
    },
    {
        enunciado: "Chefe do Pedro ficou muito bravo com ele e deu um tiro em direção ao peito dele",
        alternativas: [
            {
                texto: "Ele teve que sair as pressas para o hospital",
                afirmacao: "Ficou internado por 2 meses"
            },
            {
                texto: "Pedro desviou do tiro e correu para longe",
                afirmacao: "Voltou um tempo depois e quebrou uma jarra de vidro na cabeça do seu chefe"
            }
        ]
    },
    {
        enunciado: "Passou mais 3 anos e depois de tudo isso ter acontecido eles voltaram a ser amigos",
        alternativas: [
            {
                texto: "seu antigo chefe fez um novo convite para ele voltar a empresa",
                afirmacao: "Pedro aceitou e eles seguiram normalmente"
            },
            {
                texto: "Voltou a trabalhar na empresa mas estava acontecendo um problema bem antigo com ele novamente",
                afirmacao: "pedro estava sofrendo racismo na empresa, assim como um dia ele ja sofreu na infância"
            }
        ]
    },
    {
        enunciado: "Pedro cansou de tudo isso e resolveu pedir demissão",
        alternativas: [
            {
                texto: "Pedro seguiu sua vida bela normalmente",
                afirmacao: "longe de problemas ele apenas queria viver em um mundo sem racismo e difamação apenas por ter pele mais escura"
            },
            {
                texto: "Sua vida foi muito triste dali em diante",
                afirmacao: "Pedro viveu para o resto da sua vida sofrendo com racismo mas sempre lutando por seus direitos"
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