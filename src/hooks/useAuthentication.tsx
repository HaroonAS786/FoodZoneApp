import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useDispatch } from "react-redux";
import { saveUserToken } from "../redux/actions";
import { saveData } from "../utils/storage";

const useAuthentication = () => {

    const createUserOnFirebase = (email: string, password: any) => {
        return new Promise(async (resolve: any, reject: any) => {
            try {
                const response = await createUserWithEmailAndPassword(auth, email, password);
                const idToken = await response.user.getIdToken();
                saveData("accessToken", idToken)
                // setData("accessToken", idToken)
                resolve(idToken)
            } catch (error) {
                reject(error)
            }
        })
    }
    const userLogin = (email: string, password: any) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await signInWithEmailAndPassword(auth, email, password);
                const idToken = await response.user.getIdToken();
                saveData("accessToken", idToken)
                resolve(idToken)
            } catch (error) {
                reject(error)
            }
        })
    }

    return { createUserOnFirebase, userLogin };
};

export default useAuthentication;