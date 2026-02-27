import { Injectable } from '@angular/core';

export interface Projet {
  id: number;
  nom: string;
  statut: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  private projets: Projet[] = [
    { id: 1, nom: 'Marketplace Angular', statut: 'En cours' },
    { id: 2, nom: 'API Gateway Node', statut: 'Terminé' },
    { id: 3, nom: 'Service Auth JWT', statut: 'En attente' }
  ];

  getTousProjets(): Projet[] {
    return this.projets;
  }

  getProjetById(id: number): Projet | undefined {
    return this.projets.find(p => p.id === id);
  }

  ajouterProjet(nom: string, statut: string): void {
    const nouveauId = this.projets.length + 1;
    this.projets.push({ id: nouveauId, nom, statut });
  }
}