import './App.css';
import Card from './components/card/card'
import Button from './components/button/button'


function App() {
  return (
    <>
    <h1>Basic React Quest</h1>
    <Card color={'green'}></Card>
    <Button></Button>
    </>
  );
}

export default App;


Resumo para subir arquivos no github
- git init (inicializa o repositprio do git vazio)
- git branch -M main (troca o nome do branch principal para main)
- git remote add origin + url (linka o repositorio do github com o local)
obs: para verificar se o link deu certo o comando é git remote -v
obs2: para ver o status dos arquivos o comando é git status 
- git add . (adiciona todos os arquivos)
