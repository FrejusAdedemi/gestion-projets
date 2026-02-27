import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Projet, ProjetService } from '../../services/projet';

@Component({
  selector: 'app-liste-projets',
  imports: [RouterLink],
  templateUrl: './liste-projets.html',
  styleUrl: './liste-projets.scss',
})
export class ListeProjets implements OnInit {
  projets: Projet[] = [];

  constructor(private projetService: ProjetService) {}

  ngOnInit(): void {
    this.projets = this.projetService.getTousProjets();
  }

}
