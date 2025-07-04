import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { ClinicForm } from "./components/ form";

export default function ClinicFormPage() {
  return (
    <Dialog open={true}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar clínica</DialogTitle>
          <DialogDescription>
            Adicione uma clínica para continuar
          </DialogDescription>
        </DialogHeader>

        <ClinicForm />
      </DialogContent>
    </Dialog>
  );
}
