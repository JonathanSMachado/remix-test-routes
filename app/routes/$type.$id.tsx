import { useEffect } from "react";
import { Outlet } from "remix";

export default function Main() {
  useEffect(() => {
    fetch("related");
  }, []);

  return (
    <>
      <h1>Rota /$type/$id</h1>

      <Outlet />
    </>
  );
}
