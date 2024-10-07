
//função assincrona com await, para esperar e fetch para realizar a requisão, que no caso é o url
async function vizualizarInformacoesGlobais(){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json' //definimos o caminho para poder acessar a rede social/link
    const res = await fetch(url) //aqui faz a requisição
    const dados = await res.json() //aqui espera tudo ser convertido para jason, seleciona a parte da resposta das url, converte em json 
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo/1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)//função para deixar os números inteiros
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo) * 100).toFixed(2)

    const paragrafo = document.createElement("p") //criamos um elemento de parágrafo para colocarmos os dados API
    paragrafo.classList.add("graficos-container__texto") //adicionamos uma class a const paragrafo
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasConectadas} bilhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${horas} horas</span> e <span>${minutos}</span> conectadas.<br>Isso significa que aproximadamente <span>${porcentagemConectada}%</span> de pessoas estão conectadas em alguma rede social. `
    
    const container = document.getElementById('graficos-container')//selecionamos o espaço no HTML destinado a construção dos gráficos
    container.appendChild(paragrafo)//dizemos que o container vai receber o parágrafo
}

vizualizarInformacoesGlobais() //pode-se observar com console que gera uma promise