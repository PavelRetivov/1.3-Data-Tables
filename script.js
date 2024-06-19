function DataTable(config, data) {
    let elementDiv = document.querySelector(config.parent);
    let table = document.createElement('table');
    elementDiv.appendChild(table);

    creatColums(config.columns, table);
    creatRows(table, data, config.columns);
 }

 let creatColums = (columns, table) => {
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');

    columns.forEach(element => {
        let th = document.createElement('th');
        th.id = element.value;
        th.textContent = element.title;
        colStyle(th);
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
 }

 let creatRows = (table, data, columns) => {
    
    let tbody = document.createElement('tbody');
    let value = columns;

    data.forEach(arr => {
        
        let tr = document.createElement('tr');
       
        value.forEach(element => {
            let value = arr[element.value] !== undefined ? arr[element.value] : 'none'; 
            let td = document.createElement('td');
            rowStyle(td);
            td.textContent = value;
            tr.appendChild(td);
        });
        
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
 }
 let colStyle = (th) =>{
  th.style.width = '200px';
  th.style.border = '2px solid green';
  th.style.padding = '0';
  th.style.margin = '0';
  th.style.gap = '0';
  th.style.textAlign = 'center';
 }
 let rowStyle = (td) =>{
  td.style.width = '200px';
  td.style.border = '1px solid red';
  td.style.padding = '0';
  td.style.margin = '0';
  td.style.gap = '0';
  td.style.textAlign = 'center';
 }

 const config1 = {
   parent: '#usersTable',
   columns: [
     {title: 'Ім’я', value: 'name'},
     {title: 'Прізвище', value: 'surname'},
     {title: 'Вік', value: 'age'},
   ]
 };
 
 const config2 = {
    parent: '#usersTable',
    columns: [
      {title: 'Ім’я', value: 'name'},
      {title: 'Прізвище', value: 'surname'},
      {title: 'Вік', value: 'age'},
      {title: 'sdsd', value: 's'},
      {title: 'sdadadad', value: 'a'},
    ]
  };
 const users = [
   {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
   {id: 30051, name: 'Вася',  age: 15},
 ];
 const users2 = [
    {id: 30050,s: 51, name: 'Вася', surname: 'Петров', age: 12},
    {id: 30051, name: 'Вася', a:11,  age: 15},
  ];
  
 DataTable(config1, users);
 DataTable(config2, users2);



