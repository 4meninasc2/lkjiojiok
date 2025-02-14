import {getCSS, tickConfig, criarGrafico, incluirTexto} from "./common.js"

async function redesFavoritasMundo(){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritas.json'
    const res =  await fetch(url)
    const dados = await res.json()
    const redes = Object.keys(dados)
    const valores = Object.values(dados)

    const data = [
        {
            values: valores,
            labels: redes,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ]
    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        height: 500,
        title:{
            text: 'Redes Sociais que os usuários mais gostam',
            x: 0,
            font:{
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size:30
            }
        },
        legend: {
            font: {
                color: getCSS('--primary-color'),
                size: 16
            }
        }
    }
    criarGrafico(data, layout)

    incluirTexto(`Embora o <span>Instagram</span> ocupe a quarta posição de 
        redes sociais com maior número de usuários no mundo, ela é a rede social 
        que as pessoas mais gostam, seguida do WhatsApp e Facebook.`)

}

redesFavoritasMundo();