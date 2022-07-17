import React, { useState, useEffect } from "react";
import "./App.scss";
import Router from "./pages/Router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import classNames from "classnames";
import { Theme } from "./common/types";
import { ThemeModeProvider } from "./context/ThemeModeProvider";

function App() {
  const [theme, setTheme] = useState(Theme.Dark);

  const onChangeTheme = (value: Theme) => {
    setTheme(value);
  };
  const isDarkTheme = theme === Theme.Dark;

  const toggleBodyClass = (className: string) =>
    document.body.classList.toggle(className);
  const removeBodyClass = (className: string) =>
    document.body.classList.remove(className);

  useEffect(() => {
    if (!isDarkTheme) toggleBodyClass("light");

    return () => {
      removeBodyClass("light");
    };
  }, [isDarkTheme]);

  return (
    <Provider store={store}>
      <ThemeModeProvider theme={theme} onChangeTheme={onChangeTheme}>
        <div
          className={classNames("App", {
            ["AppLight"]: !isDarkTheme,
          })}
        >
          <Router />
        </div>
      </ThemeModeProvider>
    </Provider>
  );
}

export default App;
