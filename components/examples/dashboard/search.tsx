import { Input } from "@/components/ui/input";

export function Search() {
  return (
    <div>
      <Input
        type="search"
        placeholder="Search..."
        className="hidden lg:block xl:w-[300px]"
      />
    </div>
  );
}
