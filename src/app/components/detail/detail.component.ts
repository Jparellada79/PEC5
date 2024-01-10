import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comic } from 'src/app/models/image.interface';
import { ImagesService } from 'src/app/services/images.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  private comicId: string | null;
  comic: Comic[] = [];
  isLoading:boolean=true;

  showDetails = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private ImagesService: ImagesService,
    private router: Router, 
   
  ) {
    this.comicId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  volver() {
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {
    if (this.comicId) {
      this.ImagesService.getComicById(this.comicId).subscribe((data) => {
        this.comic = data.data.results;
        this.isLoading = false;
      
      });
    }
  }
}
