import "./App.css";
import { useEffect, useState } from "react";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";

const messages = {
  "tr-TR": {
    title: "Merhaba Dünya",
    description: "{count} Yeni Mesajınız var",
  },
  "en-US": { 
    title: "Hello World",
    description: "You have {count} new message",
  },
};

function App() {

  const defaultLocale = localStorage.getItem("lang") ? localStorage.getItem("lang") : navigator.language;
  const [lang, setLang] = useState(defaultLocale);

  useEffect(()=> {
    localStorage.setItem("lang",lang);
  },[lang]);
  return (
    <IntlProvider messages={messages[lang]} locale={lang}>
      <FormattedMessage id="title" />
      <br />
      <p>
        <FormattedMessage id="description" values={{count:4}} />
      </p>
      <br />
      <button onClick={() => setLang("tr-TR")}>TR</button>
      <button onClick={() => setLang("en-US")}>EN</button>
    </IntlProvider>
  );
}

export default App;
