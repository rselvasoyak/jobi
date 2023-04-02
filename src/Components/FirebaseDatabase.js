import { useState, useEffect } from "react";
import firebase from "../firebase";
import { getDatabase, ref, onValue, push} from 'firebase/database';
import jobsData from "./JobPostInfo";


const FirebaseDatabase = ({children}) => {
    const [jobs, setJobs] = useState([]);
    const [isDataPushed, setIsDataPushed] = useState(false);
    const [isJobDataPushed, setIsJobDataPushed] = useState(false);

    // Push data 
    useEffect(() => {
        const database = getDatabase(firebase);
        const dbRef = ref(database);
        onValue(dbRef, (response) => {
            const firebaseJobs = response.val();
            setIsJobDataPushed(jobsData.every(job => {
                for (let key in firebaseJobs) {
                    if (firebaseJobs[key].title === job.title) {
                        return true;
                    }
                }
                return false;
            }));
        });
    }, []);

    useEffect(() => {
        const hasDataBeenPushed = localStorage.getItem('dataPushed');
        if (!hasDataBeenPushed && !isJobDataPushed) {
            const database = getDatabase(firebase);
            const dbRef = ref(database); 
            jobsData.forEach((job) => {
                const firebaseObj = push(dbRef, job); 
                return firebaseObj;
            })
            setIsDataPushed(true);
            localStorage.setItem('dataPushed', true);
        }
    }, [isJobDataPushed]);

    // Pull Data 
    useEffect(() => {
        const database = getDatabase(firebase);
        const dbRef = ref(database);
        onValue(dbRef, (response) => {
            const jobsData = [];
            const firebaseJobs = response.val();
            for (let key in firebaseJobs){
                jobsData.push({key:key, ...firebaseJobs[key]});
            }
            setJobs(jobsData);
        });
    }, []);

    console.log(jobs);
    return children({jobs});
}


export default FirebaseDatabase;

// PseudoCode 
    // Get the manual database data from The other component 
    // push the data to Firebase to store in Firebase 
    // Retreive the data from Firebase 
    // Pass the Firebase information to Job Lists and Single Firebase page 
