import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { movieData } from '../../data/movieData';
import { seriesData } from '../../data/seriesData';
import MovieGridCard from '../MovieGridCard/MovieGridCard';
import SeriesGridCard from '../SeriesGridCard/SeriesGridCard';
import '../MovieGrid/MovieGrid.css'; // Reuse the same CSS
import './GenreMovieListPage.css';

const parseReleaseDate = (dateStr) => {
  if (!dateStr) return 0;
  const date = Date.parse(dateStr);
  if (!isNaN(date)) return date;
  const yearMatch = dateStr.match(/\d{4}/);
  if (yearMatch) return Date.parse(`01 Jan ${yearMatch[0]}`);
  return 0;
};

const GenreMovieListPage = () => {
  const { genreName } = useParams();

  const filteredMovies = movieData
    .filter(movie => movie.genres.some(g => g.toLowerCase() === genreName.toLowerCase()))
    .sort((a, b) => parseReleaseDate(b.releaseDate) - parseReleaseDate(a.releaseDate))
    .map(movie => ({ ...movie, type: 'movie' }));

  const filteredSeries = seriesData
    .filter(series => series.genres.some(g => g.toLowerCase() === genreName.toLowerCase()))
    .map(series => ({ ...series, type: 'series' }));

  const combinedList = [...filteredMovies, ...filteredSeries];

  return (
    <div className="genre-movie-list-page-container">
      <h1 className="genre-movie-list-title">
        {genreName.charAt(0).toUpperCase() + genreName.slice(1)}
      </h1>
      {combinedList.length > 0 ? (
        <div className="movie-grid-container">
          {combinedList.map((item) => (
            <Link to={`/${item.type}/${item.id}`} key={`${item.type}-${item.id}`}>
              {item.type === 'movie' ? (
                <MovieGridCard
                  image={item.poster}
                  title={item.title}
                />
              ) : (
                <SeriesGridCard
                  image={item.poster}
                  title={item.title}
                />
              )}
            </Link>
          ))}
        </div>
      ) : (
        <p>No movies or series found for this genre.</p>
      )}
    </div>
  );
};

export default GenreMovieListPage; 