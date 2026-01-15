import { render , screen , act, fireEvent} from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../Mocks/ResListMockdata.json"
import { BrowserRouter, data } from "react-router-dom";
import "@testing-library/jest-dom";



// To handle fetch()=> In my code it is automagically handled because i am using jest-fixed-jsdom but in manual
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : ()=>Promise.resolve(MOCK_DATA)
                });
})

describe("Body component test cases " ,()=>{

    // Some functions :-
    beforeEach(()=>{
        // console.log("before each test case");
    })
    beforeAll(()=>{
        // console.log("calls before all the it / test case");
    })

    afterEach(()=>{
        // console.log("calls after each test cases");
    })

    afterAll(()=>{
        // console.log("calls after all the test case");
    })


    it("Should search resList for input pizza",async ()=>{

    // Whenever we are doing some async / state updates we need to wrap it inside the act function
    await act( async ()=>  render(
    <BrowserRouter><Body /> </BrowserRouter>) );


    // Before clicking into the search btn and putting something in input value
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(20)

    const searchBtn = screen.getByRole("button" ,{name:"Search"});
    // expect(searchBtn).toBeInTheDocument();
    // to input something in search input box -> putting is an event
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput , {target:{value:"pizza"}});
    fireEvent.click(searchBtn);
    
    const cardsAfterSearch =screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(2);


});

it("Should Filter the  top rated restaurant" , async ()=>{
    await act(async()=> render(<BrowserRouter><Body/></BrowserRouter>));
    
    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(20)
    
    const topRatedButton = screen.getByRole("button" , {name: "Top Rated Restaurant"});
    fireEvent.click(topRatedButton);
    const cardsAfterFiler = screen.getAllByTestId("resCard");
    expect(cardsAfterFiler.length).toBe(18);

})
})