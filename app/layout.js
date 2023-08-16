import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";

import { SiteProvider } from "./context/site-context";
import { Provider } from "./components/Provider";

export const metadata = {
  title: "Mohammad Taghinasab | Web Developer",
  description: "Mohammad Taghinasab Portfolio Website.",
  keywords: "mohammad taghinasab, web developer, front-end, back-end programing, محمد تقی نسب",
  icons: {
    icon: "/pictures/icon.png"
  }
};

export default function RootLayout({ children }) {

  return (
    <SiteProvider>
      <html lang="en">
        <Provider>
          {children}
        </Provider>
      </html>
    </SiteProvider>
  );
}
