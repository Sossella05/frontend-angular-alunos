import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlunosService } from '../alunos/alunos.service';
import { Aluno } from '../alunos/aluno.model';

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css'],
})
export class ListagemComponent implements OnInit {
  alunos: Aluno[] = [];

  constructor(private alunoService: AlunosService) {}

  ngOnInit(): void {
    this.carregarAlunos();
  }

  carregarAlunos(): void {
    this.alunoService.listarAlunos().subscribe((res: Aluno[]) => {
      this.alunos = res;
    });
  }
}
