import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  facesnap!: FaceSnap
  facesnap2!: FaceSnap

  ngOnInit(){
    this.facesnap = new FaceSnap(
      'My first snap',
      'this story of...',
      new Date(),
      10,
      'https://www.telerama.fr/sites/tr_master/files/styles/simplecrop1000/public/medias/2016/02/media_138546/deadpool-succes-monstre-pour-anti-heros-crado%2CM307246.jpg?itok=TWesMdhH'
    )
    this.facesnap2 = new FaceSnap(
      'My second snap',
      'this story of...',
      new Date(),
      0,
      'https://imgsrc.cineserie.com/2022/07/1521125.jpg?ver=1'
    )
  }
}
