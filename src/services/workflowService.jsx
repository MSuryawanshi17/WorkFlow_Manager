import { db } from "../config/firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";

const workflowCollectionRef = collection(db, "workflows");

// Fetch all workflows
export const fetchWorkflows = async () => {
  const querySnapshot = await getDocs(workflowCollectionRef);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Add a new workflow
export const addWorkflow = async (name, status) => {
  await addDoc(workflowCollectionRef, { name, status });
};
