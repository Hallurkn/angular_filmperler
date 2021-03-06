import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

const OMDB_URL = 'http://www.omdbapi.com/?apikey=17634977&i=';

@Injectable()
export class OMDBService {
	constructor(private _http: Http) { }

	private handleError(error: Response | any) {
		console.error('ApiService::handleError', error);
		return Observable.throw(error);
	}

	public getMovieData(id: string) {
		return this._http.get(OMDB_URL + id)
			.map((response: Response) => response.json())
			.catch(this.handleError);
	}
}
