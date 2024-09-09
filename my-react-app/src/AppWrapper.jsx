import { Outlet } from "react-router-dom";

export default function AppWrapper() {
  return (
    <main>
      <aside></aside>
      <section>
        <Outlet />
      </section>
    </main>
  );
}
