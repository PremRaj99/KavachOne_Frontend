import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

export default function Header() {
  const Nav_Link = [
    {
      title: "Solutions",
      link: "/solutions",
    },
    {
      title: "Platform",
      link: "/platform",
    },
    {
      title: "Success Stories",
      link: "/success-stories",
    },
    {
      title: "Resources",
      link: "/resources",
    },
  ];
  return (
    <>
      <div className="lg:hidden block sticky top-0 z-30 bg-white">
        <MobileHeader NavLink={Nav_Link} />
      </div>
      <div className="lg:block hidden sticky top-0 z-30 bg-white">
        <DesktopHeader NavLink={Nav_Link} />
      </div>
    </>
  );
}
