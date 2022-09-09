import { createContext, ReactNode, useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useRequest } from "../Request";

const AuthContext = createContext<IContextAuth>({} as IContextAuth);

interface IContextAuth {
  isAuth: boolean;
  isAuthLevel: boolean;
  login: (data: IDataLogin) => void;
  logout: () => void;
  checkAuth: (message?: string, route?: string) => void;
  checkLevelAuth: () => void;
}

interface IPropsAuth {
  children: ReactNode;
}

export interface IDataLogin {
  email: string;
  password: string;
}

export const AuthProvider = ({ children }: IPropsAuth) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isAuthLevel, setIsAuthLevel] = useState(false);

  const { userLogin, updateUser } = useRequest();
  const navigate = useNavigate();

  const login = (data: IDataLogin) => {
    const toastId = toast.loading("Procurado usuario");

    userLogin(data)
      .then(({ accessToken, user }) => {
        localStorage.setItem("@KenzieLivre:Token", accessToken);
        localStorage.setItem("@KenzieLivre:User", JSON.stringify(user));

        toast.success("usuario logado", {
          id: toastId,
        });

        setIsAuth(true);
        navigate("/home");
      })
      .catch((_) => {
        toast.error("usuario Invalido", {
          id: toastId,
        });
      });
  };

  const logout = () => {
    setIsAuth(false);
    setIsAuthLevel(false);

    localStorage.removeItem("@KenzieLivre:Token");
    localStorage.removeItem("@KenzieLivre:User");

    toast.success("Usuario desconectado");
  };

  const checkAuth = (message?: string, route: string = "/home") => {
    const user = JSON.parse(
      localStorage.getItem("@KenzieLivre:User") as string
    );

    if (user) {
      updateUser({ checkAuth: true }, user.id)
        .then((result) => {
          setIsAuth(true);
        })
        .catch((_) => {
          if (message) {
            toast.error(message);
          }

          navigate(route);
        });
    } else {
      if (message) {
        toast.error(message);
      }

      navigate(route);
    }
  };

  const checkLevelAuth = () => {
    const user = JSON.parse(
      localStorage.getItem("@KenzieLivre:User") as string
    );

    if (user) {
      if (user.auth === "Vendedor") {
        setIsAuthLevel(true);
      } else {
        console.log("não autorizei");

        setIsAuthLevel(false);
        navigate("/home");
      }
    } else {
      navigate("/home");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        isAuthLevel,
        login,
        logout,
        checkAuth,
        checkLevelAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
