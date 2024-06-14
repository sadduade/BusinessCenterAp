import React, { useState } from "react";
import "./accordion_style.css";

function Accordion() {
  const [activeTab, setActiveTab] = useState(null);

  const toggle = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => toggle(0)}>
          <h2>О здании</h2>
          <span>{activeTab === 0 ? "ˆ" : "ˇ"}</span>
        </div>
        {activeTab === 0 && (
          <div className="accordion-content">
            <p>
              Здание бизнес-центра обеспечено центральным отоплением, водой,
              электроэнергией, телефонной связью, системой приточно-вытяжной
              вентиляции, системой пожарной безопасности и аудио-оповещения,
              оптоволоконными телекоммуникациями.
            </p>
            <p>
              Безопасность обеспечивается охранной сигнализацией, круглосуточной
              охраной, видеомониторингом здания и прилегающего периметра.{" "}
            </p>{" "}
            <p>
              Эксплуатацией и обеспечением бесперебойного функционирования
              систем жизнеобеспечения бизнес-центра занимается внутренняя служба
              эксплуатации, круглосуточно контролирующая работу всех инженерных
              систем.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
