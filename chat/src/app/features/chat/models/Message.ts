export interface Message {
  id: number;
  author: {
    id: number;
    firstName: string;
    lastName: string;
    avatar: string;
  };
  modificationDate: string;
  content: string;
}
