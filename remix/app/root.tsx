import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import stylesUrl from "./app.css";
import { json, LinksFunction } from "@remix-run/node";
import PostList from "~/component/PostList";
import { fetchPosts } from "~/models/posts.server";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesUrl,
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header className="header">
          <h1 className="title">📋 Micro Status 2.0</h1>
          <nav className="navigation">
            <ul>
              <li>
                <Link to="/">Timeline</Link>
              </li>
              <li>
                <Link to="/compose">Compose</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
