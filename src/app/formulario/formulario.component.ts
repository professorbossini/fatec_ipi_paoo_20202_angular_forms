import { Component } from '@angular/core';
import { Pessoa } from '../model/pessoa';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

    pessoa: Pessoa = new Pessoa();

    salvar (pessoaForm){
      console.log(this.pessoa);
      /*const nome = pessoaForm.value.nome;
      const fone = pessoaForm.value.fone;
      const email = pessoaForm.value.email;
      const profissao = pessoaForm.value.profissao;
      console.log(`Nome: ${nome}, Fone: ${fone}, Email: ${email}, Profissao: ${profissao}`);*/
    }

    profissoes = [
      'Emgenheiro',
      'Professor',
      'Químico',
      'Zoólogo'
    ];
}
