export class ClientModel {
  id: any;
  NomComplet: any;
  AdressePostale: any;
  NomAgentTel: any;
  Telephone: any;
  Sexe: any;
  caractere: any;
  NombreCommande: any;
  NombreRetour: any;
  TypeClient: any;
  Appele: any;
  DateNaissance: any;
  DateAppel: any;
  Proffession: any;
  Email: any;
  Commentaire: any;
}
export class LivreurModel {
  id: any;
  NomComplet: any;
  Telephone: any;
  AdressePostale: any;
  Type: any;
  Pourcentage: any;
  DateAjout: any;
}
export class UsersModel {
  id: any;
  NomUser: any;
  PrenomUser: any;
  Utilisateur: any;
  Login: any;
  Email: any;
  Telephone: any;
  DateAjout: any;
  Role: any;
}
export class RecuModel {
  id: any;
  Livreur: any;
  Totalrecu: any;
  Commission: any;
  PLivreur: any;
  PEntreprise: any;
  Partlivreur: any;
  PartEntreprise: any;
  RecuNet: any;
  DateAjout: any;
  Avance: any;
  Retour: any;
  Statut: any;
}
