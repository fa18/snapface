import { Component, OnInit, Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
@Input() facesnap!: FaceSnap;

  valueButton!: String

  ngOnInit(){
    this.valueButton = "👍"
  }

  onLike(){    
    if(this.valueButton === "👍"){
      this.facesnap.likes++
      this.valueButton = "👎"
    }
    else{
      this.facesnap.likes--
      this.valueButton = "👍"
    }
    
  }

}
