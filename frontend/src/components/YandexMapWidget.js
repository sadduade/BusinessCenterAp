import React, { useEffect, useRef } from "react";
import "./maps.css";

const YandexMapWidget = () => {
  const mapContainerRef = useRef(null);
  useEffect(() => {
    if (mapContainerRef.current) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.charset = "utf-8";
      script.async = true;
      script.src =
        "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Adb8fb319aa4324e279830d2151e6db16c5ebaeeb849ff4eef4260b55c373d3b2&amp;width=500&amp;height=600&amp;lang=ru_RU&amp;scroll=true";
      mapContainerRef.current.appendChild(script);

      return () => {
        mapContainerRef.current.removeChild(script);
      };
    }
  }, []);

  return (
    <div className="map-container">
      <div
        ref={mapContainerRef}
        id="yandex-map-container"
        style={{ width: "500px", height: "600px" }}
      ></div>
      <div className="text-container">
        <h2>Контактная информация</h2>
        <p>
          Адрес: 636036, Россия, Томская область, г. Северск, ул. Калинина, 42
        </p>
        <p>Тел: +7 (913) 829-67-87</p>
        <p>
          <a>E-mail: bctime@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default YandexMapWidget;
