import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

export default async function Dashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/authetication");
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <h1>{session?.user?.name}</h1>
      <h1>{session?.user?.email}</h1>
    </div>
  );
}
