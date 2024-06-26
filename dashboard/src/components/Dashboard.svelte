<script>
    import Form from './Form.svelte';
  
    const handleFormSubmit = async (event) => {
      const { rssiValue, deviceName } = event.detail;
      try {
        const response = await fetch('http://localhost:3000/rssi', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ rssiValue, deviceName }),
        });
        if (response.ok) {
          alert('Data submitted successfully');
        } else {
          alert('Failed to submit data');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error submitting data');
      }
    };
  </script>
  
  <div>
    <h1>Dashboard</h1>
    <Form on:submit={handleFormSubmit} />
  </div>
  