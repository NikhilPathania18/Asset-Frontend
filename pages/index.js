import { Inter } from "next/font/google";
import SuperAdminForm from "./components/SuperAdminForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <SuperAdminForm />
    </>
  );
}
