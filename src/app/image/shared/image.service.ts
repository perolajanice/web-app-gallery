import { Injectable } from '@angular/core';

@Injectable()
export class ImageService{

  visableImages = [];
  getImages() {
    return this.visableImages = IMAGES.slice(0);
  }

getImage(id: number){
  return IMAGES.slice(0).find(image => image.id == id)
}

}

const IMAGES = [
  {"id": 1, "catergory": "books", "caption": "books books books books", "url": "assets/img/books.jpg"},
  {"id": 2, "catergory": "books", "caption": "books books books", "url": "assets/img/books1.jpg"},
  {"id": 3, "catergory": "books", "caption": "books books", "url": "assets/img/books2.jpg"},
  {"id": 4, "catergory": "books", "caption": "books", "url": "assets/img/books3.jpg"},
  {"id": 5, "catergory": "cocktails", "caption": "cocktails cocktails cocktails cocktails", "url": "assets/img/cocktails.jpg"},
  {"id": 6, "catergory": "cocktails", "caption": "cocktails cocktails cocktails", "url": "assets/img/cocktails1.jpg"},
  {"id": 7, "catergory": "cocktails", "caption": "cocktails cocktails", "url": "assets/img/cocktails2.jpg"},
  {"id": 8, "catergory": "cocktails", "caption": "cocktails", "url": "assets/img/cocktails3.jpg"},
  {"id": 9, "catergory": "beach", "caption": "beach beach beach beach", "url": "assets/img/beach.jpg"},
  {"id": 10, "catergory": "beach", "caption": "beach beach beach", "url": "assets/img/beach1.jpg"},
  {"id": 11, "catergory": "beach", "caption": "beach beach", "url": "assets/img/beach2.jpg"},
  {"id": 12, "catergory": "beach", "caption": "beach", "url": "assets/img/beach3.jpg"},
  {"id": 13, "catergory": "elephant", "caption": "elephant elephant elephant elephant", "url": "assets/img/elephant.jpg"},
  {"id": 14, "catergory": "elephant", "caption": "elephant elephant elephant", "url": "assets/img/elephant1.jpg"},
  {"id": 15, "catergory": "elephant", "caption": "elephant elephant", "url": "assets/img/elephant2.jpg"},
  {"id": 16, "catergory": "elephant", "caption": "elephant", "url": "assets/img/elephant3.jpg"},

]
