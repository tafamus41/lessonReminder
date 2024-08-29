import "./Lesson.css";
import { data } from "../../helper/data";
const LessonCard = () => {
  return (
    <div className="lessonContainer">
      {data.map((item) => {
        return (
          <div className="lessonCard" key={item.id}>
            <div className="imageContainer col-md-4">
              <img
                src={item.image} alt=""/>
            </div>
            <div className="card-text">
              <h5 className="card-title">Lesson :  <span>{item.name}</span> </h5>
              <h5 className="card-title">Lesson Hour: <span>{item.hour}</span> </h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default LessonCard;
