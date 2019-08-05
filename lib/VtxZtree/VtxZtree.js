'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isEqual2 = require('lodash/isEqual');

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _merge2 = require('lodash/merge');

var _merge3 = _interopRequireDefault(_merge2);

var _debounce2 = require('lodash/debounce');

var _debounce3 = _interopRequireDefault(_debounce2);

require('./VtxZtree.css');

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

require('antd/lib/input/style/css');

var _default = require('../default');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
    treeComponent: 'vtx-ui-ztree-component',
    withSearchBox: 'vtx-ui-ztree-withsearchbox',
    searchBox: 'vtx-ui-ztree-searchbox',
    ztree: 'vtx-ui-ztree-tree-ct'
};

var VtxZtree = function (_React$Component) {
    (0, _inherits3.default)(VtxZtree, _React$Component);

    function VtxZtree(props) {
        (0, _classCallCheck3.default)(this, VtxZtree);

        var _this = (0, _possibleConstructorReturn3.default)(this, (VtxZtree.__proto__ || (0, _getPrototypeOf2.default)(VtxZtree)).call(this));

        _this.treeId = 'tree-' + new Date().getTime() + '-' + parseInt(Math.random() * 10000);
        _this.zTreeObj = null;
        _this.treeSetting = {};
        _this.treeNodes = [];
        _this.keyNameMapping = {};
        _this.searchTimeOutId = null;
        _this.loadPromise = _this.loadTreeResource();
        _this.loadComplete = false;
        _this.fuzzySearch = (0, _debounce3.default)(_this.fuzzySearch.bind(_this), 300);
        _this.state = {
            searchVal: ''
        };
        return _this;
    }

    (0, _createClass3.default)(VtxZtree, [{
        key: 'loadTreeResource',
        value: function loadTreeResource() {
            if (!$.fn.zTree) {
                var treeAll = new _promise2.default(function (resolve) {
                    $.getScript(_default2.default.ztreeServer + '/js/jquery.ztree.all.min.js', function () {
                        $.getScript(_default2.default.ztreeServer + '/js/jquery.ztree.exhide.min.js', function () {
                            resolve();
                        });
                    });
                });
                $("<link>").attr({ rel: "stylesheet", type: "text/css", href: _default2.default.ztreeServer + '/css/zTreeStyle/zTreeStyle.css' }).appendTo("head");
                return treeAll;
            } else {
                return new _promise2.default(function (resolve) {
                    resolve();
                });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.loadPromise.then(function () {
                _this2.loadComplete = true;
                _this2.refreshTree(_this2.props);
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (!this.loadComplete) return;
            if (!(0, _isEqual3.default)(prevProps.refreshFlag, this.props.refreshFlag) || !(0, _isEqual3.default)(prevProps.data, this.props.data)) {
                this.refreshTree(this.props);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.zTreeObj && this.zTreeObj.destroy();
        }
        // 初始化树的配置

    }, {
        key: 'initTreeSetting',
        value: function initTreeSetting(props) {
            var t = this;
            // 初始化树的配置
            this.treeSetting = {
                check: {
                    enable: !!props.checkable,
                    chkboxType: props.checkStrictly ? { "Y": "", "N": "" } : { "Y": "ps", "N": "ps" }
                },
                view: {
                    selectedMulti: !!props.multiple,
                    showIcon: true,
                    expandSpeed: 'normal',
                    showTitle: false,
                    fontCss: function fontCss(treeId, treeNode) {
                        return treeNode.selectable ? {} : { color: "#B9B9B9" };
                    }
                },
                callback: {
                    beforeClick: function beforeClick(treeId, treeNode, clickFlag) {
                        return treeNode.selectable;
                    },
                    beforeCheck: function beforeCheck(treeId, treeNode) {
                        return props.beforeCheck ? props.beforeCheck(treeNode) : true;
                    },
                    onClick: function onClick(e, treeId, treeNode, clickFlag) {
                        // console.log('点击节点信息',treeNode)
                        if (typeof props.onClick == 'function') {
                            var selectedNodes = t.getSelectedNodes();
                            props.onClick({
                                key: treeNode.key,
                                treeNode: treeNode,
                                selectedNodes: selectedNodes,
                                selectedKeys: selectedNodes.map(function (item) {
                                    return item.key;
                                }),
                                selectedNames: selectedNodes.map(function (item) {
                                    return item.name;
                                })
                            });
                        }
                    },
                    onCheck: function onCheck(e, treeId, treeNode) {
                        // console.log('勾选节点信息',treeNode)
                        if (typeof props.onCheck == 'function') {
                            var checkedNodes = t.getCheckedNodes();
                            props.onCheck({
                                key: treeNode.key,
                                isChecked: treeNode.checked,
                                treeNode: t.zTreeObj.getChangeCheckedNodes(),
                                checkedNodes: checkedNodes,
                                checkedKeys: checkedNodes.map(function (item) {
                                    return item.key;
                                }),
                                checkedNames: checkedNodes.map(function (item) {
                                    return item.name;
                                })
                            });
                        }
                    },
                    onExpand: function onExpand(e, treeId, treeNode) {
                        // console.log('展开节点信息',treeNode)
                        if (typeof props.onExpand == 'function') {
                            props.onExpand({
                                key: treeNode.key,
                                isExpand: true,
                                treeNode: treeNode,
                                expandedKeys: t.zTreeObj.getNodesByParam('open', true).map(function (item) {
                                    return item.key;
                                })
                            });
                        }
                    },
                    onCollapse: function onCollapse(e, treeId, treeNode) {
                        // console.log('收起节点信息',treeNode)
                        if (typeof props.onExpand == 'function') {
                            props.onExpand({
                                key: treeNode.key,
                                isExpand: false,
                                treeNode: treeNode,
                                expandedKeys: t.zTreeObj.getNodesByParam('open', true).map(function (item) {
                                    return item.key;
                                })
                            });
                        }
                    },
                    onRightClick: function onRightClick(e, treeId, treeNode) {
                        // console.log('右击节点信息',treeNode);
                        if (typeof props.onRightClick == 'function') {
                            props.onRightClick({
                                event: e,
                                key: treeNode.key,
                                treeNode: treeNode
                            });
                        }
                    },
                    onDblClick: function onDblClick(e, treeId, treeNode) {
                        // console.log('双击节点信息',treeNode);
                        if (typeof props.onDblClick == 'function') {
                            props.onDblClick({
                                event: e,
                                key: treeNode.key,
                                treeNode: treeNode
                            });
                        }
                    }
                }
            };
            // 继承外部配置
            if ((0, _typeof3.default)(this.props.customCfg) == 'object') {
                (0, _merge3.default)(this.treeSetting, this.props.customCfg);
            }
        }
        // 初始化树的数据，对expandedKeys，checkedKeys做处理

    }, {
        key: 'initTreeNodes',
        value: function initTreeNodes(props) {
            var t = this;
            this.keyNameMapping = {};
            if (!Array.isArray(props.data)) {
                this.treeNodes = [];
            } else {
                var checkedKeys = props.checkedKeys || [];
                var expandedKeys = props.expandedKeys || [];
                var chkDisabled = !!props.disableCheckboxAll;
                this.treeNodes = function genNodes(nodes) {
                    return nodes.map(function (item) {
                        var checked = checkedKeys.indexOf(item.key) != -1;
                        var open = expandedKeys.indexOf(item.key) != -1;
                        t.keyNameMapping[item.key] = item.name;
                        if (Array.isArray(item.children) && item.children.length > 0) {
                            return (0, _extends3.default)({
                                chkDisabled: chkDisabled,
                                selectable: true
                            }, item, {
                                checked: checked,
                                open: open,
                                children: genNodes(item.children)
                            });
                        } else {
                            return (0, _extends3.default)({
                                chkDisabled: chkDisabled,
                                selectable: true
                            }, item, {
                                checked: checked,
                                open: open
                            });
                        }
                    }).map(function (item) {
                        if (Array.isArray(item.children) && item.children.length > 0) {
                            var newNode = (0, _extends3.default)({}, item);
                            // 如果子节点全部被勾选，父节点自动勾选
                            if (item.children.every(function (item) {
                                return item.checked;
                            })) {
                                newNode.checked = true;
                            }
                            // 如果配置了自动展开父节点，父节点自动展开
                            if (props.autoExpandParent && item.children.some(function (item) {
                                return item.open;
                            })) {
                                newNode.open = true;
                            }
                            return newNode;
                        } else {
                            return item;
                        }
                    });
                }(props.data);
            }
        }
        // 重新生成树

    }, {
        key: 'refreshTree',
        value: function refreshTree(newProps) {
            this.zTreeObj && this.zTreeObj.destroy();
            this.initTreeSetting(newProps);
            this.initTreeNodes(newProps);
            this.zTreeObj = $.fn.zTree.init($('#' + this.treeId), this.treeSetting, this.treeNodes);
            // if(Array.isArray(newProps.checkedKeys))this.checkNodes(newProps.checkedKeys);
            // if(Array.isArray(newProps.expandedKeys)){
            //     this.expandNodes(newProps.expandedKeys);
            // }
            if (Array.isArray(newProps.selectedKeys)) this.selectNodes(newProps.selectedKeys, newProps.multiple);

            // 初始化全展开判断
            if (newProps.defaultExpandAll && !newProps.expandedKeys) {
                this.zTreeObj.expandAll(true);
            }
        }
        // 展开或折叠相关节点,expandFlag为true表示展开,false表示折叠

    }, {
        key: 'expandNodes',
        value: function expandNodes(expandedKeys) {
            var expandFlag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            for (var i = 0, len = expandedKeys.length; i < len; i++) {
                var node = this.zTreeObj.getNodesByParam('key', expandedKeys[i]).pop();
                if (node) {
                    this.zTreeObj.expandNode(node, expandFlag, false, false);
                }
            }
        }
        // 勾选节点, checkedFlag为true表示勾选,false表示取消勾选

    }, {
        key: 'checkNodes',
        value: function checkNodes(checkedKeys) {
            var checkedFlag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            for (var i = 0, len = checkedKeys.length; i < len; i++) {
                var node = this.zTreeObj.getNodesByParam('key', checkedKeys[i]).pop();
                if (node) {
                    // 隐藏节点的勾选状态也要改变
                    node.checked = checkedFlag;
                    this.zTreeObj.updateNode(node, true);
                    // this.zTreeObj.checkNode(node,checkedFlag,false);
                }
            }
        }
        // 点击选择节点

    }, {
        key: 'selectNodes',
        value: function selectNodes(selectedKeys, multiple) {
            for (var i = 0, len = selectedKeys.length; i < len; i++) {
                var node = this.zTreeObj.getNodesByParam('key', selectedKeys[i]).pop();
                if (node) {
                    this.zTreeObj.selectNode(node, multiple, true);
                }
            }
        }
        // 取消选择节点

    }, {
        key: 'cancelSelectedNodes',
        value: function cancelSelectedNodes(selectedKeys) {
            for (var i = 0, len = selectedKeys.length; i < len; i++) {
                var node = this.zTreeObj.getNodesByParam('key', selectedKeys[i]).pop();
                if (node) {
                    this.zTreeObj.cancelSelectedNode(node);
                }
            }
        }
    }, {
        key: 'fuzzySearch',
        value: function fuzzySearch(keyworld) {
            var isHighLight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var isExpand = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            var t = this;
            var nameKey = this.zTreeObj.setting.data.key.name; //get the key of the node name
            // isHighLight = isHighLight===false?false:true;//default true, only use false to disable highlight
            // isExpand = isExpand?true:false; // not to expand in default
            this.zTreeObj.setting.view.nameIsHTML = isHighLight; //allow use html in node name for highlight use

            var metaChar = '[\\[\\]\\\\\^\\$\\.\\|\\?\\*\\+\\(\\)]'; //js meta characters
            var rexMeta = new RegExp(metaChar, 'gi'); //regular expression to match meta characters

            // searchNodeLazy(keyworld);
            ztreeFilter(t.zTreeObj, keyworld);

            // -----------------------------内部函数----------------------------------
            // keywords filter function 
            function ztreeFilter(zTreeObj, _keywords, callBackFunc) {
                if (!_keywords) {
                    _keywords = ''; //default blank for _keywords 
                }

                // function to find the matching node
                function filterFunc(node) {
                    if (node && node.oldname && node.oldname.length > 0) {
                        node[nameKey] = node.oldname; //recover oldname of the node if exist
                    }
                    zTreeObj.updateNode(node); //update node to for modifications take effect
                    if (_keywords.length == 0) {
                        //return true to show all nodes if the keyword is blank
                        zTreeObj.showNode(node);
                        zTreeObj.expandNode(node, isExpand);
                        return true;
                    }
                    //transform node name and keywords to lowercase
                    if (node[nameKey] && node[nameKey].toLowerCase().indexOf(_keywords.toLowerCase()) != -1) {
                        if (isHighLight) {
                            //highlight process
                            //a new variable 'newKeywords' created to store the keywords information 
                            //keep the parameter '_keywords' as initial and it will be used in next node
                            //process the meta characters in _keywords thus the RegExp can be correctly used in str.replace
                            var newKeywords = _keywords.replace(rexMeta, function (matchStr) {
                                //add escape character before meta characters
                                return '\\' + matchStr;
                            });
                            node.oldname = node[nameKey]; //store the old name  
                            var rexGlobal = new RegExp(newKeywords, 'gi'); //'g' for global,'i' for ignore case
                            //use replace(RegExp,replacement) since replace(/substr/g,replacement) cannot be used here
                            node[nameKey] = node.oldname.replace(rexGlobal, function (originalText) {
                                //highlight the matching words in node name
                                var highLightText = '<span style="color: whitesmoke;background-color:#f50;">' + originalText + '</span>';
                                return highLightText;
                            });
                            zTreeObj.updateNode(node); //update node for modifications take effect
                        }
                        zTreeObj.showNode(node); //show node with matching keywords
                        return true; //return true and show this node
                    }

                    zTreeObj.hideNode(node); // hide node that not matched
                    return false; //return false for node not matched
                }

                var nodesShow = zTreeObj.getNodesByFilter(filterFunc); //get all nodes that would be shown
                processShowNodes(zTreeObj, nodesShow, _keywords); //nodes should be reprocessed to show correctly
            }

            /**
             * reprocess of nodes before showing
             */
            function processShowNodes(zTreeObj, nodesShow, _keywords) {
                if (nodesShow && nodesShow.length > 0) {
                    //process the ancient nodes if _keywords is not blank
                    if (_keywords.length > 0) {
                        $.each(nodesShow, function (n, obj) {
                            var pathOfOne = obj.getPath(); //get all the ancient nodes including current node
                            if (pathOfOne && pathOfOne.length > 0) {
                                //i < pathOfOne.length-1 process every node in path except self
                                for (var i = 0; i < pathOfOne.length - 1; i++) {
                                    zTreeObj.showNode(pathOfOne[i]); //show node 
                                    zTreeObj.expandNode(pathOfOne[i], true); //expand node
                                }
                            }
                        });
                    } else {
                        //show all nodes when _keywords is blank and expand the root nodes
                        var rootNodes = zTreeObj.getNodesByParam('level', '0'); //get all root nodes
                        $.each(rootNodes, function (n, obj) {
                            zTreeObj.expandNode(obj, true); //expand all root nodes
                        });
                    }
                }
            }

            // function searchNodeLazy(_keywords) {
            //     if (t.searchTimeOutId) { 
            //         //clear pending task
            //         clearTimeout(t.searchTimeOutId);
            //     }
            //     t.searchTimeOutId = setTimeout(function() {
            //         ztreeFilter(t.zTreeObj,_keywords); //lazy load ztreeFilter function 
            //     }, 500);
            // }
        }
        // 清空搜索框数据（供外部调用）

    }, {
        key: 'clearSearch',
        value: function clearSearch() {
            if (this.state.searchVal.trim() == '') return;
            this.setState({
                searchVal: ''
            });
            this.refreshTree(this.props);
        }
        // 获取所有已被勾选的节点

    }, {
        key: 'getCheckedNodes',
        value: function getCheckedNodes() {
            var _this3 = this;

            return this.zTreeObj.getNodesByFilter(function (node) {
                // 节点被勾选（非半勾状态）
                if (_this3.props.checkStrictly) return node.checked;
                return node.checked && node.check_Child_State != 1;
            }).map(function (item) {
                return (0, _extends3.default)({}, item, {
                    name: item.oldname || item.name // 搜索树会改变节点的name
                });
            });
        }
        // 获取所有已被点击选中的节点

    }, {
        key: 'getSelectedNodes',
        value: function getSelectedNodes() {
            return this.zTreeObj.getSelectedNodes().map(function (item) {
                return (0, _extends3.default)({}, item, {
                    name: item.oldname || item.name
                });
            });
        }
        // 展开所有节点（供外部调用）

    }, {
        key: 'expandAll',
        value: function expandAll() {
            this.zTreeObj.expandAll(true);
        }
        // 收起所有节点（供外部调用）

    }, {
        key: 'collapseAll',
        value: function collapseAll() {
            this.zTreeObj.expandAll(false);
        }
    }, {
        key: 'render',
        value: function render() {
            var t = this;
            return _react2.default.createElement(
                'div',
                { className: this.props.isShowSearchInput ? style.treeComponent + ' ' + style.withSearchBox : style.treeComponent },
                this.props.isShowSearchInput ? _react2.default.createElement(
                    'div',
                    { className: style.searchBox },
                    _react2.default.createElement(_input2.default, {
                        value: t.state.searchVal,
                        placeholder: t.props.placeholder || '请输入要查询的关键字',
                        onChange: function onChange(e) {
                            t.setState({
                                searchVal: e.target.value
                            });
                            t.fuzzySearch(e.target.value.trim());
                        }
                    })
                ) : null,
                _react2.default.createElement('div', { id: this.treeId, className: 'ztree ' + style.ztree, style: { height: '100%' } })
            );
        }
    }]);
    return VtxZtree;
}(_react2.default.Component);

exports.default = VtxZtree;
module.exports = exports['default'];