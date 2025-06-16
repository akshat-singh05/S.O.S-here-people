
export interface UserInfo {
  name: string;
  feelings: string;
  concerns: string;
  supportType: string;
}

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'therapist';
  timestamp: Date;
}
