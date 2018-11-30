import { Request, Response, NextFunction, ErrorHandler, Router } from "express";
const router = Router();
const usersRoutes = require("./users/users.routes");
const apiPrefix = "/api";

const useAPIErrorHandlers = (router: Router) => {
  // Handle API 404
  router.use("/api/*", (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(404);
  });

  // Handle API 500
  router.use(
    (err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
      // If the error object doesn't exist
      if (!err) {
        return next();
      }

      // Log it
      console.error("something broke!", err);

      // Redirect to error page
      res.sendStatus(500);
    }
  );
};

// API routes go here
router.use(`${apiPrefix}/users`, usersRoutes);

// API error handlers (API routes must be registered before this!)
useAPIErrorHandlers(router);

export default router;
