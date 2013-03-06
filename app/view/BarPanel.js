Ext.define('Bar.view.BarPanel', {
    extend: 'Ext.Container',
    alias: 'widget.barpanel',
    config: {
        title: undefined,
        scrollable: 'vertical',
        items: [{
            itemId: 'barDetail',
            style: {
                'background-color': '#ffd'
            },
            tpl: [
                '<div class="bar_detail">',
                    '<div class="bar_name">{name}</div>',
                    '<div class="bar_address">',
                        '<div>{address}</div>',
                        '<div>{access}</div>',
                    '</div>',
                    '<div class="bar_address">',
                        '<table>',
                            '<col class="bar_cap">',
                            '<col class="bar_value">',
                            '<tr>',
                                '<td class="bar_cap">タイプ</td>',
                                '<td class="bar_value">{type}</td>',
                            '</tr>',
                            '<tr>',
                                '<td class="bar_cap">予算</td>',
                                '<td class="bar_value">{budget}</td>',
                            '</tr>',
                            '<tr>',
                                '<td class="bar_cap">席数</td>',
                                '<td class="bar_value">{capacity}</td>',
                            '</tr>',
                            '<tr>',
                                '<td class="bar_cap">定休日</td>',
                                '<td class="bar_value">{close}</td>',
                            '</tr>',
                            '<tr>',
                                '<td class="bar_cap">営業時間</td>',
                                '<td class="bar_value">{open}</td>',
                            '</tr>',
                        '</table>',
                    '</div>',
                    '<div class="bar_image">',
                        '<img src="{url_photo_s1}" />',
                        '<img src="{url_photo_s2}" />',
                    '</div>',
                    '<div class="bar_navi">',
                        '<a href="http://webapi.suntory.co.jp/barnavidocs/" target="_blank">',
                        '<img alt="Bar-Navi Web API" border="0" width="145" height="35" ',
                        'src="http://webapi.suntory.co.jp/barnavidocs/banner/barnavi_145_35_1.gif" ',
                        'title="Bar-Navi Web API" /></a>',
                    '</div>',
                '</div>'
            ]
        }, {
            xtype: 'toolbar',
            docked: 'bottom',
            items: [{
                iconCls: 'locate',
                iconMask: true,
                text: '地図',
                handler: function(button) {
                    var p = button.up('barpanel'),
                        data = p.down('#barDetail').getData();

                    p.fireEvent('openmap', data);
                }
            }]
        }]
    },

    setData: function(data) {
        var me = this;

        me.down('#barDetail').setData(data);
        me.setTitle(data.name);
    }
});
