import './App.css';
import './details.css';
import Event from './components/Event';
import Modal from './components/Modal';

function App() {
  return (
    <div>
      <h1 className="main-title">Upcoming Events</h1>
      <div class="search-bar">
        <form>
          <input name="location" placeholder="location" class="location-input" ></input>
          <input name="day" placeholder="day" class="day-input" type="number"></input>
          <input name="month" placeholder="month" class="month-input"></input>
          <button>Search</button>
        </form>
      </div>
      <Event address="123 Street State" name="Bengal for the Day" location="Pocatello" day="01" month="JAN" time="10:00 AM" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum incidunt dolor voluptatem dolores debitis obcaecati hic mollitia, sequi maxime libero iusto repellendus. Sunt, error eum quisquam necessitatibus mollitia fugit illum?" id="01"/>
      <Event address="123 Street State" name="Day of Inclusion" location="Pocatello" day="02" month="JAN" time="10:00 AM" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum incidunt dolor voluptatem dolores debitis obcaecati hic mollitia, sequi maxime libero iusto repellendus. Sunt, error eum quisquam necessitatibus mollitia fugit illum?" id="02"/>
      <Event address="123 Street State" name="Bengal for the Day" location="Pocatello" day="03" month="JAN" time="10:00 AM" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum incidunt dolor voluptatem dolores debitis obcaecati hic mollitia, sequi maxime libero iusto repellendus. Sunt, error eum quisquam necessitatibus mollitia fugit illum?" id="03"/>

      <Modal />
    </div>
  );
}

export default App;
