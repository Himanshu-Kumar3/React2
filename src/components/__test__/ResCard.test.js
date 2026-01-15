import { render , screen } from "@testing-library/react";
import ResCard, { withDiscountLabel } from "../ResCard";
import MOCK_DATA from "../../components/Mocks/resCardMocks.json";
import "@testing-library/jest-dom"
it("Should render Restaurant Card with props data" , ()=>{

    render(<ResCard resData = {MOCK_DATA}/>);

    const name = screen.getByText("Theobroma");

    expect(name).toBeInTheDocument();
});

it("Should render Restaurant Card with Discounted label HOC" , ()=>{
    const DiscountLabelRestaurant = withDiscountLabel(ResCard);
    render(<DiscountLabelRestaurant resData={MOCK_DATA}/>)

    const withDiscount = screen.getByText("50% OFF");

    expect(withDiscount).toBeInTheDocument();

})