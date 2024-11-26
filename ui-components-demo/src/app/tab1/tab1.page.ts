import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { AlbumCardComponent } from '../album-card/album-card.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, AlbumCardComponent],
})
export class Tab1Page {
  albums = [
    { title: 'Album 1', artist: 'Artist 1', coverUrl: 'url1', year: 2021 },
    { title: 'Album 2', artist: 'Artist 2', coverUrl: 'url2', year: 2022 },
    // Add more albums as needed
  ];

  constructor() {}
}