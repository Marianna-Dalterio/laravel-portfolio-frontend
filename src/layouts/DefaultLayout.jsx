import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";

export default function DefaultLayout() {
  return (
    <>
      <AppHeader />

      <Outlet />

      <footer className="py-3 bg-light text-center border-top mt-4">
        <small className="text-muted">
          Progetto Portfolio - Laravel & React
        </small>
      </footer>
    </>
  );
}
