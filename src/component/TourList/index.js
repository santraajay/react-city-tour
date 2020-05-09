import React, { Component } from "react";
import Tour from "../Tour";
import "./TourList.scss";
import { tourData } from "../../tourData";

export default class TourList extends Component {
  state = {
    tours: tourData,
  };

  removeTour = (id) => {
    const { tours } = this.state;
    const filterData = tours.filter((tour) => tour.id !== id);
    this.setState({
      tours: filterData,
    });
  };

  render() {
    const { tours } = this.state;
    return (
      <section className="tourList">
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
        ))}
      </section>
    );
  }
}
