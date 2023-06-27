import { Component, Input } from '@angular/core';
import { Film } from '../film.model';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
})
export class FilmComponent {
  @Input() film: Film | null = null;

  constructor(public filmService: FilmService) {}

  ngOnInit(): void {}
}
