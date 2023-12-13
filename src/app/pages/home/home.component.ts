import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake';
import { Noticia } from '../../data/noticias.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  noticias: Noticia[] = [];
  noticia1: Noticia = {
    title: '',
    id: '',
    photoCover: '',
    description: ''
  };

  constructor() {
    this.noticias = dataFake.filter(x => x.id != '1');
    this.noticia1 = dataFake[0];
  }

  ngOnInit(): void {
  }

}
