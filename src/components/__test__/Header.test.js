import { fireEvent, render  , screen} from "@testing-library/react";
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

    const loginButton =screen.getByRole("button" , {name:"Login"});

    expect(loginButton).toBeInTheDocument();
})


it("Should render the header with cart" , ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )

    // const cart = screen.getByText("Cart- (0 items)"); // Or

    const cart = screen.getByText(/Cart/);  // this is rejex

    // Assertion
    expect(cart).toBeInTheDocument();
})

test("Should change to Logout when click to Login button ", ()=>{

    render(
    <BrowserRouter>
     <Provider store={appStore}>
        <Header/>
     </Provider>
    </BrowserRouter>);

    const loginButton =screen.getByRole("button" , {name:"Login"});
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button" , {name: "Logout"})

    expect(logoutButton).toBeInTheDocument();
})