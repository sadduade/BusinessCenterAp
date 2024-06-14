import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChair,
  faMapMarkerAlt,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import "./FeaturesSection.css";

function FeaturesSection() {
  return (
    <Container>
      <Row className="text-center my-5">
        <Col>
          <FontAwesomeIcon icon={faChair} className="icon-margin" size="3x" />
          <h3 className="text-large">Комфортные условия</h3>
          <p className="text-medium">
            Здание спроектировано и построено таким образом, чтобы оптимально
            организовать рабочий процесс. В нем предусмотрен максимум мелочей
            для комфортного пребывания арендаторов и посетителей комплекса
          </p>
        </Col>
        <Col>
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="icon-margin"
            size="3x"
          />
          <h3 className="text-large">Удачное расположение</h3>
          <p className="text-medium">
            Отличное расположение способствует положительной динамике развития
            Вашего бизнеса. Располагающиеся поблизости инфраструктурные объекты
            полностью удовлетворяют потребности современных деловых людей
          </p>
        </Col>
        <Col>
          <FontAwesomeIcon icon={faCar} className="icon-margin" size="3x" />
          <h3 className="text-large">Транспортная доступность</h3>
          <p className="text-medium">
            Здание расположено таким образом, что поблизости есть большая
            парковка для автомобилей и автобусная остановка, и Вы всегда сможете
            беспрепятственно добраться до Вашего офиса из любого района города
          </p>
        </Col>
      </Row>
    </Container>
  );
}
export default FeaturesSection;
