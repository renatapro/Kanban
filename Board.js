var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
	'X-Client-Id': 'X-Client-Id',
	'X-Auth-Token': 'X-Auth-Token'
};

$.ajaxSetup({
	headers: myHeaders
});

var board = {
	name: 'Tablica Kanban',
	createColumn: function(column) {
		this.element.append(column.element);
		initSortable();
	},
	element: $('#board .column-container')
};

$('.create-column')
	.click(function(){
		var columnName = prompt('Wpisz nazwę kolumny');
		$.ajax({
			url: baseUrl + '/column',
			method: 'POST',
			data: {
				name: columnName
			},
			success: function(response){
				var column = new Column(response.id, columnName);
				board.createColumn(column);
			}
		});
	});
	
function initSortable() {
	$('.card-list').sortable({
		connectWith: '.card-list',
		placeholder: 'card-placeholder'
	}).disableSelection();
}