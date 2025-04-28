document.getElementById('form-livro').addEventListener('submit', async (event) => {
  event.preventDefault()

  const form = event.target
  const data = {
    titulo: form.titulo.value,
    avaliacao: parseFloat(form.avaliacao.value),
    autor: form.autor.value,
    data_leitura: form.dataLeitura.value,     
    descricao: form.descricao.value         
  }

  try {
    const response = await fetch('mongodb+srv://tiagomuniz220:Fatec6055449@cluster0.omd6d.mongodb.net/biblioteca?retryWrites=true&w=majority', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const result = await response.json()
    if (response.ok) {
      document.getElementById('resultado').innerText = 'Livro salvo com sucesso!'
    } else {
      document.getElementById('resultado').innerText = `Erro: ${result.message}`
    }
  } catch (err) {
    document.getElementById('resultado').innerText = 'Erro ao enviar dados!'
    console.error(err)
  }
})


