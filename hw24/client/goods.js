const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const userId = urlParams.get('userId');
sendAjax({
    method: 'GET',
    url: `http://sabnock.synology.me:8080/goods/${userId}`,
    success: function (response) {
        let goods = JSON.parse(response);
        fillTable(goods);
    },
    error: function (status, message) {                
        if (status == 401) {
            let errorSpan = document.querySelector('#error');
            errorSpan.classList.remove('hidden');
        }
    }
})

function fillTable(goods){
    let table = document.querySelector('#goods');
    let rows = getTableData(goods);
    table.append(rows);
}

function mapData(data, func){
    return data.map(key => func(key));
}

function getTableData(data) {
    let fragment = document.createDocumentFragment();
    data.map(el => fragment.append(getTableRow(mapData(getObjectValues(el), getTagTD))));
    return fragment;
}

function getTagTD(el) {
    let td = document.createElement('td');
    td.innerText = el;
    return td;
}

function getTableRow(tds) {
    let tr = document.createElement('tr');
    tds.forEach(td => {
        tr.append(td);    
    });
    return tr;
}

function getObjectValues(data) {
    return Object.values(data);
}