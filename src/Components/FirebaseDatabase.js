import { useState, useEffect } from "react";
import firebase from "../firebase";
import { getDatabase, ref, onValue, push} from 'firebase/database';
import jobsData from "./JobPostInfo";


const FirebaseDatabase = ({children}) => {


    const [jobs,setJobs] = useState([]);
     const [isDataPushed, setIsDataPushed] = useState(false);

    // Push data 
    useEffect(() => {
        if(!isDataPushed) {
            const database = getDatabase(firebase);
            const dbRef = ref(database); 
            jobsData.forEach((job) => {
                console.log(job);
              const firebaseObj = push(dbRef, job); 
              return firebaseObj;
            })
        }
        setIsDataPushed(true);
    }, [isDataPushed]);

    // Pull Data 
    useEffect(() => {
        // const fetchData = async () => {
            const database = getDatabase(firebase);
            const dbRef = ref(database);

            /* const firebaseData = await */ onValue(dbRef, (response) => {
                const jobsData = [];
                const firebaseJobs = response.val();
                for (let key in firebaseJobs){
                    // console.log(key);
                    jobsData.push({key:key, ...firebaseJobs[key]})
                }
                setJobs(jobsData);
            });
    }, [])
    console.log(jobs);
    return children({jobs});
}

export default FirebaseDatabase;

// PseudoCode 
    // Get the manual database data from The other component 
    // push the data to Firebase to store in Firebase 
    // Retreive the data from Firebase 
    // Pass the Firebase information to Job Lists and Single Firebase page 