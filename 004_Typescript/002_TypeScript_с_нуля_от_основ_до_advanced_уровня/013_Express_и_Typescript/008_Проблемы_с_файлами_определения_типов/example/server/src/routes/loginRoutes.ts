//src routes loginRoutes.ts

import { Router, Request, Response } from "express";

const router = Router();

router.get("/login", (req: Request, res: Response) => {
  res.send(`
  <form method="POST">
   <div>
   <label>Email</label>
   <input name="em"/>
</div>
 <div>
   <label>Password</label>
   <input name="pas" type="password"/>
</div>
<button>Submit</button>
   </form>
  `);
});

router.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body; // деструктурирую из тела запроса email, password

  if (email) {
    res.send(email.toUpperCase());
  } else res.send("You mast provide an email property");
});
export { router };
