const toggleLightBtn = document.querySelector('.light-mode'),
      searchForm = document.querySelector('.search-container'),
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

let username = '';

const fetchProfile = async () => {
  // Fetch username data
  const res = await fetch(`https://api.github.com/users/${username}`);

  const data = await res.json();

  displayInfo(data);
} 

//Convert API Date to readable format
const convertDate = date => {
  let year = date.slice(0, 4);
  let month = date.slice(5, 7);
  let day = date.slice(8, 10);

  // Convert Month to Text

  switch (month) {
    case '01':
      month = 'January';
      break;
    case '02':
      month = 'February';
      break;
    case '03':
      month = 'March';
      break;
    case '04':
      month = 'April';
      break;
    case '05':
      month = 'May';
      break;
    case '06':
      month = 'June';
      break;
    case '07':
      month = 'July';
      break;
    case '08':
      month = 'August';
      break;
    case '09':
      month = 'September';
      break;
    case '10':
      month = 'October';
      break;
    case '11':
      month = 'November';
      break;
    case '12':
      month = 'December';
      break;
  }

  return `${month} ${day} ${year}`;

}


const displayInfo = async (jsonData) => {
  // Store converted date in variable
  const convertedDate = convertDate(jsonData.created_at);
  

  profilePic.src = jsonData.avatar_url;
  profileName.innerText = jsonData.login;
  link.innerText = jsonData.twitter_username;
  joined.innerText = `Joined ${convertedDate}`;
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

  const date = new Date();
}

searchBar.addEventListener('change', e => {
  username = e.target.value;
  fetchProfile(username);
})

searchBtn.addEventListener('click', () => {
  username = searchBar.value;
  fetchProfile(username);
})