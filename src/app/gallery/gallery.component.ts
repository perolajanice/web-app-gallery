import { Component, OnChanges, Input } from '@angular/core';
import { ImageService } from '../image/shared/image.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {
  title = 'Recent Photos'
  @Input() filterBy?: string = 'all'
  visableImages: any[] = [];

  constructor(private imageService: ImageService) {

    this.visableImages = this.imageService.getImages();
  }
ngOnChanges(){
  this.visableImages = this.imageService.getImages();
}

}
