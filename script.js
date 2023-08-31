async function fetchData() {
	const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
	const options = {
	  method: 'GET',
	  headers: {
		'X-RapidAPI-Key': '3a842c8027msh2035a5b3d2cd855p14495ejsn7d3c9c852efe',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	  }
	};
  
	try {
	  const response = await fetch(url, options);
	  const result = await response.json();
	  console.log(result);
	} catch (error) {
	  console.error(error);
	}
  }
  
  // Call the async function to fetch and log the weather data
  fetchData();
  