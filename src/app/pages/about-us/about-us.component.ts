import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent {
  teamMembers = [
    {
      name: 'Ahmed Kassem',
      title: 'Full Stack .Net Developer',
      image: '../../../assets/teamMember/Ahmed Kassem.jpeg',
      gmail:
        "mailto://ahmedkasem878@gmail.com?subject=Feedback%20on%20your%20website&body=Hi%20there%2C%0D%0A%0D%0AI%20wanted%20to%20give%20you%20some%20feedback%20on%20your%20website.%20Overall%2C%20I%20think%20it's%20great%2C%20but%20I%20noticed%20a%20few%20things%20that%20could%20be%20improved.%20Here%20are%20my%20suggestions...",
    },
    {
      name: 'El-Saeed Shosha',
      title: 'Full Stack .Net Developer',
      image: '../../../assets/teamMember/Saeed.png',
      gmail:
        "mailto://saeedshosha661@gmail.com?subject=Feedback%20on%20your%20website&body=Hi%20there%2C%0D%0A%0D%0AI%20wanted%20to%20give%20you%20some%20feedback%20on%20your%20website.%20Overall%2C%20I%20think%20it's%20great%2C%20but%20I%20noticed%20a%20few%20things%20that%20could%20be%20improved.%20Here%20are%20my%20suggestions...",
    },
    {
      name: 'Habiba Sharf',
      title: 'Full Stack .Net Developer',
      image: '../../../assets/teamMember/Habiba Sharf.jpg',
      gmail:
        "mailto://habibasharf26@gmail.com?subject=Feedback%20on%20your%20website&body=Hi%20there%2C%0D%0A%0D%0AI%20wanted%20to%20give%20you%20some%20feedback%20on%20your%20website.%20Overall%2C%20I%20think%20it's%20great%2C%20but%20I%20noticed%20a%20few%20things%20that%20could%20be%20improved.%20Here%20are%20my%20suggestions...",
    },
    {
      name: 'Sara Osama',
      title: 'Full Stack .Net Developer',
      image: '../../../assets/teamMember/Sara Osama.jpeg',
      gmail:
        "mailto://saraosama1101@gmail.com?subject=Feedback%20on%20your%20website&body=Hi%20there%2C%0D%0A%0D%0AI%20wanted%20to%20give%20you%20some%20feedback%20on%20your%20website.%20Overall%2C%20I%20think%20it's%20great%2C%20but%20I%20noticed%20a%20few%20things%20that%20could%20be%20improved.%20Here%20are%20my%20suggestions...",
    },
    {
      name: 'Merna EL-Hadad',
      title: 'Full Stack .Net Developer',
      image: '../../../assets/teamMember/Merna.jpeg',
      gmail:
        "mailto://Mernaelhadad177@gmail.com?subject=Feedback%20on%20your%20website&body=Hi%20there%2C%0D%0A%0D%0AI%20wanted%20to%20give%20you%20some%20feedback%20on%20your%20website.%20Overall%2C%20I%20think%20it's%20great%2C%20but%20I%20noticed%20a%20few%20things%20that%20could%20be%20improved.%20Here%20are%20my%20suggestions...",
    },
  ];
}
