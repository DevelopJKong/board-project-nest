import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
@Injectable()
export class LocalMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.loggedInUser = req.session.user || {};
    res.locals.isAdmin = req.session.isAdmin || false;
    res.locals.devDomain = 'http://localhost:5050';
    res.locals.domain = 'https://cafesmallhouse.onrender.com';
    next();
  }
}
