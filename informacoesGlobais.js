Const url= 'https://github.com/guilhermeonrails/api'

async function vizualizrInformaçoesGlobais() {
  const res = await fetch(url)
  const dados = await res.json()
  console.log(dados);
}

vizualizrInformaçoesGlobais()
