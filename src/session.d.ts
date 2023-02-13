import 'express-session';

declare module 'express-session' {
  export interface SessionData {
    loggedIn: boolean;
    user: any;
    isAdmin: boolean;
  }
}
