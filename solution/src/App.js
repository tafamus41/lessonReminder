import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header/Header';
import LessonCard from './components/LessonCard/LessonCard';


function App() {
  // console.log(LessonCard);
  return (
    
    <div className="App">
      <Header/>
      <h1 className="lessonReminder">Lesson Reminder</h1>
      <LessonCard/>  
      
      
    </div>
  );
}

export default App;
