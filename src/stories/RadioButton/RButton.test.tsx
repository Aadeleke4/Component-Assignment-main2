import { render, fireEvent } from "@testing-library/react";
import RadioButton from "./RButton";
import "@testing-library/jest-dom"; 

describe("RadioButton", () => {
  it("renders correctly", () => {
    const { getByText } = render(<RadioButton label="Option 1" />);
    expect(getByText("Option 1")).toBeInTheDocument();
  });

  it("responds to clicks when not disabled", () => {
    const onChangeMock = jest.fn();
    const { getByLabelText } = render(
      <RadioButton label="Option 2" onChange={onChangeMock} />
    );

    const radioInput = getByLabelText("Option 2") as HTMLInputElement;
    fireEvent.click(radioInput);

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(radioInput.checked).toBe(true);
  });

  it("does not respond to clicks when disabled", () => {
    const onChangeMock = jest.fn();
    const { getByLabelText } = render(
      <RadioButton label="Option 3" onChange={onChangeMock} disabled />
    );

    const radioInput = getByLabelText("Option 3") as HTMLInputElement;
    fireEvent.click(radioInput);

    expect(onChangeMock).not.toHaveBeenCalled();
    expect(radioInput.checked).toBe(false);
  });
});
