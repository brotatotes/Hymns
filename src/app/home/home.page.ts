import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';

const BLACKBOOK = "Songs_&_Hymns_Of_Life";
const REDBOOK = "Songs-for-our-Generation_2015";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  private currentBook: string;
  private pageImagePath: string;

  constructor() {
    this.currentBook = BLACKBOOK;
    this.pageImagePath = this.GetImagePath(this.currentBook, 15);
  }

  private GetImagePath(book: string, page: number): string {
    return "assets/files/" + book + "/pages/" + book + String(page) + ".jpg";
  }

  private GetCurrentBookName(book: string) {
    return book.replace(/_/g, ' ').replace(/-/g, ' ');
  }
}
