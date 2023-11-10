const getReceta = async(num, setReceta) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
        mode:'cors'
      };
      
      let response = await fetch("http://localhost:8080/api/receta/unique/10005", requestOptions);
      let jsonData = await response.json();
      console.log(jsonData)
      setReceta(jsonData);
    
}
export default getReceta;