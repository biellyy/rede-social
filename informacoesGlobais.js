Const url= 'https://github.com/guilhermeonrails/api'

async function vizualizrInformaçoesGlobais() {
  const res = await fetch(url)
  const dados = await res.json()
  const PessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
  const PessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
  const horas = parseInt(dados.tempo_médio)
  const minutos = (dados.tempo_médio - horas) * 100


  const paragrafo = document.createElement('p')
  paragrafo.classList.add('graficos-container__texto')
  paragrafo.innerHTML=`Você sabia que o mundo tem ${dados.total_pessoas_mundo}de pessoas e que aproximadamente <span> ${pessoas_conectadas} bilhões <span/> estão conectadas em alguma rede social e pass
  am em média <span>${horas} horas</pan> e  ${minutos} minutos conectadas.`
 

 const container = document.getElementById('graficos-container')
 container.appendChild(paragrafo)
 
}

vizualizrInformaçoesGlobais()
