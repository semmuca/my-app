import React from "react";
import Counter from "../Counter";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


test("header renders with the correct name", () => {
    const { getByTestId} = render(<Counter/>);
    const headerEl = getByTestId("header")
    expect(headerEl.textContent).toBe("My Counter")

});

test("counter initially starts with text 0", () => {
    const { getByTestId} = render(<Counter/>);
    const counterEl = getByTestId("counter")
    expect(counterEl.textContent).toBe("0")

});


test("input initially starts correctly", () => {
        const { getByTestId} = render(<Counter/>);
        const inputEl = getByTestId("input")
        expect(inputEl).toHaveDisplayValue("1")
});

test("add button renders with +", () => {
    const { getByTestId} = render(<Counter/>);
    const addBtn = getByTestId("add-btn")
    expect(addBtn.textContent).toBe("+")
});

test("subtract button renders with -", () => {
    const { getByTestId} = render(<Counter/>);
    const subtractBtn = getByTestId("subtract-btn")
    expect(subtractBtn.textContent).toBe("-")
});


test("changing value of the input works correctly", () => {
    const { getByTestId} = render(<Counter/>);
    const inputEl = getByTestId("input")
    expect(inputEl).toHaveDisplayValue("1")
    
    fireEvent.change(inputEl,{
        target:{
            value:"5"
        }
        
    });
    expect(inputEl).toHaveDisplayValue("5")
    fireEvent.change(inputEl,{
        target:{
            value:"5"
        }
        
    });
    expect(inputEl).toHaveDisplayValue("5")
});

test("clicking the plus button add 1 to counter", () => {
    const { getByTestId} = render(<Counter/>);
    const addBtn = getByTestId("add-btn")
    const counterEl = getByTestId("counter")
    
    expect(counterEl.textContent).toBe("0")
    fireEvent.click(addBtn);
 expect(counterEl.textContent).toBe("1")
})
test("clicking the subtract button subtracts 1 from counter", () => {
    const { getByTestId} = render(<Counter/>);
    const subtractBtn = getByTestId("subtract-btn")
    const counterEl = getByTestId("counter")
    
    expect(counterEl.textContent).toBe("0")
    fireEvent.click(subtractBtn);
 expect(counterEl.textContent).toBe("-1")
})

test("changing the input element then clicking on add btn works correctly", () => {
    const { getByTestId} = render(<Counter/>);
    const addBtn = getByTestId("add-btn")
    const counterEl = getByTestId("counter")
    const inputEl = getByTestId("input")

    fireEvent.change(inputEl,{
        target:{
            value:"5"
        }
    })
    fireEvent.click(addBtn);
 expect(counterEl.textContent).toBe("5")
})

test("changing the input element then clicking on the subtract btn works correctly", () => {
    const { getByTestId} = render(<Counter/>);
    const subtractBtn = getByTestId("subtract-btn")
    const counterEl = getByTestId("counter")
    const inputEl = getByTestId("input")

    fireEvent.change(inputEl,{
        target:{
            value:"5"
        }
    })
    fireEvent.click(subtractBtn);
 expect(counterEl.textContent).toBe("-5")
})




   