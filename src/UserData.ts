export interface UserData {
  // id: string;
  dashboardNextId: number;
  dashboards: Dashboard[];
}

interface BaseDashboard {
  id?: string;
  name: string; // e.g. "run log"
}

export interface DailyDashboard extends BaseDashboard {
  days?: DailyDashboardDay[];
  kind: 'daily';
}

type Mood = 'happy' | 'neutral' | 'sad';

interface DailyDashboardDay {
  date: Date;
  mood: Mood;
}

type AmountInputMethod = 'time_range' | 'amount';

export interface AmountDashboard extends BaseDashboard {
  days?: AmountDashboardDay[];
  unit?: string; // e.g. km or hours
  inputMethod?: AmountInputMethod;
  kind: 'amount';
}

export type Dashboard = DailyDashboard | AmountDashboard;

interface AmountDashboardDay {
  date: Date;
  amount: number;
}