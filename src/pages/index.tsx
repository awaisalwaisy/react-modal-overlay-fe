import { OverlayModal } from "@/components";
import { Button } from "@nextui-org/react";
import { useRef } from "react";

const Home = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleModal = () => {
    // setIsOpen(!isOpen);
    dialogRef.current?.showModal();
  };
  return (
    <main className="page">
      <h1 className="text-3xl font-bold mb-12">Modal wth an Overlay</h1>
      <div className="flex justify-center">
        <Button className="w-40" onClick={handleModal} color="secondary">
          Show offer
        </Button>
      </div>
      <OverlayModal ref={dialogRef} />
    </main>
  );
};

export default Home;
