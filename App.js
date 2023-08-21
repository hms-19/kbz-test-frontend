import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router";
import Router from "./routes";
import { useDispatch } from "react-redux";
import { setAllTournaments, tourInitialState } from "./features/tournaments/tournamentSlice";
import { setAllTransaction, transInitialState } from "./features/transaction/transactionSlice";
import { setAllUser, userInitialState } from "./features/users/userSlice";
import { paymentInitialState, setAllPaymentHistory } from "./features/payment_history/paymentSlice";

function App() {


  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()

    useEffect(() => {
      if(cookies.token){
        navigate(location.pathname)
      }
    },[])


    useEffect(() => {
        dispatch(setAllTournaments(tourInitialState))
        dispatch(setAllTransaction(transInitialState))
        dispatch(setAllUser(userInitialState))
        dispatch(setAllPaymentHistory(paymentInitialState))
    }, [location])

  return (
    <>
      <Router />
    </>
  );
}

export default App;
