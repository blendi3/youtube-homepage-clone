import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import logo from "../assets/youtubeLogo.jpg";
import { Button } from "../components/Button";
import { useState } from "react";
import { useSidebarContext } from "../contexts/SidebarContext";

export const PageHeader = () => {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  const toggleSearch = () => {
    setShowFullWidthSearch((prevState) => !prevState);
  };

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <PageHeaderFirstSection hidden={showFullWidthSearch} />
      <form
        className={`gap-4 flex-grow justify-center items-center ${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        }`}
      >
        {showFullWidthSearch && (
          <Button
            onClick={() => setShowFullWidthSearch(false)}
            type="button"
            size="icon"
            className="flex-shrink-0 items-center"
          >
            <ArrowLeft />
          </Button>
        )}
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search..."
            className="rounded-l-full border border-secondary-border shadow-secondary 
            py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />
          <Button
            className="py-2 px-6 rounded-r-full border-secondary-border border
          border-l-0 flex-shrink-0"
          >
            <Search />
          </Button>
        </div>
        <div>
          <Button type="button" size="icon" className="flex-shrink-0">
            <Mic />
          </Button>
        </div>
      </form>
      <div
        className={`flex flex-shrink-0 md:gap-2 items-center ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={toggleSearch}
          size="icon"
          variant="ghost"
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden">
          <Mic />
        </Button>
        <Button size="icon" variant="ghost">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
};

type PageHeaderFirstSectionProps = {
  hidden?: boolean;
};

export const PageHeaderFirstSection = ({
  hidden = false,
}: PageHeaderFirstSectionProps) => {
  const { toggle } = useSidebarContext();

  return (
    <div
      className={`flex gap-4 items-center flex-shrink-0 ${
        hidden ? "hidden" : "flex"
      }`}
    >
      <Button onClick={toggle} variant="ghost" size="icon">
        <Menu />
      </Button>
      <a href="/">
        <img src={logo} className="h-14" />
      </a>
    </div>
  );
};
