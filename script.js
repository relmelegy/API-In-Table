
fetch("https://randomuser.me/api/?results=5").then((data)=>{
    return data.json();
}).then((objectData)=>{
    let tableData="";
    objectData.results.forEach((user) => {
        tableData += `<tr>
                        <td>${user.name.first}</td>
                        <td>${user.location.city}</td>
                     </tr>`;
});
    document.getElementById("table_body").innerHTML=tableData;
})
.catch((error) => {
    console.error('Error fetching data:', error);
});
