import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment-timezone';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { GameCalendar } from '../../models/game_calendar';

type GameCalendarComponentProps = {
    gameCalendar: GameCalendar[];
}

const localizer = momentLocalizer(moment);

export function GameCalendarComponent({ gameCalendar }: GameCalendarComponentProps) {
    const events = gameCalendar.map(game => ({
      start: moment(game.date).startOf('day').local().format(),
      end: moment(game.date).startOf('day').local().format(),
      title: `${game.game_count} games`,
  }));

    return (
        <div style={{ height: '500px' }}>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
            />
        </div>
    );
}