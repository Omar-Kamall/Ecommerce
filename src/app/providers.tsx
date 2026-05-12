"use client";

import { Toaster } from "react-hot-toast";
import ReactQueryProvider from "../Context/TanStackQueryProvider";
import { CookiesProvider } from "react-cookie";
import ConnectionContext from "../Context/ConnectionContext";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CookiesProvider defaultSetOptions={{ path: "/" }}>
            <ReactQueryProvider>
                {children}
                <Toaster position="top-right" />
                <ConnectionContext />
            </ReactQueryProvider>
        </CookiesProvider>
    );
}