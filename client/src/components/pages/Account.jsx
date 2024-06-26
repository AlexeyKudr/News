import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SavedNewsWrapper from "../ui/SavedNewsWrapper";
import axiosInstance from "../api/axiosInstance";

export default function Account({user}) {
  const [savedNews, setSavedNews] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/account")
      .then((res) => setSavedNews(res.data))
      .catch((error) => console.error("Error", error));
  }, []);

  const handleDelete = (id) => {
    axiosInstance.delete(`/news/${id}`).then(() => {
      setSavedNews((prev) => prev.filter((el) => el.id !== id));
    });
  };

  return (
    <Row className="justify-content-center">
      <Col className="text-center">
        <h2 style={{ color: "#00336c", marginTop: '35px', marginBottom: '35px' }}>Избранные новости</h2>
        <SavedNewsWrapper savedNews={savedNews} handleDelete={handleDelete} user={user}/>
      </Col>
    </Row>
  );
}
