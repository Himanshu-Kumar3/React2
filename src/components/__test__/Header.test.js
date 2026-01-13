import { render  , screen} from "@testing-library/react";
import Header from "../Header"
import { BrowserRouter } from "react-router";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";


test("Should render header with login button", ()=>{

    render(
    <BrowserRouter>
     <Provider store={appStore}>
        <Header/>
     </Provider>
    </BrowserRouter>);

    const loginButton =screen.getByRole("button" , {name:"login"});

    expect(loginButton).toBeInTheDocument();
})