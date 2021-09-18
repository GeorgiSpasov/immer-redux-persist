import {User} from 'models/User';

export interface Story {
  id: string;
  title: string;
  url: string;
  timestamp: number;
  score: number;
  authorId: string;
  user: User;
  dateRead?: number;
}
