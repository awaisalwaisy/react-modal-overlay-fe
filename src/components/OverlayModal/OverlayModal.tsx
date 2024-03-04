import { useClickOutside } from "@/hooks";
import { Button } from "@nextui-org/react";
import { forwardRef } from "react";
import classes from "./overlay-modal.module.css";

const OverlayModal = forwardRef<HTMLDialogElement, OverlayModalProps>(
  function OverlayModal({ setAccepted }, ref) {
    const closeDialog = () => {
      if (ref && "current" in ref && ref.current) {
        ref.current.close();
      }
    };

    useClickOutside(ref as React.RefObject<HTMLDialogElement>, closeDialog);

    function acceptOffer() {
      setAccepted(true);
      closeDialog();
    }

    return (
      <section>
        <dialog ref={ref} className={classes.dialog}>
          <Button
            isIconOnly
            variant="light"
            aria-label="Close"
            onClick={closeDialog}
          >
            X
          </Button>

          <div className={classes.content}>
            <p>Click the button below to accept our amazing offer!</p>
            <Button onClick={acceptOffer}>Accept offer</Button>
          </div>
        </dialog>
      </section>
    );
  }
);

export default OverlayModal;
