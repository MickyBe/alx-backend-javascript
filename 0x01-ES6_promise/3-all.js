import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  Promise.all([
    createUser, uploadPhoto])
    .then((data) => {
      console.log(data[0].body, data[1].firstName, data[2].lastName);
    }).catch(() => console.log('Signup system offline'));
}

handleProfileSignup();