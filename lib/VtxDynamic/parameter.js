'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var systemCode = exports.systemCode = getSystemCode();
var systemTitle = exports.systemTitle = getTitle();
var access_token = exports.access_token = getToken();
var tenantId = exports.tenantId = getTenantId();
var userId = exports.userId = getUserId();
var userName = exports.userName = getUserName();
var token_type = exports.token_type = getTokenType();
var systemCodeVal = '',
    titleVal = '',
    tokenVal = '',
    tenantIdVal = '',
    userIdVal = '',
    userNameVal = '',
    token_typeVal = '';
function getSystemCode() {
  if (systemCodeVal) return systemCodeVal;
  systemCodeVal = getUrlParam('systemCode');
  return systemCodeVal;
}
function getToken() {
  if (tokenVal) return tokenVal;
  tokenVal = getAccessToken('access_token') || getAccessToken('token') || window.testUser && window.testUser.access_token || window.testUser && window.testUser.token;
  return tokenVal;
}
function getTokenType() {
  if (token_typeVal) return token_typeVal;
  token_typeVal = getAccessToken('token_type') ? getAccessToken('token_type') : 'bearer';
  return token_typeVal;
}
function getTenantId() {
  if (tenantIdVal) return tenantIdVal;
  tenantIdVal = getAccessToken('tenantId') || window.testUser && window.testUser.tenantId;
  return tenantIdVal;
}
function getUserId() {
  if (userIdVal) return userIdVal;
  userIdVal = getAccessToken('userId') || window.testUser && window.testUser.userId;
  return userIdVal;
}
function getUserName() {
  if (userNameVal) return userNameVal;
  userNameVal = getAccessToken('name') || window.testUser && window.testUser.name;
  return userNameVal;
}
function getTitle() {
  if (titleVal) return titleVal;
  titleVal = decodeURI(getUrlParam('title') ? getUrlParam('title') : '');
  return titleVal;
}
function getAccessToken(type) {
  var result = '';
  try {
    var data = localStorage.getItem('ACCESS-TOKEN');
    if (data) {
      data = JSON.parse(data);
      result = data[type];
      if (!result) {
        result = getUrlParam(type);
      }
    } else {
      result = getUrlParam(type);
    }
  } catch (error) {
    result = getUrlParam(type);
  }
  return result;
}

function getUrlParam(key) {
  var paramObj = [];
  var matchList = window.location.href.match(/([^\?&]+)=([^&]+)/g) || [];
  for (var i = 0, len = matchList.length; i < len; i++) {
    var r = matchList[i].match(/([^\?&]+)=([^&]+)/);
    paramObj[r[1]] = r[2];
  }
  if (key) {
    return paramObj[key];
  } else {
    return paramObj;
  }
}