import ButtonDarkMode from "../assets/components/Fragments/ButtonDarkMode";
import SideNavBar from "../assets/components/Layouts/SideNavBar";
import { useCartDispatch } from "../assets/components/context/CartContext";

const Testing = () => {
  const useDispatch = useCartDispatch();

  return (
    <>
      <ButtonDarkMode />
      <SideNavBar />
    </>
  );
};

export default Testing;
