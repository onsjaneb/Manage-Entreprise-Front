import { MenuItem } from './menu.model';
export const MENU: MenuItem[] = [
  {
    label: 'Clients',
    icon: 'user',
    link: '/Clients',
  },
  {
    label: 'Ajouter Client',
    icon: 'user-plus',
    link: '/AjoutClient',
  },
  {
    label: 'Livreur',
    icon: 'truck',
    link: '/Livreur',
  },
  {
    label:'Caisse',
    icon:'codepen',
    link:'/Caisse',
  },
  {
    label:'Caisse Principale',
    icon:'codepen',
    link:'/Caisse_Principale',
  },
  {
    label:'Caisse Finale',
    icon:'codepen',
    link:'/CaisseFinale',
  },
  {
    label:'Ajouter reçu de paie',
    icon:'file-plus',
    link:'/AjouterReçurdepaie',
  },
  {
    label:'Reçu de paie',
    icon:'file',
    link:'/Reçudepaie',
  },
  {
    label:'Personnels',
    icon:'user',
    link:'/Personnels',
  }
];
