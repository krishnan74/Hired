const searchButton = document.getElementById("search_btn_div");
const locationInput = document.getElementById('location-input');
const roleInput = document.getElementById('role-input');
const candidatesList = document.getElementById('candidates-list');

searchButton.addEventListener("click", searchCandidates);

function searchCandidates() {
  const location = locationInput.value.trim();
  const role = roleInput.value.trim();

  const candidates = [
    { name: 'John Smith', location: 'New York', role: 'Software Engineer' },
    { name: 'Emily Johnson', location: 'San Francisco', role: 'Data Analyst' },
    { name: 'Michael Williams', location: 'London', role: 'Front-end Developer' },
    { name: 'Emma Davis', location: 'Sydney', role: 'UI/UX Designer' },
    { name: 'David Johnson', location: 'Toronto', role: 'Full-stack Developer' },
    { name: 'Sophia Martinez', location: 'Paris', role: 'Software Engineer' },
    { name: 'Daniel Taylor', location: 'Tokyo', role: 'Data Analyst' },
    { name: 'Olivia Anderson', location: 'Berlin', role: 'Front-end Developer' },
    { name: 'James Wilson', location: 'Dubai', role: 'UI/UX Designer' },
    { name: 'Isabella Thompson', location: 'Barcelona', role: 'Full-stack Developer' },
    { name: 'Liam Moore', location: 'Sydney', role: 'Software Engineer' },
    { name: 'Ava Lee', location: 'New York', role: 'Data Analyst' },
    { name: 'Noah Johnson', location: 'San Francisco', role: 'Front-end Developer' },
    { name: 'Mia Hernandez', location: 'London', role: 'UI/UX Designer' },
    { name: 'Ethan Taylor', location: 'Tokyo', role: 'Full-stack Developer' },
    { name: 'Charlotte Brown', location: 'Paris', role: 'Software Engineer' },
    { name: 'Alexander Lee', location: 'Toronto', role: 'Data Analyst' },
    { name: 'Amelia Wilson', location: 'Berlin', role: 'Front-end Developer' },
    { name: 'Sophia Martin', location: 'Dubai', role: 'UI/UX Designer' },
    { name: 'Benjamin Anderson', location: 'Barcelona', role: 'Full-stack Developer' },
    { name: 'Mason White', location: 'Sydney', role: 'Software Engineer' },
    { name: 'Harper Thompson', location: 'New York', role: 'Data Analyst' },
    { name: 'Elijah Johnson', location: 'San Francisco', role: 'Front-end Developer' },
    { name: 'Abigail Hernandez', location: 'London', role: 'UI/UX Designer' },
    { name: 'Logan Taylor', location: 'Tokyo', role: 'Full-stack Developer' },
    { name: 'Ella Brown', location: 'Paris', role: 'Software Engineer' },
    { name: 'Lucas Lee', location: 'Toronto', role: 'Data Analyst' },
    { name: 'Scarlett Wilson', location: 'Berlin', role: 'Front-end Developer' },
    { name: 'Victoria Martin', location: 'Dubai', role: 'UI/UX Designer' },
    { name: 'Jackson Anderson', location: 'Barcelona', role: 'Full-stack Developer' },
    { name: 'Aiden Davis', location: 'Chicago', role: 'Software Engineer' },
  { name: 'Sophia Wilson', location: 'Los Angeles', role: 'Data Analyst' },
  { name: 'Lucas Anderson', location: 'Miami', role: 'Front-end Developer' },
  { name: 'Ava Martin', location: 'Vancouver', role: 'UI/UX Designer' },
  { name: 'Liam Thompson', location: 'Melbourne', role: 'Full-stack Developer' },
  { name: 'Charlotte Lee', location: 'Dublin', role: 'Software Engineer' },
  { name: 'Mason Johnson', location: 'Stockholm', role: 'Data Analyst' },
  { name: 'Harper Taylor', location: 'Amsterdam', role: 'Front-end Developer' },
  { name: 'Elijah Hernandez', location: 'Oslo', role: 'UI/UX Designer' },
  { name: 'Amelia Anderson', location: 'Zurich', role: 'Full-stack Developer' },
  { name: 'Henry Wilson', location: 'Sydney', role: 'Software Engineer' },
  { name: 'Scarlett Brown', location: 'New York', role: 'Data Analyst' },
  { name: 'Logan Johnson', location: 'San Francisco', role: 'Front-end Developer' },
  { name: 'Chloe Hernandez', location: 'London', role: 'UI/UX Designer' },
  { name: 'Carter Martin', location: 'Tokyo', role: 'Full-stack Developer' },
  { name: 'Evelyn Thompson', location: 'Paris', role: 'Software Engineer' },
  { name: 'Owen Lee', location: 'Toronto', role: 'Data Analyst' },
  { name: 'Luna Wilson', location: 'Berlin', role: 'Front-end Developer' },
  { name: 'Ellie Martinez', location: 'Dubai', role: 'UI/UX Designer' },
  { name: 'Gabriel Taylor', location: 'Barcelona', role: 'Full-stack Developer' },
  { name: 'Jackson Anderson', location: 'Melbourne', role: 'Software Engineer' },
  { name: 'Grace Thompson', location: 'Chicago', role: 'Data Analyst' },
  { name: 'Zoe Johnson', location: 'Los Angeles', role: 'Front-end Developer' },
  { name: 'Ian Hernandez', location: 'Miami', role: 'UI/UX Designer' },
  { name: 'Penelope Martin', location: 'Vancouver', role: 'Full-stack Developer' },
  { name: 'David Thompson', location: 'Dublin', role: 'Software Engineer' },
  { name: 'Joseph Lee', location: 'Stockholm', role: 'Data Analyst' },
  { name: 'Nora Wilson', location: 'Amsterdam', role: 'Front-end Developer' },
  { name: 'Eli Anderson', location: 'Oslo', role: 'UI/UX Designer' },
  { name: 'Avery Hernandez', location: 'Zurich', role: 'Full-stack Developer' },
  { name: 'Levi Brown', location: 'Sydney', role: 'Software Engineer' },
  { name: 'Victoria Johnson', location: 'New York', role: 'Data Analyst' },
  { name: 'Hannah Thompson', location: 'San Francisco', role: 'Front-end Developer' },
  { name: 'Landon Hernandez', location: 'London', role: 'UI/UX Designer' },
  { name: 'Sofia Anderson', location: 'Tokyo', role: 'Full-stack Developer' },
  { name: 'Aria Thompson', location: 'Paris', role: 'Software Engineer' },
  { name: 'Caleb Lee', location: 'Toronto', role: 'Data Analyst' },
  { name: 'Madelyn Wilson', location: 'Berlin', role: 'Front-end Developer' },
  { name: 'Grayson Martin', location: 'Dubai', role: 'UI/UX Designer' },
  { name: 'Isaac Taylor', location: 'Barcelona', role: 'Full-stack Developer' },
  { name: 'Violet Anderson', location: 'Melbourne', role: 'Software Engineer' },
  { name: 'Stella Thompson', location: 'Chicago', role: 'Data Analyst' },
  { name: 'Bentley Johnson', location: 'Los Angeles', role: 'Front-end Developer' },
  { name: 'Camila Hernandez', location: 'Miami', role: 'UI/UX Designer' },
  ];
  

  const filteredCandidates = candidates.filter(candidate => {
    const candidateLocation = candidate.location.toLowerCase();
    const candidateRole = candidate.role.toLowerCase();
    const searchLocation = location.toLowerCase();
    const searchRole = role.toLowerCase();

    return (
      (searchLocation === '' || candidateLocation.includes(searchLocation)) &&
      (searchRole === '' || candidateRole.includes(searchRole))
    );
  });

    displayCandidates(filteredCandidates);
    locationInput.value = '';
    roleInput.value = '';
}

function displayCandidates(candidates) {
    // Clear the candidates list
    candidatesList.innerHTML = '';
  
    // Check if any candidates were found
    if (candidates.length === 0) {
      const noCandidatesMessage = document.createElement('p');
      noCandidatesMessage.textContent = 'No candidates found.';
      candidatesList.appendChild(noCandidatesMessage);
      return;
    }
  
    // Iterate through the candidates and create candidate cards
    candidates.forEach(candidate => {
      const candidateCard = document.createElement('div');
      candidateCard.classList.add('candidate-card');
      //candidateCard.style.backgroundImage = "url('./images/bg2.jpg')";


      const name = document.createElement('h3');
      name.textContent = candidate.name;
  
      const location = document.createElement('p');
      location.textContent = `Location: ${candidate.location}`;
  
      const role = document.createElement('p');
      role.textContent = `Job Role: ${candidate.role}`;
  
      candidateCard.appendChild(name);
      candidateCard.appendChild(location);
      candidateCard.appendChild(role);
  
      candidatesList.appendChild(candidateCard);
    });
  }