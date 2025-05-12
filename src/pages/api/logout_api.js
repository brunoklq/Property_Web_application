export default async function handler(req, res) {
    //Stores a cookie called username, and set its value to the logged-in username. HttpOnly means cookie can’t be accessed by JavaScript on the frontend (a basic security measure)
    res.setHeader("Set-Cookie", "username=; Max-Age=0; Path=/; HttpOnly");
    // Then it"ll send the user to "/ " or index.js
    res.writeHead(302, { Location: "/" });
    res.end();
  }
  