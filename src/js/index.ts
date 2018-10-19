let list: HTMLUListElement = document.getElementById("pg") as HTMLUListElement;
let myAzureRequest = new Request("https://restcustomerservice20181007065419.azurewebsites.net/api/Customers");
let myRequest = new Request("http://localhost:5000/api/Customers");
let counter = 0;

fetch(myAzureRequest)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    const custs: Array<{ id: number, firstName: string, lastName: string, year: number }> = myJson;

    custs.forEach((c) => {
      // console.log("Adding customer: " + c.id);
      const node = document.createElement("li");

      node.setAttribute("id", String(counter));
      node.appendChild(document.createTextNode(
      `ID: ${c.id}, First name: ${c.firstName},
       Last name: ${c.lastName}, Year: ${c.year}`));

      list.appendChild(node);
      counter++;
    });
  });
