import { cn } from "@/utils/functions";
import InputField from "../ui/InputField";
import PaymentFieldset from "./PaymentFieldset";

const DetailsForm = () => {
  return (
    <div
      className={cn(
        "flex-1 bg-light-100 rounded-lg p-6 sm:p-7 lg:p-12",
        "[&_legend]:header-text [&_legend]:tracking-[0.058125rem] [&_legend]:text-accent-900 [&_legend]:text-[0.8125rem] [&_legend]:mb-4"
      )}
    >
      <h1 className="header-text text-3xl sm:text-4xl tracking-[0.0625rem] text-dark-900 mb-8 sm:mb-10">
        Checkout
      </h1>
      <div className="flex flex-col gap-8">
        <fieldset>
          <legend>Billing Details</legend>
          <div className="inputfield-grid">
            <InputField
              label="Name"
              name="name"
              placeholder="Alexei Ward"
              registerOptions={{
                required: "This field is required",
              }}
            />
            <InputField
              type="email"
              label="Email Address"
              name="emailAddress"
              placeholder="alexei@mail.com"
              registerOptions={{
                required: "This field is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
            />
            <InputField
              label="Phone Number"
              name="phoneNumber"
              placeholder="+1 202-555-0136"
              registerOptions={{
                required: "This field is required",
                pattern: {
                  value:
                    /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i,
                  message: "Phone number is invalid",
                },
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>Shipping Info</legend>
          <div className="inputfield-grid">
            <InputField
              className="sm:col-span-2"
              label="Your Address"
              name="yourAddress"
              placeholder="1137 Williams Avenue"
              registerOptions={{
                required: "This field is required",
              }}
            />
            <InputField
              label="ZIP Code"
              name="zipCode"
              placeholder="10001"
              registerOptions={{
                required: "This field is required",
                pattern: {
                  value: /^\d{5}(?:[-\s]\d{4})?$/i,
                  message: "ZIP code is invalid",
                },
              }}
            />
            <InputField
              label="City"
              name="city"
              placeholder="New York"
              registerOptions={{
                required: "This field is required",
              }}
            />
            <InputField
              label="Country"
              name="country"
              placeholder="United States"
              registerOptions={{
                required: "This field is required",
              }}
            />
          </div>
        </fieldset>
        <PaymentFieldset />
      </div>
    </div>
  );
};

export default DetailsForm;
