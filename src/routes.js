import Login from "./componentes/Login";
import Listagem from "./src/Listagem";
import AdicionarVendedor from "./componentes/AdicionarVendedor"

function isUserLogged() {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
}

const routes = [
  {
    name: "/",
    component: Login,
  },
  {
    name: "/login",
    component: Login,
  },
 {
    name: "/upload",
    component: Listagem,
    onlyIf: { guard: isUserLogged, redirect: "/login" },
  },
  {
    name: "/listagem",
    component: Listagem,
  },
  {
    name: "/novo",
    component: AdicionarVendedor,
  },
];

export { routes };
