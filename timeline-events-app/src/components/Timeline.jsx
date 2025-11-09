import EventCard from './EventCard';
import './Timeline.css';

const Timeline = ({ timeline }) => {
  return (
    <div className="timeline-container">
      <div className="timeline-header">
        <h1>{timeline.title}</h1>
        <p className="timeline-description">{timeline.description}</p>
      </div>

      <div className="timeline">
        <div className="timeline-line"></div>
        {timeline.events.map((event, index) => (
          <div
            key={event.id}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-marker" style={{ backgroundColor: event.color }}>
              <div className="marker-inner"></div>
            </div>
            <div className="timeline-content">
              <EventCard event={event} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
