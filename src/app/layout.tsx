import Navbar from "@/components/shared/Navbar";
import "styles/styles.css";
import { ReactNode } from "react";
import { AuthProvider } from "@/components/context/AuthContext";
import NotificationContener from "@/components/shared/NotificationContener";
import MessageContener from "@/components/shared/MessageContener";
import ChatBot from "@/components/shared/ChatBot";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="pl">
      <head>
        <title>Car Shop</title>
      </head>
      <body>
        <AuthProvider>
          <header>
            <h1>Car Shop</h1>
            <Navbar />
            <div id="user-info"></div>
          </header>

          <NotificationContener />
          <MessageContener />
          {/* <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" /> */}
          <div className="flex gap-7 justify-items-start align- flex-row">
            <ChatBot />
            <main>{children}</main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
