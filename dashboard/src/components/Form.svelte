<script>
  import { createEventDispatcher } from 'svelte';

  let rssiValue = '';
  let deviceName = '';
  const dispatch = createEventDispatcher();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch('submit', { rssiValue, deviceName });
  };
</script>

<form on:submit={handleSubmit}>
  <div>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>RSSI Value:</label>
    <input type="text" bind:value={rssiValue} required />
  </div>
  <div>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>Device Name:</label>
    <input type="text" bind:value={deviceName} required />
  </div>
  <button type="submit">Submit</button>
</form>
