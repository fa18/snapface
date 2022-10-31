import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  facesnaps!: FaceSnap[]

  ngOnInit(){
    this.facesnaps = [
      {
        title: 'My first snap',
        description: 'this story of...',
        createdDate: new Date(),
        likes: 10,
        imageUrl: 'https://www.telerama.fr/sites/tr_master/files/styles/simplecrop1000/public/medias/2016/02/media_138546/deadpool-succes-monstre-pour-anti-heros-crado%2CM307246.jpg?itok=TWesMdhH',
        location: 'Paris'
      },
      {
        title: 'My second snap',
        description: 'this story of...',
        createdDate: new Date(),
        likes: 0,
        imageUrl: 'https://imgsrc.cineserie.com/2022/07/1521125.jpg?ver=1'
      }
    ]
  }
}
