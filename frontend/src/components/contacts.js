import React, { Suspense, lazy } from "react";
import YandexMapWidget from "./YandexMapWidget";
import { Helmet } from "react-helmet";

function ContactsPage() {
  return (
    <div className="contacts-page-container">
      <Helmet>
        <title>Контакты — БЦ Время</title>
      </Helmet>{" "}
      <YandexMapWidget />
    </div>
  );
}

export default ContactsPage;
