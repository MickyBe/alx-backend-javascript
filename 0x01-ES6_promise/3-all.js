import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  createUser()
    .then((data) => {
      uploadPhoto()
        .then(
          (data1) => {
            console.log(data1.body, data.firstName, data.lastName);
          },
        );
    }).catch(() => console.log('erro'));
}

handleProfileSignup();
