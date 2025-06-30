import AuthButtons from "./_components/auth-buttons";
import NavLinks from "./_components/navlinks";

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      {/* Heading */}
      <h2 className="font-bold text-3xl">SocialApp</h2>

      {/* NavLinks */}
      <NavLinks />

      {/* Buttons */}
      <AuthButtons />
    </div>
  );
}
