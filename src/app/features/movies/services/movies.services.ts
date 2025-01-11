import { Injectable } from "@angular/core";
import { movie_links_horror } from "../data/movies.data";

@Injectable({
    providedIn: 'root'
})

export class MoviesService {
    constructor() {}

    get horror_movies_link() {
        return movie_links_horror;
    
    }
}