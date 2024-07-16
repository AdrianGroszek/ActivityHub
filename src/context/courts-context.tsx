import { createContext, type ReactNode, useContext, useReducer } from 'react';
import { type CourtType, courts as initialCourts } from '../data/courts';

type StateType = {
	courts: CourtType[];
	filteredCourts: CourtType[];
	// filterCategory: 'Basketabll' | 'Football' | 'Tennis' | 'Volleyball' | 'All';
	filterCategory: string;
	selectedCourt: CourtType | null;
};

const initialState: StateType = {
	courts: initialCourts,
	filteredCourts: initialCourts,
	filterCategory: 'All',
	selectedCourt: null,
};

type CourtsContextType = StateType & {
	selectCourt: (court: CourtType) => void;
	filterCourts: (courtCategory: string) => void;
};

const CourtsContext = createContext<CourtsContextType | null>(null);

export function useCourts() {
	const context = useContext(CourtsContext);
	if (!context) {
		throw new Error('useCourts must be used with a CourtsProvider');
	}
	return context;
}

type CourtsContextProviderProps = {
	children: ReactNode;
};

type SelectCourtAction = {
	type: 'SELECT_COURT';
	court: CourtType;
};

type FilterCourtsCategoryAction = {
	type: 'FILTER_COURTS_CATEGORY';
	courtCategory: string;
};

type Action = SelectCourtAction | FilterCourtsCategoryAction;

function courtsReducer(state: StateType, action: Action): StateType {
	switch (action.type) {
		case 'SELECT_COURT': {
			const newCourt = action.court;
			return { ...state, selectedCourt: newCourt };
		}
		case 'FILTER_COURTS_CATEGORY': {
			if (action.courtCategory === 'All') {
				return {
					...state,
					filterCategory: action.courtCategory,
					filteredCourts: state.courts,
				};
			}
			return {
				...state,
				filterCategory: action.courtCategory,
				filteredCourts: state.courts.filter((court) => {
					return court.category === action.courtCategory;
				}),
			};
		}
		default:
			return state;
	}
}

export default function CourtsContextProvider({
	children,
}: CourtsContextProviderProps) {
	const [courtsState, dispatch] = useReducer(courtsReducer, initialState);

	const ctx: CourtsContextType = {
		courts: courtsState.courts,
		filteredCourts: courtsState.filteredCourts,
		filterCategory: courtsState.filterCategory,
		selectedCourt: courtsState.selectedCourt,
		selectCourt(court) {
			dispatch({ type: 'SELECT_COURT', court });
		},
		filterCourts(courtCategory) {
			dispatch({ type: 'FILTER_COURTS_CATEGORY', courtCategory });
		},
	};

	return (
		<CourtsContext.Provider value={ctx}>{children}</CourtsContext.Provider>
	);
}
