// 自定义脚本，添加文档分类导航
(function ($) {

var pathname = location.pathname
var allowPathnames = ['/hc/kb/section', '/hc/kb/article']
var allow = false

$.each(allowPathnames, function (index, allowPathname) {
  if (pathname.indexOf(allowPathname) === 0) {
    allow = true
    return false
  }
})

// 是否在文档页，不在文档页则不执行
if (!allow) {
  return
}

var cssHref = 'https://raw.githubusercontent.com/zhanjiaxia/gizwits_doc/master/doc-nav.css'
var jsSrc = 'https://raw.githubusercontent.com/zhanjiaxia/gizwits_doc/master/doc-nav.js'

var $head = $('head').eq(0)
var cacheBuster = function (uri) { return uri + '?' + Math.random() }

// set style
$.ajax(cacheBuster(cssHref)).success(function (style) {
  $head.append('<style>'+ style +'</style>')

  // set javascript, 确保在 css 后载入, 防止闪烁
  $.ajax(cacheBuster(jsSrc)).success(function (src) {
    eval(src)
  })
})

})(jQuery);
