Const url= 'https://github.com/guilhermeonrails/api'

async function vizualizrInformaçoesGlobais() {
  const res = await fetch(url)
  const dados = await res.json()
  const PessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
  const PessoasNoMundo = (dados)


  const paragrafo = document.createElement('p')
  paragrafo.classList.add('graficos-container__texto')
  paragrafo.innerHTML=`Você sabia que o mundo tem ${dados.total_pessoas_mundo}de pessoas e que aproximadamente <span> ${pessoas_conectadas} bilhões <span/> estão conectadas em alguma rede social e pass
  am em média <span>
 ${dados.tempo_médio} </pan> horas conectadas.`
 

 const container = document.getElementById('graficos-container')
 container.appendChild(paragrafo)
 
}

vizualizrInformaçoesGlobais()
