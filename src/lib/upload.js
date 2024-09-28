import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";

const upload = async (file) => {
        const date = new Date();
        if(!file){
                file = new File([""], "avatar.png", {type: "image/jpeg"});
        }
        const storageRef = ref(storage, `images/${date + file.name}`);

        const uploadTask = uploadBytesResumable(storageRef, file);

        return new Promise((resolve, reject) => {

                uploadTask.on(
                        'state_changed',
                        (snapshot) => {
                                const progress = (parseInt(snapshot.bytesTransferred) / parseInt(snapshot.totalBytes)) * 100;
                        },
                        (error) => {
                                reject("Something went wrong" + error.cdoe);
                        },
                        () => {
                                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                                        resolve(downloadURL);
                                });
                        }
                );
        });
}

export default upload;