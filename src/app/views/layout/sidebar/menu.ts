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
    label:'Ajouter fiche de paie',
    icon:'file-plus',
    link:'/AjouterFicheDePaie',
  },
  {
    label:'Fiche de paie',
    icon:'file',
    link:'/FicheDePaie',
  },
  {
    label:'Personnels',
    icon:'user',
    link:'/Personnels',
  }
];
