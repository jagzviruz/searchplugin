'use strict';

var url = "http://www.amazon.com/s?field-keywords=";
//this I extracted from the amazon search results.
$('#searchBtn').click(function(e) {
    e.preventDefault();
    var searchTerms = $('#searchTerm').val();
    chrome.tabs.create({
        url: url + searchTerms
    });
});