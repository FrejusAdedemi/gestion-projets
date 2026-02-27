import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Projet, ProjetService } from '../../services/projet';

@Component({
  selector: 'app-detail-projet',
  imports: [RouterLink],
  templateUrl: './detail-projet.html',
  styleUrl: './detail-projet.scss',
})
export class DetailProjet  implements OnInit {
  projet: Projet | undefined;

  constructor(
    private route: ActivatedRoute,
    private projetService: ProjetService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projet = this.projetService.getProjetById(id);
  }

}
