import { useState } from 'react';
import './EventCard.css';

const EventCard = ({ event }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="event-card-container" onClick={handleClick}>
      <div className={`event-card ${isFlipped ? 'flipped' : ''}`}>
        {/* Face avant */}
        <div className="event-card-front" style={{ borderColor: event.color }}>
          <div className="event-date" style={{ backgroundColor: event.color }}>
            {event.date}
          </div>
          <div className="event-image-container">
            <img src={event.image} alt={event.title} className="event-image" />
          </div>
          <div className="event-title">
            <h3>{event.title}</h3>
            <p className="event-short-desc">{event.shortDescription}</p>
          </div>
          <div className="click-hint">Cliquer pour plus de détails</div>
        </div>

        {/* Face arrière */}
        <div className="event-card-back" style={{ backgroundColor: event.color }}>
          <div className="event-date-back">{event.date}</div>
          <h3 className="event-title-back">{event.title}</h3>
          <div className="event-description">
            <p>{event.fullDescription}</p>
          </div>
          <div className="click-hint">Cliquer pour revenir</div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
