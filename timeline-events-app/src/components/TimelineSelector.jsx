import './TimelineSelector.css';

const TimelineSelector = ({ timelines, selectedTimeline, onSelectTimeline }) => {
  return (
    <div className="timeline-selector">
      <label htmlFor="timeline-select" className="selector-label">
        Choisissez une frise chronologique :
      </label>
      <select
        id="timeline-select"
        className="timeline-select"
        value={selectedTimeline}
        onChange={(e) => onSelectTimeline(e.target.value)}
      >
        {Object.entries(timelines).map(([key, timeline]) => (
          <option key={key} value={key}>
            {timeline.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimelineSelector;
