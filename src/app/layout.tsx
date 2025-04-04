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
          <header className="w-full h-16 bg-gray-800 text-white flex flex-col items-start px-4 shadow-md rounded-[4px]">
            <h1>Car Shop</h1>
            <Navbar />
            <div id="user-info"></div>
          </header>
          <NotificationContener />
          <MessageContener />
          {/* <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" /> */}
          <div className="flex flex-1">
            {/* gap-7 justify-items-start align- flex-row */}
            <aside id="chat" className="w-1/5 bg-gray-100 h- p-4 border-r">
              <ChatBot />
            </aside>
            <main className="flex-1 p-2">{children}</main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
