import express, {Request, Response} from "express";

/*CRIANDO A INSTANCIA DO SERVIDOR*/
const app = express();
/*A API SUPORTA RECEBIMENTO E ENVIO VIAS JSON*/
app.use(express.json());

const resourceHello = (req: Request, res: Response) => {
  console.log(req.ip);
  res.send({message: "Hello World"});
}
//CHAMADA DO TIPO GET PARA O RECURSO /HELLO
app.get("/hello", resourceHello);

const PORT = 3000;
//ESCUTAR CHAMADAS NO MEU SERVIDOR
app.listen(PORT)


