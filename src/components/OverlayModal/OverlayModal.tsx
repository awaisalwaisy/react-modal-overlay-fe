import { useClickOutside } from "@/hooks";
import { forwardRef } from "react";

const OverlayModal = forwardRef<HTMLDialogElement, OverlayModalProps>(
  function OverlayModal(_, ref) {
    const closeDialog = () => {
      if (ref && "current" in ref && ref.current) {
        ref.current.close();
      }
    };

    useClickOutside(ref as React.RefObject<HTMLDialogElement>, closeDialog);
    return (
      <section>
        <dialog ref={ref}>
          <div className="size-64">OverlayModal</div>
          <button onClick={closeDialog}>Close Dialog</button>
        </dialog>
      </section>
    );
  }
);

export default OverlayModal;
