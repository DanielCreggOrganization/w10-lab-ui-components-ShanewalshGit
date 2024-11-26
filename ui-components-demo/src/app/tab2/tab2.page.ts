import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { SongListComponent } from '../song-list/song-list.component';
import { SongDetailsModalComponent } from '../song-details-modal/song-details-modal.component';
import { addIcons } from 'ionicons';
import { play, add } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, SongListComponent, SongDetailsModalComponent],
})
export class Tab2Page {
  isModalOpen = false;
  songs = [
    { title: 'Song 1', artist: 'Artist 1', duration: '3:45', category: 'Rock' },
    { title: 'Song 2', artist: 'Artist 2', duration: '4:20', categogry: 'Pop' },
    // Add more songs as needed
  ];

  constructor() {
    addIcons({ play, add });
  }
}