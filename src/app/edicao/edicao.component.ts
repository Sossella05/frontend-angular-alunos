import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../alunos/aluno.model';
import { AlunosService } from '../alunos/alunos.service';

@Component({
  selector: 'app-edicao',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css'],
})
export class EdicaoComponent implements OnInit {
  aluno: Aluno = {
    id: 0,
    nome: '',
    idade: 0,
    curso: '',
    nota: 0,
    mediaNotas: 0,
    matriculado: false,
  };

  id: number = 0;
  options: boolean[] = [true, false];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunoService: AlunosService
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.alunoService.buscarAluno(this.id).subscribe((a: Aluno) => {
      this.aluno = a;
    });
  }

  salvar() {
    this.alunoService.atualizarAluno(this.id, this.aluno).subscribe(() => {
      alert('Aluno atualizado com sucesso!');
      this.router.navigate(['/']);
    });
  }
}
