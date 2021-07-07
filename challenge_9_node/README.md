<h1 align="center">🚀 Ninth challenge</h1>

<blockquote align="center">Repository of Rocketseat's ninth GoStack Bootcamp challenge.</blockquote>

### ❓ What is it?
GoStack is a Bootcamp provided by Rocketseat where students learn to be Full-Stack developers using Node.js, React and React Native technologies. During the course students have to go through several challenges, which they have to complete in order to obtain the certificate.

### 🎓 Challenge
In the ninth challenge, we created a new application that is like e-commerce. This application serves to study database relationships, mainly ManyToMany relationships. Allows you to create customers, products and orders.

### 🚧 Built with
- NodeJS
- Typescript

### 💡 How to use
*First you'll have to use software that allows you to use separate routes, one as [Insomnia](https://insomnia.rest/).*
- Boot the server with the code `yarn dev:server`.

#### ✒Routes
- `/customers` -> As `POST` it'll allow you to create a new customer. You will have to send a name and email in the body of the request.

- `/products` -> As `POST` it'll allow you to create a new product. You will have to send a name, price and quantity in the body of the request.

- `/orders` -> As `POST` it'll allow you to create a new order. You must send an object with the property `customer_id`, where you must send the customer's id; and an array of objects called `products`, in each object you must send an` id`, which is the product id, and a `quantity`, which is the product quantity.

- `/orders/:id` -> As `GET` it'll allow you to list the orders maded. In params id, you must submit the order_products id you want to list.

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
