import { useState } from "react";
import { useFormContext } from "react-hook-form";
import InputField from "../ui/InputField";
import Radio from "../ui/Radio";
import { CODIcon } from "../ui/SVGs";

const PaymentFieldset = () => {
  const [paymentMethod, setPaymentMethod] = useState("e-Money");
  const { register } = useFormContext();

  const handlePaymentMethodChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <fieldset>
      <legend>Payment Details</legend>
      <div className="flex max-sm:flex-col gap-4 mb-8 [&>*]:flex-1">
        <p
          className={"font-bold text-dark-900 text-xs tracking-[-0.015625rem]"}
        >
          Payment Method
        </p>
        <div className="grid gap-4">
          <Radio
            label="e-Money"
            name="eMoney"
            groupName="paymentMethod"
            defaultChecked={true}
            onChange={handlePaymentMethodChange}
          />
          <Radio
            label="Cash on Delivery"
            name="cashOnDelivery"
            groupName="paymentMethod"
            onChange={handlePaymentMethodChange}
          />
        </div>
      </div>
      {paymentMethod === "e-Money" ? (
        <div className="inputfield-grid">
          <InputField
            label="e-Money Number"
            name="eMoneyNumber"
            placeholder="238521993"
            registerOptions={{
              required: "This field is required",
            }}
          />
          <InputField
            label="e-Money PIN"
            name="eMoneyPIN"
            placeholder="6891"
            registerOptions={{
              required: "This field is required",
            }}
          />
        </div>
      ) : (
        <div className="flex gap-x-8 gap-y-4 items-center max-sm:flex-col max-sm:text-center">
          <CODIcon className="w-12 h-12 flex-shrink-0" />
          <p>
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </p>
        </div>
      )}
    </fieldset>
  );
};

export default PaymentFieldset;
