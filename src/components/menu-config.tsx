import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Settings, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Cookies from "js-cookie";
import { cn } from "@/lib/utils";

interface MenuConfigProps {
  displayType: string;
}

export function MenuConfig({ displayType }: MenuConfigProps) {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedTheme, setSelectedTheme] = React.useState(theme);

  React.useEffect(() => {
    const savedTheme = Cookies.get("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      setSelectedTheme(savedTheme);
    }
  }, []);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    setSelectedTheme(newTheme);
    setOpen(false);
    Cookies.set("theme", newTheme);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="simple" size="sm" className="px-2 rounded-none">
          {displayType === "mobile" ? "Configuração" : <Settings />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side={displayType === "mobile" ? "bottom" : "top"}
        className={cn(
          "bg-popover text-foreground",
          displayType === "mobile"
            ? "ml-[1.5rem] mt-1 w-[252px]"
            : "mr-16 mt-4 w-52 ",
        )}
      >
        <DropdownMenuLabel>Tema</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={selectedTheme === "light"}
          onCheckedChange={() => handleThemeChange("light")}
          className={selectedTheme === "light" ? "bg-background" : ""}
        >
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedTheme === "dark"}
          onCheckedChange={() => handleThemeChange("dark")}
          className={selectedTheme === "dark" ? "bg-background" : ""}
        >
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
