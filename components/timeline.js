import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import {Events} from '../lib/events'

function showEvent(evnt) {
    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>{evnt.name} @ {evnt.time}</TimelineContent>
        </TimelineItem>
    );
}

export default function TimeLine() {
    return (
        <Timeline align="alternate">
            {Events.map(showEvent)}
        </Timeline>
    );
}
