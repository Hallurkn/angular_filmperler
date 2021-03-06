import { ApiService } from '_shared/services/api.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MovieFilterService {

	private filteredMoviesSource = new BehaviorSubject([]);
	public filteredMovies = this.filteredMoviesSource.asObservable();
	private staticMoviesSource = new BehaviorSubject([]);
	public staticMovies = this.staticMoviesSource.asObservable();

	constructor(private data: ApiService) {
		this.data.movies.subscribe(movieData => {
			this.filteredMoviesSource.next(movieData);
			this.staticMoviesSource.next(movieData);
		});
	}

	updateFilteredMovies(movies: any) {
		this.filteredMoviesSource.next(movies);
	}
}
