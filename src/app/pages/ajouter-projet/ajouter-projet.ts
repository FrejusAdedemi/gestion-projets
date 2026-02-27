import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjetService } from '../../services/projet';

@Component({
  selector: 'app-ajouter-projet',
  imports: [FormsModule],
  templateUrl: './ajouter-projet.html',
  styleUrl: './ajouter-projet.scss',
})
export class AjouterProjet {
  nom: string = '';
  statut: string = '';

  constructor(
    private projetService: ProjetService,
    private router: Router
  ) {}

  soumettre(): void {
    if (this.nom && this.statut) {
      this.projetService.ajouterProjet(this.nom, this.statut);
      this.router.navigate(['/']);
    }
  }

}
