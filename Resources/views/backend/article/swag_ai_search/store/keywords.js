

Ext.define('Shopware.apps.Article.swagAiSearch.store.Keywords', {
    extend: 'Ext.data.Store',

    model: 'Shopware.apps.Article.swagAiSearch.model.Keyword',

    proxy: {
        type: 'ajax',
        url: '{url action="list" controller="SwagAiSearch"}',
        reader:{
            type:'json',
            root:'data',
            totalProperty:'total'
        }
    }
});