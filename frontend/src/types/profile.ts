export interface Topic {
  id: string;
  name: string;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
}

export interface ProfileSection {
  id: string;
  type: 'bio' | 'topics' | 'posts';
  order: number;
}

export interface Theme {
  primary: string;
  secondary: string;
  background: string;
  text: string;
}

export interface Profile {
  bio: string;
  topics: Topic[];
  posts: Post[];
  sections: ProfileSection[];
  theme: Theme;
}