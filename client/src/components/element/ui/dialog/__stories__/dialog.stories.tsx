import "@/styles/global.css";
import { Dialog } from "@/components/element/ui/dialog/dialog";

export default {
  title: "Element/UI/Dialog",
  component: Dialog.Root,
};

export const Default = () => (
  <Dialog.Root>
    <Dialog.Trigger>Open Dialog</Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay />
      <Dialog.Content>
        <Dialog.Title>Title</Dialog.Title>
        <Dialog.Description>Description</Dialog.Description>
        <Dialog.RightTopClose />
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
