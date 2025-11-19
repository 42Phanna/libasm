import { useState } from 'react';
import Navigation from './components/Navigation';
import Timeline from './components/Timeline';
import TimelineSelector from './components/TimelineSelector';
import EsportsMatches from './components/EsportsMatches';
import { timelines } from './data/timelines';
import './App.css';

function App() {
  const [activeView, setActiveView] = useState('timeline');
  const [selectedTimelineId, setSelectedTimelineId] = useState('carolingiens');

  const handleSelectTimeline = (timelineId) => {
    setSelectedTimelineId(timelineId);
  };

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  return (
    <div className="app">
      <Navigation activeView={activeView} onViewChange={handleViewChange} />

      {activeView === 'timeline' ? (
        <>
          <TimelineSelector
            timelines={timelines}
            selectedTimeline={selectedTimelineId}
            onSelectTimeline={handleSelectTimeline}
          />
          <Timeline timeline={timelines[selectedTimelineId]} />
        </>
      ) : (
        <EsportsMatches />
      )}
    </div>
  );
}

export default App;
