Ext.define('Bar.model.Bar', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'access', type: 'string' },
            {name: 'address', type: 'string' },
            {name: 'budget', type: 'string' },
            {name: 'capacity', type: 'string' },
            {name: 'close', type: 'string' },
            {name: 'id', type: 'string' },
            {name: 'lat_tokyo', type: 'string' },
            {name: 'lat_world', type: 'string' },
            {name: 'lng_tokyo', type: 'string' },
            {name: 'lng_world', type: 'string' },
            {name: 'name', type: 'string' },
            {name: 'name_kana', type: 'string' },
            {name: 'open', type: 'string' },
            {name: 'private_room', type: 'string' },
            {name: 'type', type: 'string' },
            {name: 'url_mobile', type: 'string' },
            {name: 'url_pc', type: 'string' },
            {name: 'url_photo_k1', type: 'string' },
            {name: 'url_photo_l1', type: 'string' },
            {name: 'url_photo_l2', type: 'string' },
            {name: 'url_photo_s1', type: 'string' },
            {name: 'url_photo_s2', type: 'string' },
            {name: 'url_photo_s3', type: 'string' },
            {name: 'url_photo_s4', type: 'string' },
            {
                name: 'loc',
                convert: function(value, record) {
                    loc = new google.maps.LatLng(
                        record.get('lat_world'),
                        record.get('lng_world')
                    );
                    return loc;
                }
            }
        ],

        proxy: {
            type: 'jsonp',
            url: 'http://webapi.suntory.co.jp/barnavi/v2/shops',
            limitParam: 'count',
            extraParams: {
                key: 'e0b5f396136d97fe84fad1bc1b4a9dd70b4ab1a7cc4322f876864173ccaf305a',
                url: 'http://www.sunvisor.net',
                format: 'jsonp',
                pattern: '0',
                pref: '27'
            },
            reader: {
                type: 'json',
                rootProperty: 'shops.shop',
                totalProperty: 'shops.results_available'
            }
        }
    }
});
