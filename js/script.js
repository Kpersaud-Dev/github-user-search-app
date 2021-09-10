const toggleLightBtn = document.querySelector('.light-mode'),
      searchBar = document.querySelector('.search-bar'),
      searchBtn = document.querySelector('.search-button'),
      profilePic = document.querySelector('.profile-picture'),
      profileName = document.querySelector('.profile-name'),
      link = document.querySelector('.link'),
      joined = document.querySelector('.joined'),
      bio = document.querySelector('.bio'),
      reposNumber = document.getElementById('repos-number'),
      followersNumber = document.getElementById('followers-number'),
      followingNumber = document.getElementById('following-number'),
      locale = document.getElementById('location'),
      blog = document.getElementById('blog'),
      twitter = document.getElementById('twitter');

const username = 'kpersaud-dev';

const fetchProfile = async () => {
  // Fetch username data
  const res = await fetch(`https://api.github.com/users/${username}`);

  const data = await res.json();

  console.log(data);
  displayInfo(data);
} 

fetchProfile();

const displayInfo = async (jsonData) => {
  profilePic.src = jsonData.avatar_url;
  profileName.innerText = jsonData.login;
  link.innerText = jsonData.twitter_username;
  joined.innerText = `Joined ${jsonData.created_at}`;
  bio.innerText = jsonData.bio;
  reposNumber.innerText = jsonData.public_repos;
  followersNumber.innerText = jsonData.followers;
  followingNumber.innerText = jsonData.following;
  locale.innerText = jsonData.location;
  blog.innerText = jsonData.blog;
  twitter.innerText = jsonData.twitter_username;

  if(jsonData.twitter_username === null) {
    twitter.innerText = "Not Available";
  }
}