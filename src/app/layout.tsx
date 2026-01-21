import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "Ali Hasnain | Portfolio",
  description: "Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        
        {/* Top Navbar */}
        <Navbar />

        {/* Page Content */}
        <main>
          {children}
        </main>

      </body>
    </html>
  );
}
