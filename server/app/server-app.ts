// https://dev.to/aligoren/developing-an-express-application-using-typescript-3b1

import express, { Application, Request, Response, NextFunction, RequestHandler, Router } from 'express';

export class ServerApp {
  private app: Application;

  constructor(
    public port: string = '3000',
    public staticPaths: string[],
    private middleWareList: RequestHandler[],
    private controllerList: Router[]
  ) {
    this.app = express(); // create a new express application instance
    this.port = process.env.PORT ? process.env.PORT : this.port;
    this.expressUseStatic(this.staticPaths);
    this.expressUse(this.middleWareList);
    this.expressUseRouters(this.controllerList);
  }

  private expressUseStatic(paths: string[]) {
    paths.forEach(path => {
      this.app.use(express.static(path));
    });
  }

  private expressUseRouters(routers: Router[]) {
    routers.forEach(router => {
      this.app.use('/', router);
    });
  }

  private expressUse(requestHandlers: RequestHandler[]) {
    requestHandlers.forEach(requestHandler => {
      this.app.use(requestHandler);
    });
  }

  public beginListening() {
    this.app.listen(this.port, () => {
      console.log('********************************************************************************');
      console.log('Node Express server for ' + this.app.name + ' listening on port: ' + this.port);
    })
  }
}