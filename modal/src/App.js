import './App.css';
import Article from './components/Article';

function App() {
  return (
    <div>
    <Article 
      addressStreet="5100 N. E. Hidden Creek Dr" 
      addressCity="Hillsboro"
      addressState="Oregon"
      addressZip="97124"
      addressCountry="United States"
      addressGoogleMaps=""
      budget="null"
      checkIn="null"
      contactName="Bryce Winkle"
      contactNumber="(503) 380-6919"
      contactEmail="null"
      cost="30"

      day="07" 
      description="All star drop in basketball is for all adults and children with additional and special needs, including unified partners. It is held every Monday night starting September 13 2021 from 7:00 to 8:30 PM at the Hidden Creek Community Center in Hillsboro." 

      eventEnd="8:30 PM"
      eventStart="7:00 PM"
      eventCheckIn="null"
      eventType="Drop In Game" 

      id="0123"
      isRepeating="yes"
      isWeekly="yes"
      isBiWeekly="0"
      isMonthly="0"

      includedInPrice="null"

      location="Hidden Creek Community Center" 
      locationDescription=" Hidden Creek Community Center is Hillsboro's new community center. This facility brings families, friends, and neighbors together in a place that is accessible, inclusive, and affordable."
      locationWebsite="https://www.hillsboro-oregon.gov/our-city/departments/parks-recreation/facilities-rentals/hidden-creek"

      month="February" 
      motto="Create memories, Build skills"
      name="Hillsboro, Oregon Drop in All-Star Basketball"

      repeatingWeekDay="Monday"
      repeatingStartDate="September 13th 2021"
      repeatingEndDate="null"

      registrationRequired="no"

      timeZone="PST"

      volunteersNeeded="no"
      volunteersContactEmail="null"
      volunteersContactPhone="null"
      year="2022"

      /></div>
  );
}

export default App;
