const toggleLightBtn = document.querySelector('.light-mode'),
      lightModeIcon = document.getElementById('light-mode-icon'),
      searchForm = document.querySelector('.search-container'),
      searchBar = document.querySelector('.search-bar'),
      searchBtn = document.querySelector('.search-button'),
      profileCard = document.querySelector('.profile'),
      profilePic = document.querySelector('.profile-picture'),
      profileName = document.querySelector('.profile-name'),
      link = document.querySelector('.link'),
      joined = document.querySelector('.joined'),
      bio = document.querySelector('.bio'),
      numbersCard = document.querySelector('.numbers-card'),
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

  // Extract year,month,day from string
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
  blog.href = jsonData.blog;
  twitter.innerText = jsonData.twitter_username;

  if(jsonData.twitter_username === null) {
    twitter.innerText = "Not Available";
  }

}

searchBar.addEventListener('change', e => {
  username = e.target.value;
  fetchProfile(username);
})

searchBtn.addEventListener('click', () => {
  username = searchBar.value;
  fetchProfile(username);
})

// Toggle Light Mode
const toggleLight = () => {
  
  if(toggleLightBtn.innerText === 'LIGHT') {
    document.body.classList.add('light');
    searchBar.classList.add('search-bar-light');
    profileCard.classList.add('card-light');
    numbersCard.classList.add('numbers-card-light');
    lightModeIcon.classList.remove('fa-sun');
    lightModeIcon.classList.add('fa-moon');
    toggleLightBtn.innerText = 'DARK';
    blog.style.color = 'black';
  } else {
    document.body.classList.remove('light');
    searchBar.classList.remove('search-bar-light');
    profileCard.classList.remove('card-light');
    numbersCard.classList.remove('numbers-card-light');
    lightModeIcon.classList.add('fa-sun');
    lightModeIcon.classList.remove('fa-moon');
    toggleLightBtn.innerText = 'LIGHT';
    blog.style.color = 'white';
  }
  
}

// Light Mode Button
toggleLightBtn.addEventListener('click', toggleLight);
