const searchname = document.getElementById("searchname");

const button = document.getElementById("btn");

const details = document.getElementById("details")
const name = document.getElementById("name")
const bio = document.getElementById("bio")
const followers = document.getElementById("followers")
const following = document.getElementById("following")
const repositories = document.getElementById("repositories")
const image = document.getElementById("image")
const profile = document.getElementById("profile")
const loading = document.getElementById("loading")
const usernotfound = document.getElementById("usernotfound")


details.style.display = "none";
loading.style.display = "none";
usernotfound.style.display = "none";


button.addEventListener("click", async () => {
  const username = searchname.value;

  const newname = username.trim();

  console.log(newname);

  if (newname.length == 0) {
    alert("Enter the userName");
    return;

  } else {
    const url = `https://api.github.com/users/${newname}`;

    loading.style.display = "block";
    details.style.display = "none";

    const response = await fetch(url);

    loading.style.display = "none";

    if (response.ok) {

      const data = await response.json();

      console.log(data);
      loading.style.display = "none"


      name.textContent = data.name;
      bio.textContent = data.bio;
      followers.textContent = data.followers;
      following.textContent = data.following;
      repositories.textContent = data.public_repos;
      image.src = data.avatar_url;
      profile.href = data.html_url;
      details.style.display = "block";
    } else {

      usernotfound.style.display = "block";

      loading.style.display = "none"

      details.style.display = "none";

    }

  }

});

searchname.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    button.click();
  }
});


