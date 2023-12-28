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
        <Button variant="simple" size="sm" className="px-2">
          {displayType === "mobile" ? "Configuração" : <Settings />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-1 mt-2 w-44 bg-primary text-primary-foreground">
        <DropdownMenuLabel>Tema</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={selectedTheme === "light"}
          onCheckedChange={() => handleThemeChange("light")}
        >
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedTheme === "dark"}
          onCheckedChange={() => handleThemeChange("dark")}
        >
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
