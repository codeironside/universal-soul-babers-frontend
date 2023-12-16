const makeCartRequest = async () => {
    try {
      const userId = getUserIdSomehow(); // Replace with your actual logic to get the user ID
      const items = [
        // Replace with your actual items data
        { shop_id: 'some_shop_id', quantity: 2 },
        { shop_id: 'another_shop_id', quantity: 1 },
        // ...
      ];
  
      // Make sure to replace 'your_api_endpoint' with the actual endpoint
      const response = await axios.post('your_api_endpoint', {
        auth: { id: userId }, // Assuming your server expects auth information
        body: { items },
      });
  
      console.log('Response:', response.data);
      // Handle the response as needed
    } catch (error) {
      console.error('Error:', error.message);
      // Handle errors appropriately
    }
  };
  
  // Call the function when needed
  makeCartRequest();
  