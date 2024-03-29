const Tesseract = require("tesseract.js");
const imagePath = "./public/aadhar.jpg";

Tesseract.recognize(
  imagePath,
  "eng+hin", // Language code for English and Hindi
  {
    logger: (info) => console.log(info),
  }
)
  .then(({ data: { text } }) => {
    console.log("OCR Result:", text);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

// const axios = require("axios");
// const cheerio = require("cheerio");

// const searchQuery = "cyber+crime+cases"; // Your search query

// const url = `https://www.google.com/search?q=${searchQuery}&tbm=isch`;

// axios
//   .get(url)
//   .then((response) => {
//     const html = response.data;
//     const $ = cheerio.load(html);

//     const imagesWithContent = [];
//     $("a").each((index, element) => {
//       const href = $(element).attr("href");
//       const img = $(element).find("img").attr("src");
//       if (img && href && href.startsWith("/url?q=")) {
//         const imageLink = decodeURIComponent(
//           href.split("/url?q=")[1].split("&")[0]
//         );
//         const content = $(element).next(".image-description").text();
//         imagesWithContent.push({
//           image: img,
//           link: imageLink,
//           content: content,
//         });
//       }
//     });

//     imagesWithContent.forEach((item, index) => {
//       console.log(`Image ${index + 1}: ${item.image}`);
//       console.log(`Related Link ${index + 1}: ${item.link}`);
//       console.log(`Content ${index + 1}: ${item.content}`);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });
