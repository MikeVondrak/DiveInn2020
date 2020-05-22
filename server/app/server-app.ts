// https://dev.to/aligoren/developing-an-express-application-using-typescript-3b1

import express, { Application, Request, Response, NextFunction, RequestHandler, Router } from 'express';

export class ServerApp {
  private app: Application;

  constructor(
    public port: string = '3000',
    public staticPathList: string[],
    private middleWareList: RequestHandler[],
    private controllerList: Router[]
  ) {
    this.app = express(); // create a new express application instance
    this.port = process.env.PORT ? process.env.PORT : this.port; // process.env.PORT set by Heroku

    // first to match route takes precedence,  static > middleware > controllers
    // '/' defaults to 
    this.useStatic(this.staticPathList);
    this.useMiddleware(this.middleWareList);
    this.useControllers(this.controllerList);
  }

  /**
   * Load app with paths from which to serve static files
   * @param paths array of paths to static file locations
   *  NOTE: express.static makes the files in the path passed in accessible from the root URL (e.g. localhost:3000/<file name>)
   *  Since we load the static paths first, calls to the root path (localhost:3000/) will end up loading /dist/dive-inn/index.html
   *  Can add a mount point to serve from a different path (e.g. '/static', doesn't have to exist) but causes problems w/Angular,
   *    may need to build with --base-href flag and/or set base href in index.html
   */
  private useStatic(paths: string[]) {
    paths.forEach(path => {
      this.app.use(express.static(path));
      //this.app.use('/static', express.static(path)); // specify a mount path
    });
  }

  /**
   * Load middleware for processing requests
   * @param requestHandlers array of middleware RequestHandlers
   */
  private useMiddleware(requestHandlers: RequestHandler[]) {
    requestHandlers.forEach(requestHandler => {
      this.app.use(requestHandler);
    });
  }

  /**
   * Load controllers to handle API routes
   * @param routers array of Routers
   */
  private useControllers(routers: Router[]) {
    routers.forEach(router => {
      this.app.use('*', router);
    });
  }

  /**
   * Start Express app
   */
  public beginListening() {
    this.app.listen(this.port, () => {
      console.log('********************************************************************************');
      console.log('Node Express server for "' + this.app.name + '" listening on port: ' + this.port + '\n');
    })
  }

  public connectDb() {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'DiveMaster',
      password: 'D1v3M4st3r!!',
      database: 'dive_inn_test_db'
    })

    connection.connect();

    connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
      console.log('connectDb err: ' + err + ' rows: ' + rows + ' fields: ' + fields);
      if (err) throw err

      console.log('The solution is: ', rows[0].solution);
    });

    connection.end();
  }
}