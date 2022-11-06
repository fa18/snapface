import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {

    private facesnaps: FaceSnap[] = [
        {
          id: 1,  
          title: 'My first snap',
          description: 'this story of...',
          createdDate: new Date(),
          likes: 10,
          imageUrl: 'https://www.telerama.fr/sites/tr_master/files/styles/simplecrop1000/public/medias/2016/02/media_138546/deadpool-succes-monstre-pour-anti-heros-crado%2CM307246.jpg?itok=TWesMdhH',
          location: 'Paris'
        },
        {
          id: 2,  
          title: 'My second snap',
          description: 'this story of...',
          createdDate: new Date(),
          likes: 0,
          imageUrl: 'https://imgsrc.cineserie.com/2022/07/1521125.jpg?ver=1'
        }
      ]

      getAllFaceSnaps(): FaceSnap[]{
          return this.facesnaps
      }

      getFaceSnapBy(snapFaceId: number):FaceSnap {
        const faceSnap = this.facesnaps.find( faceSnap => faceSnap.id === snapFaceId );
        if(!faceSnap){
            throw new Error('FaceSnap not found')
        }
        return faceSnap
      }

      

      addLikeFor(snapFaceId: number):void{
        const faceSnap = this.getFaceSnapBy(snapFaceId)
        faceSnap.likes++
      }

      unlikeFor(snapFaceId: number):void {
        const faceSnap = this.getFaceSnapBy(snapFaceId)
        faceSnap.likes--
      }
}