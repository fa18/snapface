import { Component, OnInit, Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
@Input() facesnap!: FaceSnap;

  valueButton!: String

  constructor(private faceSnapsService: FaceSnapsService){

  }

  ngOnInit(){
    this.valueButton = "👍"
  }

  onLike(){    
    if(this.valueButton === "👍"){
      this.faceSnapsService.addLikeFor(this.facesnap.id)
      this.valueButton = "👎"
    }
    else{
      this.faceSnapsService.unlikeFor(this.facesnap.id)
      this.valueButton = "👍"
    }
    
  }

}
