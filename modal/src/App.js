import './App.css';
import Article from './components/Article';

function App() {
  return (
    <div>
    <Article 
      id="0123"
      addressStreet=" 5100 N. E. Hidden Creek Dr" 
      addressCity="Hillsboro"
      addressState="Oregon"
      addressZip="97124"
      addressCountry="United States"
      addressGoogleMaps="https://www.google.com/maps/place/Hidden+Creek+Community+Center/@45.5234538,-122.9332597,17z/data=!3m1!4b1!4m5!3m4!1s0x54950f2d27c839d1:0x55e02d75f80aa9d6!8m2!3d45.5234538!4d-122.931071"
      budget="0.00"
      contactName="Bryce Winkel"
      contactNumber="(503) 380-6919"
      contactEmail="null"
      cost="0.00"
      
      description="All star drop in basketball is for all adults and children with additional and special needs, including unified partners. It is held every Monday night starting September 13 2021 from 7:00 to 8:30 PM at the Hidden Creek Community Center in Hillsboro." 
      
      eventDay="07" 
      eventMonth="February" 
      eventYear="2022"
      
      eventEndTime="8:30 PM"
      eventStartTime="7:00 PM"
      eventCheckInTime=""
      eventType="Drop In Game" 
      
      isRepeating="yes"
      isWeekly="yes"
      isBiWeekly="null"
      isMonthly="null"
      
      includedInPrice="null"
      
      location="Hidden Creek Community Center" 
      locationDescription=" Hidden Creek Community Center is Hillsboro's new community center. This facility brings families, friends, and neighbors together in a place that is accessible, inclusive, and affordable."
      
      locationWebsite="https://www.hillsboro-oregon.gov/our-city/departments/parks-recreation/facilities-rentals/hidden-creek"
      
      motto="Create memories, Build skills"
      name="Hillsboro, Oregon Drop in All-Star Basketball"
      
      repeatingWeekDay="Monday"
      repeatingWeekNumber="null"
      repeatingStartDate="September 13th 2021"
      repeatingEndDate="null"
      
      registrationRequired="no"
      
      timeZone="PST"
      
      volunteersNeeded="no"
      volunteersContactName="null"
      volunteersContactEmail="null"
      volunteersContactPhone="null"
    
      /></div>
  );
}

export default App;
