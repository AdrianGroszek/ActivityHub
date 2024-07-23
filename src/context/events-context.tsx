import { createContext, type ReactNode, useContext, useReducer } from 'react';
import {
	type EventType,
	events as initialEvents,
	updateEvent,
} from '../data/events';

type StateType = {
	events: EventType[];
	filteredEvents: EventType[];
	searchedEvents: EventType[];
	eventFilterCategory: string;
	selectedEvent: EventType | null;
};

const initialState: StateType = {
	events: initialEvents,
	filteredEvents: initialEvents,
	searchedEvents: [],
	eventFilterCategory: 'All',
	selectedEvent: null,
};

type EventsContextType = StateType & {
	selectEvent: (event: EventType) => void;
	filterEvents: (eventCategory: string) => void;
	resetSelectedEvent: () => void;
	createEvent: (newEvent: EventType) => void;
	joinTheEvent: (userId: string) => void;
	searchEventByLocation: (locationSlug: string) => void;
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

type JoinTheEventAction = {
	type: 'JOIN_THE_EVENT';
	userId: string;
};

type SearchEventByLocationAction = {
	type: 'SEARCH_EVENT_BY_LOCATION';
	locationSlug: string;
};

type Action =
	| SelectEventAction
	| FilterEventsCategoryAction
	| ResetSelectedEventAction
	| CreateEventAction
	| JoinTheEventAction
	| SearchEventByLocationAction;

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
					searchedEvents: state.events,
				};
			}
			return {
				...state,
				eventFilterCategory: action.eventCategory,
				filteredEvents: state.events.filter((event) => {
					return event.category === action.eventCategory;
				}),
				searchedEvents: state.events.filter((event) => {
					return event.category === action.eventCategory;
				}),
			};
		}
		case 'RESET_SELECTED_EVENT': {
			return {
				...state,
				// Temporary solution (commenting "selectedEvent") for event not loading error after changing routing from courts to events when selecting event in the CourtDescription.tsx component
				// selectedEvent: null,
				eventFilterCategory: 'All',
				filteredEvents: state.events,
				searchedEvents: state.events,
			};
		}
		case 'CREATE_EVENT': {
			return {
				...state,
				events: [action.newEvent, ...state.events],
			};
		}
		case 'JOIN_THE_EVENT': {
			if (!state.selectedEvent) return state;
			const updatedEvent = {
				...state.selectedEvent,
				participants: [...state.selectedEvent.participants, action.userId],
			};
			updateEvent(state.selectedEvent.id, updatedEvent);

			return {
				...state,
				events: state.events.map((event) =>
					event.id === state.selectedEvent?.id ? updatedEvent : event
				),
				selectedEvent: updatedEvent,
			};
		}
		case 'SEARCH_EVENT_BY_LOCATION': {
			return {
				...state,
				searchedEvents: state.filteredEvents.filter((event) =>
					event.location.toLowerCase().includes(action.locationSlug)
				),
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
		searchedEvents: eventsState.searchedEvents,
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
		joinTheEvent(userId) {
			dispatch({ type: 'JOIN_THE_EVENT', userId });
		},
		searchEventByLocation(locationSlug) {
			dispatch({ type: 'SEARCH_EVENT_BY_LOCATION', locationSlug });
		},
	};

	return (
		<EventsContext.Provider value={ctx}>{children}</EventsContext.Provider>
	);
}
