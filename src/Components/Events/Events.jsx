import React, { Component } from "react";

import Header from "../Header/Header";
import Sidelist from "./Sidelist/Sidelist";
import Main from "./Main/Main";
import "./Events.scss";
import Circle from "./Circle/Circle";
class Events extends Component {
  componentWillMount() {
    window.scroll(0, 0)
  }
  constructor(props) {
    super(props);

    this.state = {
      eventIndex: 0,
      selectedEvent: "Tech Hunt",
      pdf:"https://yashshah2820.pythonanywhere.com/media/pdf/Tech_Hunt.pdf"
    };
  }
  updateEvent = (index, event,pdf) => {
    this.setState({
      eventIndex: index,
      selectedEvent: event,
      pdf:pdf
    });
  };

  render() {
    const { events, contacts } = this.props;
    return (
      <div>
        <Header />
        <div className="event">
          <div>
            <Circle index={this.state.eventIndex} />
          </div>
          <div>
            <Main
              events={events}
              index={this.state.eventIndex}
              title={this.state.selectedEvent}
              contacts={contacts}
              pdf={this.state.pdf}
            />
          </div>
          <div>
            <Sidelist
              events={events}
              updateEvent={this.updateEvent}
              index={this.state.eventIndex}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
