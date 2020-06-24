import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };
  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number().required().integer().label("Number In stock"),
    dailyRentalRate: Joi.number().required().label("Daily Rental Rate"),
  };

  componentDidMount() {
    const { match, history } = this.props;
    const genres = getGenres();
    this.setState({ genres });

    const movieId = match.params.id;
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    if (!movie) return history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      _id: movie.id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  doSubmit = () => {
    saveMovie(this.state.data);
    this.props.history.push("/movies");
    console.log("Form submitted");
  };

  render() {
    return (
      <React.Fragment>
        <h1>Movie Form</h1>
        <form onSubmit={this.hanldeSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "No In Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Submit")}
        </form>
      </React.Fragment>
    );
  }
}

export default MovieForm;
