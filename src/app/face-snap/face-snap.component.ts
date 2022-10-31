import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

  title!: String
  description!: String
  createdDate!: Date
  likes!: number
  imageUrl!: String
  valueButton!: String

  ngOnInit(){
    this.title = 'My first snap'
    this.description = 'this story of...'
    this.createdDate = new Date()
    this.likes = 10
    this.imageUrl = 'https://www.telerama.fr/sites/tr_master/files/styles/simplecrop1000/public/medias/2016/02/media_138546/deadpool-succes-monstre-pour-anti-heros-crado%2CM307246.jpg?itok=TWesMdhH'
    this.valueButton = "👍"
  }

  onLike(){    
    if(this.valueButton === "👍"){
      this.likes++
      this.valueButton = "👎"
    }
    else{
      this.likes--
      this.valueButton = "👍"
    }
    
  }

}
