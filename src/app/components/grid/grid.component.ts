import { Component, Input, SimpleChanges } from '@angular/core';
import {Comic} from 'src/app/models/image.interface';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';



@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent {
  @Input()  comics:Comic[]=[];
  dataSourceImages = new MatTableDataSource<Comic>(this.comics);
  displayedColumns: string[] = [
    'id',
    'author',
    'detalles'
   
  ];
  constructor( private router: Router) {}
  ngOnInit(): void {

    this.dataSourceImages = new MatTableDataSource(this.comics);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['images'] && changes['images'].currentValue) {
      this.dataSourceImages = new MatTableDataSource(this.comics);
    }
  }

  abrirDetalles(x: any) {
    this.router.navigate(['/image', x.id]);
  }

}
