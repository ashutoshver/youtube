const api_key = "AIzaSyD85F2Vt3-ykW-f8N0r3OlBeDRHpbteHFM";

let search = async () => {
  try {
    let query = document.querySelector("#query").value;
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`;
    let res = await fetch(url);
    let data = await res.json();
    append(data.items)
  } catch (err) {
    console.log(err);
  }
};

//append the data on dom

let append = (data) => {
  let container = document.querySelector("#results");
  console.log(data);

  data.forEach(({ id: { videoId }, snippet: { title } }) => {
    let div = document.createElement("div")
    let iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.allow = "fullscreen";   //for full screen video
    let h3 = document.createElement("h3");
    h3.innerText = title;

    div.append(iframe, h3);

    let vedio = {
      videoId,
      title
    };
    div.onclick = () => {
      playVideo(video);
    }
    container.append(div);

  });
};
let playVideo = (video) => {
  localStorage.setItem("video", JSON.stringify(video));
}


/*<iframe width="560" height="315" 
src="https://www.youtube.com/embed/duP8iDfjNEg"  //video id
title="YouTube video player" 
frameborder="0" 
allow="accelerometer; 
autoplay; clipboard-write; 
encrypted-media; gyroscope; 
picture-in-picture" allowfullscreen></iframe>
*/
