import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        { duration: '30s', target: 50 }, // Ramp-up to 50 users over 30 seconds
        { duration: '1m', target: 50 },  // Hold at 50 users for 1 minute
        { duration: '30s', target: 0 },  // Ramp-down to 0 users
    ],
};

export default function () {
    let res = http.get('http://192.168.56.21:30848/catalog'); // Replace with your app's URL
    sleep(1); // Simulates the user waiting for 1 second between requests
}
