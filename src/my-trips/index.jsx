/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { db } from '@/service/FirebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom';
import UserTripCardItem from './components/UserTripCardItem';

function MyTrips() {

    const navigation = useNavigation();

    useEffect(() => {
        GetUserTrips();
    }, [])


    //for saving data coming from the local storage
    const [usertrip, setusertrip] = useState([]);

    
    //use ka data toh nikal le jo show krna hai
    const GetUserTrips = async() => {
        //local storage se data liya jisbhi id ka lena hai
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(user);

        if (!user) {
            navigation('/');
            return;
        }


        //fetching the data fo user
        const q = query(collection(db, 'AITrips'), where('userEmail', '==', user?.email));
        const querySnapshot = await getDocs(q);

        //evrytime when you setting th trip make sure it is empty
        setusertrip([]);

        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            //setting user trip coming from firbase
            setusertrip(prevVal=>[...prevVal,doc.data()])
        });

    }
    return (
        <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
            <h2 className='font-bold text-3xl' >My Trips</h2>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-10'>
                {usertrip?.length>0?usertrip.map((trip,index)=>(
                   <UserTripCardItem trip={trip} key={index}/>
                )):
                [1,2,3,4,5,6].map((item,index)=>(
                    <div key={index} className='h-[220px] w-full bg-slate-200 animate-pulse rounded-xl'>
                         
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyTrips