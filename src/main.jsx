import ReactDOM from "react-dom/client";
import "./index.css";
import { CLOSE_ICON, WIDGET_ICON } from "./assets.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SocketProvider from "./context/SocketContext.jsx";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import * as translations from "./translations/index.js";

import moment from "moment";
import "moment/dist/locale/pt";
import "moment/dist/locale/es";

import { createTheme, ThemeProvider } from "@mui/material";
import { UserContextProvider } from "./context/UserContext.jsx";
import { SnackContextProvider } from "./context/SnackContext.jsx";
import { WidgetContextProvider } from "./context/WidgetContext.jsx";

import App from "./App.jsx";
import Landing from "./pages/Landing.jsx";
import ChatView from "./pages/ChatView.jsx";
import ShowQr from "./pages/ShowQr.jsx";
import { createSessionId } from "./common/createSessionId.js";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },

  palette: {
    mode: "light",
    primary: { main: "#ffa35a", light: "#ffbb8a", dark: "#d18842" },
    secondary: { main: "#087e8b", light: "#2495a1", dark: "#005d65" },
    success: { main: "#40c545", light: "#66d06a", dark: "#2c8930" },
    warning: { main: "#ff7028", light: "#ff8c53", dark: "#b24e1c" },
    info: { main: "#2994fd", light: "#53a9fd", dark: "#1c67b1" },
    text: { primary: "#444444", secondary: "#888888", disabled: "#dddddd" },
    error: {
      main: "#c40f3c",
      light: "#cf3f63",
      dark: "#890a2a",
    },
  },
  typography: {
    fontFamily: ["var(--font-family)"].join(","),
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "5px", // Cambiar el border-radius,
            paddingRight: "0px",
            // height: 40,
            // "&.Mui-focused fieldset": {
            //   borderColor: "#02817a",
            // },
            // Cambiar el color del borde en el estado sin foco
            "& fieldset": {
              // border: "none",
              borderColor: "#d9e1ec !important",
            },
          },
          "& .MuiOutlinedInput-input": {
            // Cambiar el color del texto del input
            color: "#888888",
          },
        },
      },
    },
  },
});

// const root = ReactDOM.createRoot(document.getElementById("root"));

moment.locale(translations.lang);

i18next.init({
  interpolation: { escapeValue: false },
  lng: translations.lang,
  resources: {
    es: translations.es,
    en: translations.en,
    pt: translations.pt,
  },
});

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
    // errorElement: <ErrorElement />,
    children: [
      {
        path: "",
        element: <Landing />,
        index: true,
      },
      {
        path: "qr/:channel",
        element: <ShowQr />,
        index: true,
      },
      {
        path: "chat",
        element: <ChatView />,
        index: true,
      },
    ],
  },
]);

createSessionId();

class MessageWidget {
  constructor(position = "bottom-right") {
    this.position = this.getPosition(position);
    this.open = false;
    this.initialize();
    // this.injectStyles();
  }

  position = "";
  open = false;
  widgetContainer = null;

  getPosition(position) {
    const [vertical, horizontal] = position.split("-");
    return {
      [vertical]: "30px",
      [horizontal]: "30px",
    };
  }

  async initialize() {
    /**
     * Create and append a div element to the document body
     */
    const container = document.createElement("div");
    container.style.position = "fixed";
    Object.keys(this.position).forEach(
      (key) => (container.style[key] = this.position[key])
    );
    document.body.appendChild(container);

    /**
     * Create a button element and give it a class of button__container
     */
    const buttonContainer = document.createElement("button");
    buttonContainer.classList.add("button__container");

    /**
     * Create a span element for the widget icon, give it a class of `widget__icon`, and update its innerHTML property to an icon that would serve as the widget icon.
     */
    const widgetIconElement = document.createElement("span");
    widgetIconElement.innerHTML = WIDGET_ICON;

    widgetIconElement.classList.add("widget__icon");
    this.widgetIcon = widgetIconElement;

    /**
     * Create a span element for the close icon, give it a class of `widget__icon` and `widget__hidden` which would be removed whenever the widget is closed, and update its innerHTML property to an icon that would serve as the widget icon during that state.
     */
    const closeIconElement = document.createElement("span");
    closeIconElement.innerHTML = CLOSE_ICON;
    closeIconElement.classList.add("widget__icon", "widget__hidden");
    this.closeIcon = closeIconElement;

    /**
     * Append both icons created to the button element and add a `click` event listener on the button to toggle the widget open and close.
     */
    buttonContainer.appendChild(this.widgetIcon);
    buttonContainer.appendChild(this.closeIcon);
    buttonContainer.addEventListener("click", this.toggleOpen.bind(this));

    /**
     * Create a container for the widget and add the following classes:- `widget__hidden`, `widget__container`
     */
    this.widgetContainer = document.createElement("div");
    this.widgetContainer.classList.add("widget__hidden", "widget__container");

    /**
     * Invoke the `createWidget()` method
     */
    this.createWidgetContent();

    /**
     * Append the widget's content and the button to the container
     */
    container.appendChild(this.widgetContainer);
    container.appendChild(buttonContainer);
  }

  createWidgetContent() {
    // Check if the target container element exists
    let widgetContainer = document.getElementById("widget-content");
    if (!widgetContainer) {
      // If it doesn't exist, create a new container div
      widgetContainer = document.createElement("div");
      widgetContainer.setAttribute("id", "widget-content");
      this.widgetContainer.appendChild(widgetContainer);
    }

    // Create a container div for the widget content
    const app = ReactDOM.createRoot(widgetContainer);

    // Render the React component inside the container div
    app.render(
      <ThemeProvider theme={theme}>
        <I18nextProvider i18n={i18next}>
          <SocketProvider>
            <UserContextProvider>
              <SnackContextProvider>
                <WidgetContextProvider>
                  <RouterProvider router={router} />
                </WidgetContextProvider>
              </SnackContextProvider>
            </UserContextProvider>
          </SocketProvider>
        </I18nextProvider>
      </ThemeProvider>
    );

    // Set the translate attribute on the body
    document.body.setAttribute("translate", "no");
  }

  // injectStyles() {
  //   const styleTag = document.createElement("style");
  //   styleTag.innerHTML = styles.replace(/^\s+|\n/gm, "");
  //   document.head.appendChild(styleTag);
  // }

  toggleOpen() {
    this.open = !this.open;
    const widgetElement = document.getElementById("widget-content");

    if (this.open) {
      this.widgetIcon.classList.add("widget__hidden");
      this.closeIcon.classList.remove("widget__hidden");
      this.widgetContainer.classList.remove("widget__hidden");

      // Recreate the widget content when opening
      if (!widgetElement) {
        this.createWidgetContent();
      }
    } else {
      // Remove the widget element to close it
      if (widgetElement) {
        widgetElement.remove();
      }

      this.widgetIcon.classList.remove("widget__hidden");
      this.closeIcon.classList.add("widget__hidden");
      this.widgetContainer.classList.add("widget__hidden");
    }
  }
}

function initializeWidget() {
  return new MessageWidget();
}

initializeWidget();
