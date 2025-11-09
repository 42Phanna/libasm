import { useState } from 'react';
import Timeline from './components/Timeline';
import TimelineSelector from './components/TimelineSelector';
import { timelines } from './data/timelines';
import './App.css';

function App() {
  const [selectedTimelineId, setSelectedTimelineId] = useState('carolingiens');

  const handleSelectTimeline = (timelineId) => {
    setSelectedTimelineId(timelineId);
  };

  return (
    <div className="app">
      <TimelineSelector
        timelines={timelines}
        selectedTimeline={selectedTimelineId}
        onSelectTimeline={handleSelectTimeline}
      />
      <Timeline timeline={timelines[selectedTimelineId]} />
    </div>
  );
}

export default App;
