import { MenuItem } from './menu.model';
export const MENU: MenuItem[] = [
  {
    label: 'Accueil',
    icon: 'home',
    link: '/dashboard'
  },
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
    label:'Personnels',
    icon:'user',
    link:'/Personnels',
  }
];
