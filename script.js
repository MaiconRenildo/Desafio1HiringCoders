class Form{
  constructor(name,email){
    this.name=name;
    this.email=email
  }
}

function ResetForm(){
  document.getElementById('name').value=''
  document.getElementById('e-mail').value=''
}
function Envio(form){
  event.preventDefault()

  let storage=localStorage.getItem('dadosCadastro')
  let name=document.getElementById('name').value
  let email=document.getElementById('e-mail').value

  if(name.trim()=='' || email.trim()==''){
    console.log('vazio')
  }else{
    let dados=new Form(name,email)
    if(storage==null){
      let objeto=[]
      objeto.push(dados)
      localStorage.setItem('dadosCadastro',JSON.stringify(objeto))
    }else{
      let array=JSON.parse(storage)
      array.push(dados)
      localStorage.setItem('dadosCadastro',JSON.stringify(array))
    }

    ResetForm()
  }
}