import { render  , screen} from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";


// TO wrap up the test cases -
describe("Contact Us test cases" , ()=>{

    // it -> test -> both same 
   it("Should load Contact us component" , ()=>{

    // To render component into jsdom
    render(<ContactUs/>);

    const heading = screen.getByText("Contact Us");

    // Assertion
  expect(heading).toBeInTheDocument();
    
    });

   test("Should load the submit button" , ()=>{
    render(<ContactUs/>);

    const btn = screen.getByRole("button");

    // Assertion
    expect(btn).toBeInTheDocument();
   });

   test("Should load 2 input box" , ()=>{
    render(<ContactUs/>);

    // Quering
    const input = screen.getAllByRole("textbox");
    // console.log(input); // reactElement / jsx / oject / react-fiber node etc

    // Assertion
    expect(input.length).not.toBe(3)
   })
});

