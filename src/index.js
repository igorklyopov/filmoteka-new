import './sass/main.scss';
// import cardLibraryTpl from './templates/library-card-movie';
// import popularFilmsTpl from './templates/popular-films.hbs';
// import searchFilmsTpl from './templates/home-card-movie';
// import modalMovieInfo from './templates/modal-movie-content';
// import './js/modalCloseAction'
// import genres from './js/genres_ids.json'
// import themeSwitcher from './js/theme-switcher';
//===
// import MoviesApiService from './js/apiService';
import { refs } from './js/refs';
import './js/onSearch';
// import './js/toTopButton'
import './js/homeAndLibrarySwitch';
import { onHomePageLoad, onWeekBtnClick, onDayBtnClick, loadMorePopMovies} from './js/popMoviesLoadFunctions';

onHomePageLoad()

refs.weekBtn.addEventListener('click', onWeekBtnClick);
refs.dayBtn.addEventListener('click', onDayBtnClick);

const moviesLoadObserver = new IntersectionObserver(makeInfiniteScrolling, { threshold: 0 });
 
  function makeInfiniteScrolling ([entrie]) {
       if (!entrie.isIntersecting) {
         return;
       }
       loadMorePopMovies();
   };
   
   moviesLoadObserver.observe(refs.infiniteScrollingAnchor);
