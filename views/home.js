module.exports = ({ data, data1 }) => {
  const LatestStories = data
    .map((el) => {
      return `
    <div class="storiesCard">
    <a href='${el.link}'>${el.title}</a>
    </div>
  `;
    })
    .join(" ");

  const mainstories = data1
    .map((el) => {
      return `
  <div class="MainStoriesCard">
  <h3>${el.title}</h3>
  <p>${el.stories}</p>  
  </div>
`;
    })
    .join(" ");

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/style/style.css">
  <title>Document</title>
</head>
<body>
<H2 class="navbar">TIME</H2>
<div class="container"> 
<div class="mainBox">
${mainstories}</div>
<div class="stories_box">
<h2>LATEST STORIES</h2>
${LatestStories}
</div>
</div>  
<h4 class"mainHeader">FEATURED VOICES</h4>
</body>
</html>
  `;
};
