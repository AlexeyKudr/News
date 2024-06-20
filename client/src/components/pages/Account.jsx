import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SavedNewsWrapper from "../ui/SavedNewsWrapper";
import axiosInstance from "../api/axiosInstance";

export default function Account() {
  const [savedNews, setSavedNews] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/account")
      .then((res) => setSavedNews(res.data))
      .catch((error) => console.error("Error", error));
  }, []);

  return (
    <Row>
      <Col>
        <h2> Account page</h2>
        <SavedNewsWrapper savedNews={savedNews} />
      </Col>
    </Row>
  );
}
