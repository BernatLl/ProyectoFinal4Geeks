import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const CreateCourse = () => {
  return (
    <div className="BackGround">
      <div className="Tittle">
        <h1>Educator Center</h1>
      </div>
      <div className="Slogan">
        <h2>
          Better than a thousand days of diligent study, is one day with a great
          teacher.
        </h2>
      </div>
      <div>Create a Course</div>
      <div className="Recomendations">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://thumbs.dreamstime.com/b/check-resume-concept-resume-hands-check-resume-concept-resume-hands-approval-resume-flat-style-147230943.jpg"
          />
          <Card.Body>
            <Card.Title>Curriculum Vitae</Card.Title>
            <Card.Text>
              One of the best features of this platform is the promotion of the
              Chef, Adding a Good CV will give confidence to the student at the
              time of deciding if spend the money on you or another Chef. On the
              other Hand, You will be able to use our CV format for yourself.
              The profile in We Cook! will give you statistics if needed for you
              to use for professional purpuses.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
