import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';
import { ComicResponse ,ComicData,Comic } from 'src/app/models/image.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  
})
export class ListComponent implements OnInit {
  isLoading = true;
  comics: Comic[] = [];
  verGrid_: boolean = false;
  verCard_: boolean = true;
  constructor(private ImagesService: ImagesService, private router: Router) {}
  ngOnInit(): void {
     
    this.ImagesService.getAllComics().subscribe((data) => {
      this.comics = data.data.results;
      this.isLoading = false;
    });
  }

  verGrid() {
    this.verGrid_ = true;
    this.verCard_ = false;
  }
  verCard() {
    this.verGrid_ = false;
    this.verCard_ = true;
  }

  abrirDetalles(x: any) {
       this.router.navigate(['/image', x.id]);
  }
}
