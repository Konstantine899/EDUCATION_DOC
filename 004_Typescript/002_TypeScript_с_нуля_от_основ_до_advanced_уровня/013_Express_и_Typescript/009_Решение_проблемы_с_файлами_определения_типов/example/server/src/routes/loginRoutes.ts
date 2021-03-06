//src routes loginRoutes.ts

import { Router, Request, Response } from "express";

//Расширяю стандартный interface Request дополняя его своими правилами
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.get("/login", (req: Request, res: Response) => {
  res.send(`
  <form method="POST">
   <div>
   <label>Email</label>
   <input name="email"/>
</div>
 <div>
   <label>Password</label>
   <input name="password" type="password"/>
</div>
<button>Submit</button>
   </form>
  `);
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body; // деструктурирую из тела запроса email, password

  email
    ? res.send(`Email: ${email.toUpperCase()}, Password: ${password}`)
    : res.send(`You mast provide an email`);
});
export { router };
