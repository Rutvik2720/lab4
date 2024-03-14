<script>
function getBackend() {
  const url = 'http://localhost:5000/'
  fetch(url)
  .then(response => response.json())  
  .then(json => {
    console.log(json);
    document.getElementById("frontend").innerHTML = JSON.stringify(json)
  })
}
</script>
