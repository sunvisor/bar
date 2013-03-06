Ext.define('Bar.view.CondForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.condform',
    requires: ['Ext.field.Select'],
    config: {
        layout: 'vbox',
        title: 'Search',
        items: [{
            name: 'pref',
            label: '県',
            xtype: 'selectfield',
            store: 'Prefs',
            displayField: 'pref',
            valueField: 'id'
        }, {
            name: 'address',
            label: '住所',
            xtype: 'textfield'
        }, {
            name: 'access',
            label: '最寄駅',
            xtype: 'textfield'
        }, {
            name: 'type',
            xtype: 'selectfield',
            label: 'タイプ',
            options: [
                {value: '0' , text: '全タイプ'},
                {value: '1' , text: 'ダイニングバー'},
                {value: '2' , text: 'ホテルバー'},
                {value: '3' , text: 'ダーツバー'},
                {value: '4' , text: 'ショットバー'},
                {value: '5' , text: 'オーセンティックバー'},
                {value: '6' , text: 'スタンディングバー'},
                {value: '7' , text: 'バール'},
                {value: '8' , text: 'カフェバー'},
                {value: '9' , text: 'スポーツバー'},
                {value: '10', text: 'アイリッシュパブ'},
                {value: '11', text: 'プールバー'},
                {value: '12', text: 'ソウルバー'},
                {value: '13', text: 'ロックバー'},
                {value: '14', text: 'ジャズバー'},
                {value: '15', text: 'ピアノバー'},
                {value: '16', text: 'ワインバー'},
                {value: '17', text: '焼酎バー'},
                {value: '18', text: 'ガールズバー'}
            ]
        }, {
            name: 'budget',
            label: '予算',
            xtype: 'selectfield',
            options: [
                {value: undefined, text: '指定しない'},
                {value: '01', text: '2,000円未満'},
                {value: '02', text: '2,000円以上～3,000円未満'},
                {value: '03', text: '3,000円以上～5,000円未満'},
                {value: '04', text: '5,000円以上～7,000円未満'},
                {value: '05', text: '7,000円以上～10,000円未満'},
                {value: '06', text: '10,000円以上'}
            ]
        }, {
            xtype: 'toolbar',
            docked: 'bottom',
            layout: 'hbox',
            defaults: {
                flex: 1,
                margin: 5
            },
            items: [{
                ui: 'confirm',
                text: '検索する',
                handler: function() {
                    var p = this.up('condform');

                    p.fireEvent('search', p, p.getValues());
                }
            }, {
                text: 'クリア',
                handler: function() {
                    this.up('condform').reset();
                }
            }]
        }]
    }
});

