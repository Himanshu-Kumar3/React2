import RestaurantMenu from "../RestaurantMenu";
import { render , screen , act, fireEvent } from "@testing-library/react";
import Mock_DATA from "../Mocks/ResMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=> Promise.resolve(Mock_DATA)
    })
})

it("should load the restaurant menu", async ()=>{
  await act(async ()=> render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
      <RestaurantMenu/>
      <Cart/>
    </Provider>
    </BrowserRouter>
    ))

// Screen should render or not
    const accordianHeading = screen.getByText("Pasta (6)")
    fireEvent.click(accordianHeading);

    const foodItems = screen.getAllByTestId("foodItems");
    expect(foodItems.length).toBe(6)


    // cart is render or not
    const cartHeader = screen.getByText("Cart- (0 items)")

    // add 1st item 

    const addBtns = screen.getAllByText("Add +")
    fireEvent.click(addBtns[0])

    
//   Add 2nd item
    const cartHeaderAfterClick = screen.getByText("Cart- (1 items)")
    expect(cartHeaderAfterClick).toBeInTheDocument();

     fireEvent.click(addBtns[1])
     expect(screen.getByText("Cart- (2 items)")).toBeInTheDocument();


    //  in  the cart -> 2 items -> since items is same as the itemList items - > it adds the items 6 + 2 = 8

    const cartPageItems = screen.getAllByTestId("foodItems");

    expect(cartPageItems.length).toBe(8);

    // clear cart buttn ->

    const clearCart = screen.getByRole('button' , {name:"Clear"});
    fireEvent.click(clearCart);

    const itemsAfterClear = screen.getAllByTestId("foodItems");
    expect(itemsAfterClear.length).toBe(6)

})