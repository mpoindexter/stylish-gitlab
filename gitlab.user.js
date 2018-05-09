// ==UserScript==
// @name         Make Gitlab Less Ugly
// @namespace    http://github.com/mpoindexter/stylish-gitlab
// @version      0.1
// @description  Make Gitlab Less Ugly
// @author       mpoindexter
// @match        https://git.housecanary.net/*/merge_requests/*
// @grant        none
// @run-at document-end
// ==/UserScript==

(function() {
    'use strict';

    var mr = document.querySelector('.merge-request');
    var description = document.querySelector('.merge-request .detail-page-description');
    if (description && mr) {
        description.parentNode.removeChild(description);
        mr.insertBefore(description, mr.firstChild);
    }
    var details = document.querySelector('.merge-request .merge-request-details');
    var widget = document.querySelector('.merge-request .mr-state-widget');
    var emoji = document.querySelector('.merge-request .emoji-list-container');
    if (details && emoji) {
        emoji.parentNode.removeChild(emoji);
        details.appendChild(emoji);
    }
    if (details && widget) {
        widget.parentNode.removeChild(widget);
        details.appendChild(widget);
    }
})();
