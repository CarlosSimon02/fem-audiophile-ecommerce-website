"use client";
import useCartStore from "@/hooks/useCartStore";
import useModal from "@/hooks/useModal";
import { getCartCount } from "@/utils/functions";
import { FormFields } from "@/utils/types";
import Image from "next/image";
import { useMemo } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { CSSTransition } from "react-transition-group";
import Overlay from "../ui/Overlay";
import Portal from "../ui/Portal";
import DetailsForm from "./DetailsForm";
import OrderAcknowledgement from "./OrderAcknowledgement";
import Summary from "./Summary";

const Content = () => {
  const { isModalOpen, modalRef, handleOpenModal, handleCloseModal } =
    useModal("main-overlayed");
  const cartItems = useCartStore((state) => state.items);
  const cartCount = useMemo(() => getCartCount(cartItems), [cartItems]);
  const methods = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    handleOpenModal();
  };

  return (
    <>
      {cartCount ? (
        <FormProvider {...methods}>
          <form
            className="flex max-lg:flex-col gap-8 mt-6 sm:mt-14 lg:items-start"
            method="POST"
            onSubmit={methods.handleSubmit(onSubmit)}
            noValidate={true}
          >
            <DetailsForm />
            <Summary />
          </form>
        </FormProvider>
      ) : (
        <div className="h-full flex flex-col items-center justify-center gap-4 bg-light-100 rounded-lg p-12 text-center mt-6 sm:mt-14">
          <Image
            className="w-36 aspect-square rounded-lg opacity-55"
            src={"/assets/images/shared/desktop/shopping-basket.png"}
            width={300}
            height={300}
            alt={`image of shopping basket`}
          />
          <p>There is nothing to checkout</p>
        </div>
      )}
      <Portal parentElement="body">
        <CSSTransition
          in={isModalOpen}
          nodeRef={modalRef}
          timeout={300}
          classNames="dialog"
          unmountOnExit
        >
          <OrderAcknowledgement ref={modalRef} />
        </CSSTransition>
      </Portal>
      <Overlay
        isOpen={isModalOpen}
        parentElement=".main-overlayed"
        className="z-[19]"
      />
    </>
  );
};

export default Content;
