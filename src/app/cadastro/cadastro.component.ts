import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AlunosService } from '../alunos/alunos.service';
import { Aluno } from '../alunos/aluno.model';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  aluno: Aluno = {
    id: 0,
    nome: '',
    idade: 0,
    curso: '',
    nota: 0,
    mediaNotas: 0,
    matriculado: false,
  };

  options: boolean[] = [true, false];

  constructor(private alunoService: AlunosService, private router: Router) {}

  salvar() {
    this.alunoService.cadastrarAluno(this.aluno).subscribe(() => {
      alert('Aluno cadastrado com sucesso!');
      this.router.navigate(['/']);
    });
  }
}
