import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
import 'hammerjs';

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
  private page: number;

  constructor() {
    this.currentBook = BLACKBOOK;
    this.UpdatePage(18);
  }

  private GetImagePath(book: string, page: number): string {
    return "assets/files/" + book + "/pages/" + book + String(page) + ".jpg";
  }

  private GetCurrentBookName(book: string) {
    return book.replace(/_/g, ' ').replace(/-/g, ' ');
  }

  private UpdatePage(page: number) { //TODO: check page boundaries.
    if (page < 1) {
      return;
    }
    this.page = page;
    this.pageImagePath = this.GetImagePath(this.currentBook, page);
  }

  private swipe(event): void {
    console.log(event);
    if (event.direction == 2) {
      this.UpdatePage(this.page + 1);
    } else if (event.direction == 4) {
      this.UpdatePage(this.page - 1);
    }
  }
}
