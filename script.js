fetch("https://dummyjson.com/users")
  .then((data) => {
    console.log(data);
    return data.json();
  })
  .then((fullData) => {
    let myData = "";
    fullData.users.map((val) => {
      myData += `
          <tr id="${val.id}"  class="row" >
      <td class="rowmem"><input type="text" value="${val.firstName} ${val.lastName}" disabled></td>
                  <td class="rowmem"><input type="text" value="${val.username}" disabled></td>
                  <td class="rowmem"><input type="text" value="${val.email}" disabled></td>
                  <td  class="rowmem row4">
                 <span style="display:flex;  align-items: center;justify-content:space-between"> <button class="editbtn" onClick="editItem(${val.id})" style="display: flex; align-items: center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" height="15"
                    width="15"
                    color="white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>&nbsp;
 <span>Edit</span></button>&nbsp;
                  <button class="deletebtn" onClick="removeItem(${val.id})"  style="display: flex; align-items: center;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" height="15"
                    width="15"
                    color="white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>&nbsp;
 <span>Delete</span></button></span>
                  </td>
            </tr>
                  `;
    });
    document.getElementById("meminfo").innerHTML = myData;
  })
  .catch((err) => {
    console.log(err);
  });

function removeItem(a) {
  let b = document.getElementById(a);
  b.style.display = "none";
}

function editItem(a) {
  const row = document.getElementById(a);
  const inputs = row.querySelectorAll("input");
  inputs.forEach((input) => {
    input.disabled = false;
  });
}
document.getElementById("ham").addEventListener("click", () => {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
  let body=document.getElementById("body");
  let s=document.getElementById("sidebar");
  s.style.height=`${document.body.offsetHeight}px`;
  
});
document.querySelectorAll(".menu").forEach((item) => {
  item.addEventListener("click", () => {
    const menuItem = item.parentElement;
    menuItem.classList.toggle("expanded");

    const arrow = item.querySelector(".dropdnarr");
    arrow.classList.toggle("rotate");
  });
});
