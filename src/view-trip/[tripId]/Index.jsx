/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { db } from '@/service/FirebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom'
import InfoSection from './components/InfoSection';
import Hotels from './components/Hotels';
import PlacesToVisit from './components/PlacesToVisit';
import Footer from './components/Footer';

function Index() {

  //for setting trip
  const [trip, setTrip] = useState([]);

  //now we have to fecth that id and then show the data of that trip
  const {tripId}=useParams();


  //we have call call GetTripData inside useEffect so that whenevr id will change this will run
  useEffect(()=>{
       tripId&&GetTripData();
  },[tripId])


  //now we have fetch data from the firbase for corrospoding tripId
  const GetTripData=async ()=>{
    const docRef=doc(db,'AITrips',tripId);
    const docSnap=await getDoc(docRef);

    if(docSnap.exists()){
      console.log("Document data:", docSnap.data());
      setTrip(docSnap.data());
    }
    else{
      console.log("No such document");
      toast("No such document found");
    }
  }

  return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-56 gap-10'>
      {/* {-->(here we will pass data through props) */}

      {/* information section*/}
      <InfoSection trip={trip}/>

      {/* recomended hotels */}
      <Hotels trip={trip}/>

      {/* daily plan */}
      <PlacesToVisit trip={trip}/>

      {/* footer */}
      <Footer trip={trip}/>

    </div>
  )
}

export default Index