import { createContext, type ReactNode, useContext, useReducer } from 'react';
import { type EventType, events as initialEvents } from '../data/events';

type StateType = {
	events: EventType[];
	filteredEvents: EventType[];
	eventFilterCategory: string;
	selectedEvent: EventType | null;
};

const initialState: StateType = {
	events: initialEvents,
	filteredEvents: initialEvents,
	eventFilterCategory: 'All',
	selectedEvent: null,
};

type EventsContextType = StateType & {
	selectEvent: (event: EventType) => void;
	filterEvents: (eventCategory: string) => void;
	resetSelectedEvent: () => void;
	createEvent: (newEvent: EventType) => void;
};

const EventsContext = createContext<EventsContextType | null>(null);

export function useEvents() {
	const context = useContext(EventsContext);
	if (!context) {
		throw new Error('useEvents must be used with a EventsProvider');
	}
	return context;
}

type EventsContextProviderProps = {
	children: ReactNode;
};

type SelectEventAction = {
	type: 'SELECT_EVENT';
	event: EventType;
};

type FilterEventsCategoryAction = {
	type: 'FILTER_EVENTS_CATEGORY';
	eventCategory: string;
};

type ResetSelectedEventAction = {
	type: 'RESET_SELECTED_EVENT';
};

type CreateEventAction = {
	type: 'CREATE_EVENT';
	newEvent: EventType;
};

type Action =
	| SelectEventAction
	| FilterEventsCategoryAction
	| ResetSelectedEventAction
	| CreateEventAction;

function eventsReducer(state: StateType, action: Action): StateType {
	switch (action.type) {
		case 'SELECT_EVENT': {
			const newEvent = action.event;
			return { ...state, selectedEvent: newEvent };
		}
		case 'FILTER_EVENTS_CATEGORY': {
			if (action.eventCategory === 'All') {
				return {
					...state,
					eventFilterCategory: action.eventCategory,
					filteredEvents: state.events,
				};
			}
			return {
				...state,
				eventFilterCategory: action.eventCategory,
				filteredEvents: state.events.filter((event) => {
					return event.category === action.eventCategory;
				}),
			};
		}
		case 'RESET_SELECTED_EVENT': {
			return {
				...state,
				selectedEvent: null,
				eventFilterCategory: 'All',
				filteredEvents: state.events,
			};
		}
		case 'CREATE_EVENT': {
			return {
				...state,
				events: [action.newEvent, ...state.events],
			};
		}
		default:
			return state;
	}
}

export default function EventsContextProvider({
	children,
}: EventsContextProviderProps) {
	const [eventsState, dispatch] = useReducer(eventsReducer, initialState);

	const ctx: EventsContextType = {
		events: eventsState.events,
		filteredEvents: eventsState.filteredEvents,
		eventFilterCategory: eventsState.eventFilterCategory,
		selectedEvent: eventsState.selectedEvent,
		selectEvent(event) {
			dispatch({ type: 'SELECT_EVENT', event });
		},
		filterEvents(eventCategory) {
			dispatch({ type: 'FILTER_EVENTS_CATEGORY', eventCategory });
		},
		resetSelectedEvent() {
			dispatch({ type: 'RESET_SELECTED_EVENT' });
		},
		createEvent(newEvent) {
			dispatch({ type: 'CREATE_EVENT', newEvent });
		},
	};

	return (
		<EventsContext.Provider value={ctx}>{children}</EventsContext.Provider>
	);
}
