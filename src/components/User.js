import { UserContext } from "./userContext";
import { useContext } from "react";

// import { doc, getDocs, collection } from "firebase/firestore";
// import { db } from "../firebase";

// const snap = async () => {
//     const querySnapshot = await getDocs(collection(db, "users"));
//     querySnapshot.forEach((doc) => {
//         console.log(doc.id, " => ", doc.data());
//     });
// };
// snap();


export const User = () => {
    const { user } = useContext(UserContext);
    console.log(user);
    return (
        <>
            <h1>{user.displayName}</h1>
            <h2>{user.email}</h2>
            <img src={user.photoURL} />
        </>
    );
};
