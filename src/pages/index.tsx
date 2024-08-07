import { useTelegram } from "@/lib";
import Link from "next/link";
import React from "react";

export default function Home() {
  const {user, webApp} = useTelegram()
  return (
    <div>
        <div>
        {user ? (
          <div>
            <h1>Welcome {user?.username}</h1>
            User data:
            <pre>{JSON.stringify(user, null, 2)}</pre>
            Eniter Web App data:
            <pre>{JSON.stringify(webApp, null, 2)}</pre>
          </div>
        ) : (
          <div>Make sure web app is opened from telegram client</div>
        )}
      </div>
      Hello World.{" "}
      <Link href="/about">
        About
      </Link>
    </div>
  );
}
