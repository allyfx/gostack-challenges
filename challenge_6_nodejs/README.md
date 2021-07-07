<h1 align="center">🚀 Sixth challenge</h1>

<blockquote align="center">Repository of Rocketseat's sixth GoStack Bootcamp challenge.</blockquote>

### ❓ What is it?
GoStack is a Bootcamp provided by Rocketseat where students learn to be Full-Stack developers using Node.js, React and React Native technologies. During the course students have to go through several challenges, which they have to complete in order to obtain the certificate.

### 🎓 Challenge
In the sixth challenge the student must continue working on the transaction management application, now improving the backend by adding new features and improving the API.

### 🚧 Built with
- NodeJS
- Typescript

### 💡 How to use
*First you'll have to use software that allows you to use separate routes, one as [Insomnia](https://insomnia.rest/).*
- Boot the server with the code `yarn dev:server`.
- Use the routes in Insomnia - or other software of your choice - listed below.

### ✒Routes
- `/transactions` -> As `GET` it allows you to list all the registered transactions and the balance.

- `/transactions` -> As `POST` it allows you to register a new transaction, you'll have to send a `JSON` with a `title` a `value` a `type`, that can be `income` or `outcome` wich means income for deposit and outcome for withdrawals, and a `category`.

- `/transactions/delete/<transaction_id>` -> As `DELETE` it allows you to delete a transaction based on it id.

- `/transactions/import` -> As `POST` it allows you to import a CSV file to create a new transaction.

### 📂 Others bootcamp challenges
- <a href="https://github.com/allyfx/challenge_two_node">Challenge 02 - Node concepts</a>
- <a href="https://github.com/allyfx/challenge_three_reactjs">Challenge 03 - React concepts</a>
- <a href="https://github.com/allyfx/challenge_four_reactnative">Challenge 04 - React native concepts</a>
- <a href="https://github.com/allyfx/challenge_five_nodejs">Challenge 05 - Node fundamentals</a>
- <a href="https://github.com/allyfx/challenge_six_nodejs">Challenge 06 - Database and files upload with Node</a>
- <a href="https://github.com/allyfx/challenge_seven_reactjs">Challenge 07 - React fundamentals</a>
- <a href="https://github.com/allyfx/challenge_eight_reactnative">Challenge 08 - React native fundamentals</a>
- <a href="https://github.com/allyfx/challenge_nine_node">Challenge 09 - Database relationships in Node</a>
- <a href="https://github.com/allyfx/challenge_ten_node">Challenge 10 - CRUD in React</a>
- <a href="https://github.com/allyfx/challenge_eleven_node">Challenge 11 - React native navigation and filters</a>
