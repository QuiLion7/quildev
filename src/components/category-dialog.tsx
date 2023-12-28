import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

export type Category = {
  name: string;
  skills: {
    name: string;
    iconPath: string;
    documentationUrl: string;
    isFavorite: boolean;
  }[];
};

type CategoryDialogProps = {
  category: Category;
};

export function CategoryDialog({ category }: CategoryDialogProps) {
  return (
    <Dialog>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{category.name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {category.skills.map((skill, skillIndex) => (
            <h1 key={skillIndex}>{skill.name}</h1>
          ))}
        </div>
        <DialogFooter>
          <Button type="submit">Fechar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
