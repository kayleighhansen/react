import logo from './logo.svg';
import './App.css';
// import './index.css';
import Event from './components/Event';

function App() {
  return (
    <div>
      <h1>Upcoming Events</h1>
      <Event name="Bengal for the Day" location="Pocatello" day="01" month="JAN" time="10:00 AM" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum incidunt dolor voluptatem dolores debitis obcaecati hic mollitia, sequi maxime libero iusto repellendus. Sunt, error eum quisquam necessitatibus mollitia fugit illum?" id="01"/>
      <Event name="Day of Inclusion" location="Pocatello" day="02" month="JAN" time="10:00 AM" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum incidunt dolor voluptatem dolores debitis obcaecati hic mollitia, sequi maxime libero iusto repellendus. Sunt, error eum quisquam necessitatibus mollitia fugit illum?" id="02"/>
      <Event name="Bengal for the Day" location="Pocatello" day="03" month="JAN" time="10:00 AM" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum incidunt dolor voluptatem dolores debitis obcaecati hic mollitia, sequi maxime libero iusto repellendus. Sunt, error eum quisquam necessitatibus mollitia fugit illum?" id="03"/>
    </div>
  );
}

export default App;
